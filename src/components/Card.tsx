import React from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
}
const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}
export default Card;