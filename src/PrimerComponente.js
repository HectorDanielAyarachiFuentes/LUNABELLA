import React, { useState } from 'react';

function PrimerComponente() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audioElement = document.getElementById('audio-element');

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  return (
    <div>
      <h2>¡Gatitos en Concierto!</h2>
      <p>¡Bienvenido al espectáculo musical de nuestros gatitos talentosos!</p>

      <audio id="audio-element" controls>
        <source src="https://www.cjoint.com/doc/23_10/MJltSwoIswd_y2mate.com---Delfin-Torres-gemelas-hard-remix-con-efectos-especiales.mp3" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>

      <button onClick={togglePlay}>
        {isPlaying ? 'Detener la Serenata Gatuna' : 'Comenzar la Serenata Gatuna'}
      </button>
    </div>
  );
}

export default PrimerComponente;
