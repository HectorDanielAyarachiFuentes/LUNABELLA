import React from 'react';

function TercerComponente() {
  return (
    <div className="footer-moderno">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mi Aplicación React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende más sobre React
        </a>
      </div>
    </div>
  );
}

export default TercerComponente;
