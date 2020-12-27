import React from "react";
import "./styles/global.css";
import "./styles/pages/landing.css";
import logo from './images/Logo.svg';

function App() {
  return (
    <div className="App">
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={logo} alt="Happy" />
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>
          <div className="location">
            <strong>Minas gerais</strong>
            <p>Belo horizonte</p>
          </div>
          <div className="enter-app">
            <a href="">{'>'}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
