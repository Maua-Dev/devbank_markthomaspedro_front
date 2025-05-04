// src/app/App.tsx
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "./environment";
import Retirar from "./pages/withdraw.tsx";
import Transacoes from "./pages/history.tsx";
import Depositar from "./pages/deposit.tsx";
import Meme from "./pages/meme.tsx";
import depo from '../assets/depo.png';
import reti from '../assets/reti.png';
import hist from '../assets/hist.png';

type userResponse = {
  name: string
  agency: string
  account: string
  current_balance: number
}

function HomePage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<userResponse>();

  async function getUsuario() {
    const dados = await fetch(API_URL, {
      method: "GET"
    })

    const response = (await dados.json()) as userResponse
    setUsuario(response)
  }

  useEffect(() => { getUsuario() }, [])

  return (
    <body>
      <header className="header">
        <div className="logo"><span><button className="meme" onClick={() => navigate("/meme")}>D</button>EV</span> BANK</div>
        <p>by Mark Downey, Thomas Machado e Pedro Riccomi</p>
        <div className="user-info">
          <div><b>Nome:</b> {usuario?.name}</div>
          <div><b>Agência:</b> {usuario?.agency}</div>
          <div><b>Conta:</b> {usuario?.account}</div>
        </div>
      </header>

      <div className="main">
        <label className="label">O que você deseja fazer?
          <div className="saldo">Saldo Atual: R$ {usuario?.current_balance}</div>
        </label>

        <div className="actions">
          <button className="card" onClick={() => navigate("/deposit")}>
            <span>Depositar</span>
            <img src={depo} alt="Depositar"/>
          </button>

          <button className="card" onClick={() => navigate("/withdraw")}>
            <span>Retirar</span>
            <img src={reti} alt="Retirar" />
          </button>

          <button className="card" onClick={() => navigate("/history")}>
            <span>Transações</span>
            <img src={hist} alt="Transação" />
          </button>
        </div>
      </div>
    </body>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deposit" element={<Depositar />} />
      <Route path="/withdraw" element={<Retirar />} />
      <Route path="/history" element={<Transacoes />} />
      <Route path="/meme" element={<Meme />} />
    </Routes>
  );
}
