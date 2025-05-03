import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [Quantity, SetQuantity] = useState<Record<number, number>>({});
  const SaldoAtual = 0;
  const Q2 = 0;

  return (
    <body>
      <header>
        <div className="logo">DEV BANK</div>
        <div className="user-info">
          Nome: Mark <br />
          Agência: 0000
          <br />
          Conta: 00000-0
          <br />
        </div>
      </header>
      <div className="label-deposit">
        <label>
          <div className="deposit">Saldo Atual: 000</div>
          <div className="quantity"> Quantidade Depositada: 000</div>
          <div className="quantity"> Total: 000</div>
        </label>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#d0e7ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        <span style={{ fontSize: 24 }}>
          selecione a quantidade a ser depositada
        </span>
      </div>
      <div className="botao-container">
        <div className="nota-item">
          <button className="button-cash2">2 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
        <div className="nota-item">
          <button className="button-cash2">5 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
        <div className="nota-item">
          <button className="button-cash2">10 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
      </div>
      <div className="botao-container">
        <div className="nota-item">
          <button className="button-cash2">20 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
        <div className="nota-item">
          <button className="button-cash2">500 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
        <div className="nota-item">
          <button className="button-cash2">100 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
        <div className="nota-item">
          <button className="button-cash2">200 R$</button>
          <div className="quantidade">
            <label>Quantidade</label>
            <input type="number" min="0" />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Depositar;
