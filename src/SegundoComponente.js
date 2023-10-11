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
          <img src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/386062644_7001828339908527_8316362644724715685_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHavYFLEchIpClx4Tm_dV8cAAuUwnC9_WkAC5TCcL39aSO78DlyHW_HWmcc9iucDNjLAg5HFkt5rljV2ixjx_sj&_nc_ohc=SlhOD8O2GKQAX-nUGFS&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfDj8G0GMUIqRu8fae5e3p311p-7E0z9v-8chil7oAwEcg&oe=652C3955" alt="Imagen 1" />
        </div>
        <div>
          <img src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/386061297_7001819286576099_4824449488437402047_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeE_cifzDqGKep9EIWl29EYgFpzqg3aghIcWnOqDdqCEh06VKgvRqDj_xtOpcspCYW5n3QTUUT2sU-kqvuYeYJpf&_nc_ohc=ajeJdd8qx80AX-ui1IB&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfCujzDu3_J7reXZwJ-csHRwssyH55fYb4wT5naQa7GyCQ&oe=652C2A71" alt="Imagen 2" />
        </div>
        <div>
          <img src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/386070707_7001770556580972_6777058557418446007_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEws83tYaLuAo-grc0i1SnkqN2JHzflGOeo3YkfN-UY5zHGoyaiaXIMX2EXikuzMH2qUYEXEQVwgJKVyeZBIShc&_nc_ohc=v6uuYJE0hAoAX8gsZ-t&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfD3VByziCXjFRBtyKZyA-ERiCEzyCcq-qC87KPByhIiYg&oe=652B615B" alt="Imagen 3" />
        </div>
        {/* Agrega más imágenes al carrusel según sea necesario */}
      </Carousel>
    </div>
  );
}

export default SegundoComponente;
