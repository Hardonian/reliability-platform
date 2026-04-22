import { Request, Response } from 'express'
import { analyzeIncident } from '../services/analyzer.js'

export async function webhookHandler(req: Request, res: Response) {
  try {
    const { source, event, data } = req.body
    
    if (!source || !event) {
      return res.status(400).json({ error: 'Missing source or event' })
    }
    
    console.log(`Received ${source} ${event}`)
    
    const analysis = await analyzeIncident(source, event, data)
    
    res.json({
      received: true,
      analysis
    })
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: 'Processing failed' })
  }
}
