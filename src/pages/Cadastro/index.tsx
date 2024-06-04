import { useState } from 'react';
import axios from 'axios';
import styles from './Cadastro.module.scss';

interface FormData {
  name: string;
  email: string;
  password: string;
  cep: string;
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  userId: string; 
}

const Cadastro = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    cep: '',
    userId: '', 
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCEPBlur = async () => {
    try {
      const response = await axios.get(`http://localhost:8083/cadastro/cep/${formData.cep}`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setFormData({
        ...formData,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      });
      setError('');
    } catch (error) {
      setError('CEP inválido ou inexistente');
    }
  };

  const handleUserIdBlur = async () => {
    if (!formData.userId) return;
    try {
      const response = await axios.get(`http://localhost:8083/cadastro/${formData.userId}`);
      const { name, email } = response.data;
      setFormData({
        ...formData,
        name,
        email,
      });
      setError('');
    } catch (error) {
      setError('Erro ao buscar informações do usuário');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:8083/cadastro', formData);
      console.log('Cadastro realizado com sucesso:', response.data);
      setError('');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro de Usuário</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="userId">ID do Usuário</label>
          <input
            type="text"
            name="userId"
            id="userId"
            value={formData.userId}
            onChange={handleChange}
            onBlur={handleUserIdBlur}
            className={styles.input}
          />
        </div>
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
        {formData.street && (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="street">Rua</label>
              <input
                type="text"
                name="street"
                id="street"
                value={formData.street}
                onChange={handleChange}
                className={styles.input}
                readOnly
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="neighborhood">Bairro</label>
              <input
                type="text"
                name="neighborhood"
                id="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className={styles.input}
                readOnly
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className={styles.input}
                readOnly
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="state">Estado</label>
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className={styles.input}
                readOnly
              />
            </div>
          </>
        )}
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
