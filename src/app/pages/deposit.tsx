import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const denominations = [
  {value: 2, label: "2 R$"},
  {value: 5, label: "5 R$"},
  {value: 10, label: "10 R$"},
  {value: 20, label: "20 R$"},
  {value: 50, label: "50 R$"},
  {value: 100, label: "100 R$"},
  {value: 200, label: "200 R$"},
]
const Depositar = () => {
  const navigate = useNavigate();
  const [Quantity, SetQuantity] = useState<Record<number,number>>({});
  const SaldoAtual = 0;
  const Q2 =0;


  return (
    <body>
      <header>
        <div className="logo">DEV BANK</div>
        <div className="user-info">
           Nome: Mark <br />
           Agência: 0000<br />
           Conta: 00000-0<br />
          </div>
      </header>
      <div className = "main">
        <label>
          <div className="deposit">Saldo Atual: 000</div>
          <div className= "quantity"> Quantidade Depositada: 000</div>
          <div className="quantity"> Total: 000</div>
        </label>
      </div>
      <button></button>
    </body>
  );
};

export default Depositar;
