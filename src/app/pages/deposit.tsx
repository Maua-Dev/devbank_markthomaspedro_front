import { useState } from "react";
import { API_URL } from "../environment";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type depositResponse = {
  "2": number
  "5": number
  "10": number
  "20": number
  "50": number
  "100": number
  "200": number
}

type userResponse = {
  name: string
  agency: string
  account: string
  current_balance: number
}


const denominations = [
  { value: 2, label: "2 R$" },
  { value: 5, label: "5 R$" },
  { value: 10, label: "10 R$" },
  { value: 20, label: "20 R$" },
  { value: 50, label: "50 R$" },
  { value: 100, label: "100 R$" },
  { value: 200, label: "200 R$" },
];
const Depositar = () => {
  const navigate = useNavigate();
  const [deposit, setDeposit] = useState<depositResponse>();
  const [usuario, setUsuario] = useState<userResponse>();
  const [Quantity, SetQuantity] = useState<Record<number, number>>({});
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  async function getUsuario() {
    const dados = await fetch(API_URL, {
      method: "GET"
    })

    const response = (await dados.json()) as userResponse
    setUsuario(response)
  }

  async function postDeposit() {
    try {
      const response = await fetch(API_URL + "/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Quantity),
      });

      if (response.status === 403) {
        setShowErrorModal(true);
        return;
      }

      if (!response.ok) {
        throw new Error("Erro no depósito");
      }

      const data = await response.json();
      setDeposit(data);
      setUsuario((prev) => prev ? { ...prev, current_balance: data.current_balance } : prev);
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar depósito.");
    }
  }


  useEffect(() => { getUsuario() }, [])

  return (
    <body>
      <header className="header">
        <div className="logo">DEV BANK</div>
        <div className="user-info">
          <div><b>Nome:</b> {usuario?.name}</div>
          <div><b>Agência:</b> {usuario?.agency}</div>
          <div><b>Conta:</b> {usuario?.account}</div>
        </div>
      </header>
      <div className="label-deposit">
        <label className="label">
          <div className="saldo"><b>Saldo:</b> R$ {usuario?.current_balance}</div>
          <div className="saldo">
            Quantidade Depositada:{" "}
            {Object.entries(Quantity).reduce(
              (total, [val, qty]) => total + Number(val) * qty,
              0
            )}{" "}
            R$
          </div>
        </label>
      </div>
      <div className="botao-container">
        <span className="selecionar">
          Selecione a quantidade que deseja depositar:
        </span>
        {denominations.map((denom) => (
          <div key={denom.value} className="nota-item">
            <button className="button-cash2">{denom.label}</button>
            <div className="quantidade">
              <span>Quantidade</span>
              <input
                type="number"
                min="0"
                value={Quantity[denom.value] || 0}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  SetQuantity((prev) => ({ ...prev, [denom.value]: val }));
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="voltar-espacamento">
        <button className="voltar" onClick={() => navigate("/")}>Voltar</button>
        <button className="voltar" onClick={postDeposit}>Depositar</button>
      </div>

      {/* ALERTA DE DEPÓSITO SUSPEITO */}
      {showErrorModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">⚠️</div>
            <h2 className="modal-title">Erro!</h2>
            <p className="modal-message">Depósito suspeito</p>
            <button onClick={() => setShowErrorModal(false)} className="modal-button">
              Ok
            </button>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">🎉</div>
            <h2 className="modal-title">Sucesso !!!</h2>
            <p className="modal-message">Deposito realizado</p>
            <button onClick={() => setShowSuccessModal(false)} className="modal-button">
              Ok
            </button>
          </div>
        </div>
      )}

    </body>
  );
};

export default Depositar;
