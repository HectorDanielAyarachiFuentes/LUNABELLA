import React from 'react';

function TercerComponente() {
  return (
    <div className="footer-moderno">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aplicatronic Gatuno del Futuro</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descubre más sobre la revolución felina
        </a>
      </div>
    </div>
  );
}

export default TercerComponente;
