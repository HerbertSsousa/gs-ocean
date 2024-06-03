import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Doar.module.css';

interface Doacao {
  idTrans: string;
  valor: string;
  destinatario: string;
}

const Doar = () => {
  const [formData, setFormData] = useState<Doacao>({
    idTrans: '',
    valor: '',
    destinatario: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/doacao', formData);
      console.log('Doação realizada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao realizar doação:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Doe para a Nossa Causa</h1>
      <p className={styles.description}>
        Sua contribuição ajuda a melhorar a vida de muitas pessoas. Faça sua doação agora!
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="idTrans">ID da Transação</label>
          <input
            type="text"
            name="idTrans"
            id="idTrans"
            value={formData.idTrans}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="valor">Valor</label>
          <input
            type="text"
            name="valor"
            id="valor"
            value={formData.valor}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="destinatario">Destinatário</label>
          <input
            type="text"
            name="destinatario"
            id="destinatario"
            value={formData.destinatario}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>Doar</button>
        </div>
      </form>
    </div>
  );
};

export default Doar;
