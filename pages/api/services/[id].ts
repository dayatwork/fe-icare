import type { NextApiRequest, NextApiResponse } from 'next'
import { services } from 'mock-data'

export default function servicesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filtered = services.filter(
    (service) => service.id === Number(req.query.id)
  )

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Service with id: ${req.query.id} not found.` })
  }
}
