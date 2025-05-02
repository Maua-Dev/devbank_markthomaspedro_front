import React from "react";
import { UNSAFE_useScrollRestoration, useNavigate } from "react-router-dom";
import { useState } from "react";

type historyResponse = {
  valor: string
  data: string
  saldo: string
  tipo: string
}

const transacoes = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<historyResponse>();

  async function getHist(): Promise<historyResponse>{
    const dados = await fetch("URL")

    return (await dados.json()) as historyResponse
  }

  return (
    <body>
      <header>
        <div className="logo"><span>DEV</span> BANK</div>
        <div className="user-info">
          Nome: Mark<br />
          Agência: 0000<br />
          Conta: 00000-0<br />
        </div>
      </header>
      <div className="main">
        <label>Histórico de Transações</label>

        <div>
          <h1 className="history-card">
            informacoes das transacoes
          </h1>
        </div>

        <button className="voltar" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </body>
  );
};

export default transacoes;