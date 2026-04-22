export interface Incident {
  id: string
  source: string
  event: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  data: Record<string, unknown>
  createdAt: Date
}

export interface Analysis {
  incident: Incident
  diagnosis: string
  recommendation: string
  confidence: number
}

export interface WebhookPayload {
  source: string
  event: string
  data: Record<string, unknown>
}

export type SourceHandler = (payload: WebhookPayload) => Promise<Incident>

export const sourceHandlers: Record<string, SourceHandler> = {
  'github': (payload) => handleGitHub(payload),
  'vercel': (payload) => handleVercel(payload),
  'generic': (payload) => handleGeneric(payload)
}

async function handleGitHub(payload: WebhookPayload): Promise<Incident> {
  return {
    id: crypto.randomUUID(),
    source: 'github',
    event: payload.event,
    severity: 'high',
    data: payload.data,
    createdAt: new Date()
  }
}

async function handleVercel(payload: WebhookPayload): Promise<Incident> {
  return {
    id: crypto.randomUUID(),
    source: 'vercel',
    event: payload.event,
    severity: 'high',
    data: payload.data,
    createdAt: new Date()
  }
}

async function handleGeneric(payload: WebhookPayload): Promise<Incident> {
  return {
    id: crypto.randomUUID(),
    source: 'generic',
    event: payload.event,
    severity: 'medium',
    data: payload.data,
    createdAt: new Date()
  }
}
