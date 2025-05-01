// src/app/App.tsx
import { Routes, Route, useNavigate } from "react-router-dom";
import Retirar from "./pages/withdraw.tsx";
import Transacoes from "./pages/history.tsx";
import Depositar from "./pages/deposit.tsx";
import depo from '../assets/depo.png';
import reti from '../assets/reti.png';
import hist from '../assets/hist.png';

function HomePage() {
  const navigate = useNavigate();

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
        <label>O que você deseja fazer?
          <div className="saldo">Saldo Atual: 000</div>
        </label>

        <div className="actions">
          <button className="card" onClick={() => navigate("/deposit")}>
            <strong>Depositar</strong>
            <img src={depo} alt="Depositar" />
          </button>

          <button className="card" onClick={() => navigate("/withdraw")}>
            <strong>Retirar</strong>
            <img src={reti} alt="Retirar" />
          </button>

          <button className="card" onClick={() => navigate("/history")}>
            <strong>Transações</strong>
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
    </Routes>
  );
}
