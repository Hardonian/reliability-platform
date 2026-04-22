import { Request, Response } from 'express'

export function healthCheck(req: Request, res: Response) {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  })
}
