import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
import SegundoComponente from './SegundoComponente';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React Logo" />
        <h1>Bienvenido a mi Aplicación React</h1>
        <p>Contador: {count}</p>

        <button onClick={incrementCount}>Incrementar Contador</button>

        <PrimerComponente /> {/* Aquí se muestra el PrimerComponente */}
        <SegundoComponente /> {/* Aquí se muestra el SegundoComponente */}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende más sobre React
        </a>
      </header>
    </div>
  );
}

export default App;
