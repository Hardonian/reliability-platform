import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { webhookHandler } from './routes/webhook.js'
import { healthCheck } from './routes/health.js'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/health', healthCheck)
app.post('/webhook', webhookHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Reliability Platform running on port ${PORT}`)
})
