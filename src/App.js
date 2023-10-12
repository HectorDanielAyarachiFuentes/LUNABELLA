import React, { useState } from 'react';
import logo from './logo.svg';
import './styles.css'; // Importa el archivo CSS global
import PrimerComponente from './PrimerComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import Tabs from './Tabs';
import FuturisticClock from './FuturisticClock';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React Logo" />
        <h1>Bienvenido a la Aplicación Gatuna del Futuro</h1>
        <p>Contador de Sonrisas: {count}</p>
        <button onClick={incrementCount}>¡Sonríe al Futuro!</button>
      </header>

      <main>
        <section className="futuristic-section">
          <FuturisticClock />
        </section>
        <Tabs />
        <PrimerComponente />
        <SegundoComponente />
      </main>

      <footer>
        <TercerComponente />
      </footer>
    </div>
  );
}

export default App;
