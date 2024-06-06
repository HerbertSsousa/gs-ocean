import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      console.log('Request Body:', req.body);
      const response = await axios.post('http://localhost:8080/doacao', req.body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response Data:', response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Erro ao criar doação', error: error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};
export default handler;