import React from 'react';
import styles from '../styles/Services.module.css';
import Card from './Card';

const Services: React.FC = () => {
  return (
    <section id="servicios" className={styles.services}>
      <h2>Servicios que Ofrecemos</h2>
      <div className={styles.cardsContainer}>
        <Card
          title="Pintura de Paredes"
          description="Realizamos trabajos de pintura en interiores de viviendas. Elige tus colores favoritos para renovar tu hogar."
          image="https://cdn.pixabay.com/photo/2015/12/07/10/59/building-1080594_640.jpg"
        />
        <Card
          title="Cambio de Enchufes y Lámparas"
          description="Reemplazamos enchufes, interruptores y lámparas con total seguridad y profesionalismo."
          image="https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_640.jpg"
        />
        <Card
          title="Pequeños Trabajos en el Jardín"
          description="Ofrecemos mantenimiento y reparación de jardines, incluyendo poda, siembra y otros trabajos de jardinería."
          image="https://cdn.pixabay.com/photo/2017/03/27/11/57/garden-2178234_640.jpg"
        />
      </div>
    </section>
  );
}
export default Services;