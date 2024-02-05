import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const cleanHistory = await prisma.searchHistory.deleteMany();

        return res.status(200).json(cleanHistory);
    } catch (error) {
        console.error('Error storing search history:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
  