import React from "react";
import { useNavigate } from "react-router-dom";

const retirar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Retirar</h1>
      <p>Digite o valor para retirar.</p>

      {/* Botão de voltar */}
      <button onClick={() => navigate("/")}>
        Voltar
      </button>
    </div>
  );
};

export default retirar;