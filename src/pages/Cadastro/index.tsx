import { useState } from 'react';
import axios from 'axios';
import styles from './Cadastro.module.scss';

interface FormData {
  name: string;
  email: string;
  password: string;
  cep: string;
  street?: string; // Adicionando campos de endereço
  neighborhood?: string;
  city?: string;
  state?: string;
}

const Cadastro = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const handleCEPBlur = async () => {
    try {
      const response = await axios.get(`/api/cep/${formData.cep}`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setFormData({
        ...formData,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf
      });
    } catch (error) {
      console.error('Erro ao buscar informações do CEP:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post('/api/cadastro', formData);
      console.log('Cadastro realizado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro de Usuário</h2>
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
            onBlur={handleCEPBlur}
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
