import { Request, Response } from 'express'

export async function analyzeHandler(req: Request, res: Response) {
  const { source, event, data } = req.body
  
  if (!source || !event) {
    return res.status(400).json({ error: 'Missing source or event' })
  }
  
  res.json({
    diagnosis: 'Add ANTHROPIC_API_KEY for AI analysis',
    recommendation: 'Set environment variable to enable',
    confidence: 0.5
  })
}
