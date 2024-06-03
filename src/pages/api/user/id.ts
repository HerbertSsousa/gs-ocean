import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar informações do usuário', error: error });
  }
};
