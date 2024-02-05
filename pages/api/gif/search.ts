// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type GiphyApiResponse = {
  data: any[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GiphyApiResponse>,
) {
  const { q, offset = 0, limit = 25, rating = "g", lang = "en", bundle = "messaging_non_clips" } = req.query;
  const apiKey = process.env.GIPHY_API_KEY;

  try {
    const giphyResponse = await fetch(
      `${process.env.GIPHY_API_URL}gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}&bundle=${bundle}`
    );

    if (!giphyResponse.ok) {
      throw new Error(`GIPHY API request failed with status: ${giphyResponse.status}`);
    }

    const existingSearch = await prisma.searchHistory.findFirst({
      where: {
        query: q as string,
      },
    });

    if (!existingSearch && q) {
      await prisma.searchHistory.create({
        data: {
          query: q as string,
        },
      });
    }

    const searchHistory = await prisma.searchHistory.findMany({
      orderBy: {
        timestamp: "desc",
      }
    });

    const data = await giphyResponse.json();
    res.status(200).json({
      ...data,
      searchHistory,
    });
  } catch (error) {
    console.error("Error fetching data from GIPHY API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
