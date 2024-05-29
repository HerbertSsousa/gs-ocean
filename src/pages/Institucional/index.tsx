import React from 'react';
import styles from './Instuticional.module.css';

const Institucional = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CleanOcean Solutions</h1>
      <p className={styles.description}>
        CleanOcean Solutions é uma startup dedicada a desenvolver soluções inovadoras para reduzir a poluição marinha e preservar a saúde dos oceanos.
      </p>
      <h2 className={styles.missionTitle}>Nossa Missão</h2>
      <p className={styles.missionDescription}>
        Nossa missão é ser líder global na criação de tecnologias que promovam a sustentabilidade dos oceanos, trabalhando incansavelmente para proteger e preservar esses recursos vitais para as futuras gerações.
      </p>
      <h2 className={styles.valuesTitle}>Nossos Valores</h2>
      <ul className={styles.valuesList}>
        <li>Inovação</li>
        <li>Sustentabilidade</li>
        <li>Responsabilidade</li>
        <li>Colaboração</li>
        <li>Integridade</li>
      </ul>
      <h2 className={styles.focusTitle}>Soluções para Redução da Poluição Marinha</h2>
      <p className={styles.focusDescription}>
        Criamos tecnologias que podem reduzir, reciclar ou eliminar a poluição nos oceanos, incluindo plásticos e outros resíduos.
      </p>
      <h2 className={styles.contactTitle}>Contato</h2>
      <ul className={styles.contactList}>
        <li>Número de Telefone: +XX XXX XXX XXX</li>
        <li>E-mail: contato@cleanoceansolutions.com</li>
      </ul>
      <h2 className={styles.developersTitle}>Desenvolvedores</h2>
      <ul className={styles.developersList}>
        <li>Herbert Santos - herbert.ssousa@gmail.com</li>
        <li>Isabelle Queiroz - Isabelle.queiroz@gmail.com</li>
        <li>João Pedro - joaop.pereira@gmail.com</li>

      </ul>
    </div>
  );
};

export default Institucional;
