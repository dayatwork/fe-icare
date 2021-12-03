import type { NextApiRequest, NextApiResponse } from 'next'
import { news } from 'mock-data'

export default function newsHandler(req: NextApiRequest, res: NextApiResponse) {
  const filtered = news.filter((news) => news.id === Number(req.query.id))

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `News with id: ${req.query.id} not found.` })
  }
}
