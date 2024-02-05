import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method !== 'GET') {
    //     return res.status(405).json({ error: 'Method not allowed' });
    // }

    try {
        const searchHistory = await prisma.searchHistory.findMany({
            orderBy: {
                timestamp: 'desc',
            },
        });

        return res.status(200).json(searchHistory);
    } catch (error) {
        console.error('Error storing search history:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
  