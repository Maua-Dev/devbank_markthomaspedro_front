import { useEffect } from "react";
import { UNSAFE_useScrollRestoration, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../environment";

type Transaction = {
  type: string
  timestamp: number
  current_balance: number
  value: number
}

type historyResponse = {
  all_transactions: Transaction[];
}

type userResponse = {
  name: string
  agency: string
  account: string
  current_balance: number
}

const transacoes = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<historyResponse>();
  const [usuario, setUsuario] = useState<userResponse>();

  async function getHist() {
    const dados = await fetch(API_URL + "/history", {
      method: "GET"
    })

    const response = (await dados.json()) as historyResponse
    setHistory(response)
  }

  async function getUsuario() {
    const dados = await fetch(API_URL, {
      method: "GET"
    })

    const response = (await dados.json()) as userResponse
    setUsuario(response)
  }

  function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    return date.toLocaleString("pt-BR");
  }

  useEffect(() => { getHist() }, [])
  useEffect(() => { getUsuario() }, [])

  return (
    <body>
      <header className="header">
        <div className="logo"><span>DEV</span> BANK</div>
        <div className="user-info">
          <div><b>Nome:</b> {usuario?.name}</div>
          <div><b>Agência:</b> {usuario?.agency}</div>
          <div><b>Conta:</b> {usuario?.account}</div>
        </div>
      </header>

      <div className="main">
        <label className="label">Histórico de Transações</label>

        {history?.all_transactions.map((item) => (
          <div className="history-card" key={item.timestamp}>
            <div><b>Tipo:</b> {item.type}</div>
            <div><b>Valor:</b> {item.value}</div>
            <div><b>Saldo:</b> {item.current_balance}</div>
            <div><b>Tempo:</b> {formatDate(item.timestamp)}</div>
          </div>
        ))}

        <div className="voltar-espacamento">
          <button className="voltar" onClick={() => navigate("/")}>Voltar</button>
        </div>

      </div>
    </body>
  );
};

export default transacoes;