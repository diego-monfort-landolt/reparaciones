import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div >
        <h1>Reparaciones y Trabajos de Mantenimiento en Benicassim</h1>
        <p>Ofrecemos servicios profesionales de reparación y mantenimiento para tu hogar.</p>
        <button><a href="#contacto">Contáctanos</a></button>
      </div>
    </section>
  );
}

export default Hero;
