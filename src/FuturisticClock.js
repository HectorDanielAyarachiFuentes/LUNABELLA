import React, { useState, useEffect } from 'react';

const FuturisticClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="futuristic-clock">
      <h2>Reloj Gatuno del Futuro</h2>
      <div className="futuristic-clock-time">{formattedTime}</div>
      <p>
        El Reloj Gatuno del Futuro te informa que en el año 3000, los gatos han conquistado el mundo con su ternura y destreza tecnológica. Ahora, los felinos gobiernan la Tierra con sus elegantes movimientos y su avanzada tecnología.
      </p>
      <p>
        ¡Prepárate para un futuro lleno de ronroneos y comodidad!
      </p>
    </div>
  );
};

export default FuturisticClock;
