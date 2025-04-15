import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [notification, setNotification] = useState<null | { type: 'success' | 'error', message: string }>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Öffnet den Mailclient
      const form = e.currentTarget;
      const data = new FormData(form);
      const mailtoLink = `mailto:xxx@dominio.com?subject=Mensaje de ${data.get('nombre')}&body=${data.get('mensaje')}%0A%0AEmail: ${data.get('email')}`;
      window.location.href = mailtoLink;

      setNotification({ type: 'success', message: 'Correo preparado correctamente. Revisa tu cliente de correo.' });
      // Optional: Reset Formular
      form.reset();
    } catch {
      setNotification({ type: 'error', message: 'Ocurrió un error al preparar el correo.' });
    }
    // Automatisch nach ein paar Sekunden ausblenden
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <section id="contacto" className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
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

      {notification && (
        <div className={`${styles.notification} ${notification.type === 'success' ? styles.success : styles.error}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
};
export default ContactForm;