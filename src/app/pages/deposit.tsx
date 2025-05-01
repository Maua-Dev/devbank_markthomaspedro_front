import React from "react";
import { useNavigate } from "react-router-dom";

const Depositar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Depósito</h1>
      <p>Digite o valor para depositar.</p>

      {/* Botão de voltar */}
      <button onClick={() => navigate("/")}>
        Voltar
      </button>
    </div>
  );
};

export default Depositar;
