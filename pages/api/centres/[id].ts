import type { NextApiRequest, NextApiResponse } from 'next'
import { centres } from 'mock-data'

export default function centresHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filtered = centres.filter(
    (centre) => centre.id === Number(req.query.id)
  )

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Centre with id: ${req.query.id} not found.` })
  }
}
