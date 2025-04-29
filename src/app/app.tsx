export function App() {
  return (
    <body>
      <header>
        <div className="logo">DEV<span> BANK</span></div>
        <div className="user-info">
          Nome: Mark<br></br>
          Agência: 0000<br></br>
          Conta: 00000-0<br></br>
        </div>
      </header>

      <div className="main">
        <label>O que você deseja fazer?<div className="saldo">Saldo Atual: 000</div></label>

        <div className="actions">
          <button className="card">
            <strong>Depositar</strong>
            <img src="https://i.pinimgproxy.com/?url=aHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8yNTYvMjY3Ni8yNjc2ODAyLnBuZw==&ts=1745948704&sig=f1a99d3cc53e2ef5500aa99f00be1493b796bff0fc49c249eafbda57c615dd2e" alt="Depositar"></img>
          </button>
          <button className="card">
            <strong>Retirar</strong>
            <img src="https://cdn-icons-png.flaticon.com/256/1570/1570917.png" alt="Retirar"></img>
          </button>
          <button className="card">
            <strong>Transações</strong>
            <img src="https://cdn-icons-png.flaticon.com/256/4475/4475436.png" alt="Transação"></img>
          </button>
        </div>

      </div>
    </body>
  )
}