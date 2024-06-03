import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { cep } = req.query;

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar informações do CEP', error: error });
  }
};
