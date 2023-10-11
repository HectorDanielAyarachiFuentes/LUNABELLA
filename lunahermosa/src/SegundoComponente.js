import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

function SegundoComponente() {
  return (
    <div>
      <h2>Segundo Componente</h2>
      <p>Aquí puedes agregar cualquier contenido que desees.</p>

      <Carousel showThumbs={false}>
        <div>
          <img src="imagen1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="imagen2.jpg" alt="Imagen 2" />
        </div>
        <div>
          <img src="imagen3.jpg" alt="Imagen 3" />
        </div>
        {/* Agrega más imágenes al carrusel según sea necesario */}
      </Carousel>
    </div>
  );
}

export default SegundoComponente;
