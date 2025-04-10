import React from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className={styles.contactForm}>
      <form action="mailto:xxx@dominio.com" method="get">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta o quieres un presupuesto? ¡Contáctanos ahora!</p>
        <p> <strong>Teléfono:</strong> xxx - <strong>Email:</strong> xxx@dominio.com</p>

        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows={4} required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
