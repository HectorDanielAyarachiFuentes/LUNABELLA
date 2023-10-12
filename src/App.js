import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente'; // Importa el nuevo componente

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <head>
        {/* Aquí puedes agregar etiquetas meta, title y otros elementos del encabezado */}
        <title>Mi Aplicación React</title>
      </head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React Logo" />
        <h1>Bienvenido a mi Aplicación React</h1>
        <p>Contador: {count}</p>

        <button onClick={incrementCount}>Incrementar Contador</button>
      </header>

      <main>
        {/* Contenido principal de tu aplicación */}
        <PrimerComponente /> {/* Aquí se muestra el PrimerComponente */}
        <SegundoComponente /> {/* Aquí se muestra el SegundoComponente */}
      </main>

      <footer>
        {/* Utiliza el nuevo componente para el footer moderno */}
        <TercerComponente />
      </footer>
    </div>
  );
}

export default App;
