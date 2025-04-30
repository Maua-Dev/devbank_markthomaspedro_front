// src/app/App.tsx
import { Routes, Route, useNavigate } from "react-router-dom";
import Retirar from "../pages/retirar.tsx";
import Transacoes from "../pages/transacoes.tsx";
import Depositar from "../pages/Depositar.tsx";

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
          <button className="card" onClick={() => navigate("/depositar")}>
            <strong>Depositar</strong>
            <img src="..." alt="Depositar" />
          </button>

          <button className="card" onClick={() => navigate("/retirar")}>
            <strong>Retirar</strong>
            <img src="https://cdn-icons-png.flaticon.com/256/1570/1570917.png" alt="Retirar" />
          </button>

          <button className="card" onClick={() => navigate("/transacoes")}>
            <strong>Transações</strong>
            <img src="https://cdn-icons-png.flaticon.com/256/4475/4475436.png" alt="Transação" />
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
      <Route path="/depositar" element={<Depositar />} />
      <Route path="/retirar" element={<Retirar />} />
      <Route path="/transacoes" element={<Transacoes />} />
    </Routes>
  );
}
