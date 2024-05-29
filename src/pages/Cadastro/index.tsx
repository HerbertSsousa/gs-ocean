// pages/Cadastro/index.tsx

import { useState } from 'react';
import styles from './Cadastro.module.scss';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cep: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="cep">CEP</label>
          <input
            type="text"
            name="cep"
            id="cep"
            value={formData.cep}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
// pages/Cadastro/index.tsx

