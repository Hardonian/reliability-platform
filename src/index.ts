import express from 'express'
import cors from 'cors'
import { healthCheck } from './routes/health.js'
import { webhookHandler } from './routes/webhook.js'
import { analyzeHandler } from './routes/analyze.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json({
  limit: '1mb',
  verify: (req, res, buf) => {
    (req as any).rawBody = buf.toString()
  }
}))

// Routes
app.get('/health', healthCheck)
app.get('/health/json', (req, res) => res.json({ status: 'healthy', timestamp: new Date().toISOString() }))
app.post('/webhook', webhookHandler)
app.post('/analyze', analyzeHandler)

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.message)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════╗
║   Reliability Platform v0.2.0    ║
║   Running on port ${PORT}              ║
╚═══════════════════════════════════════╝
    `)
  })
}

export default app
