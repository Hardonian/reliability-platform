import { Anthropic } from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

export interface IncidentAnalysis {
  severity: 'low' | 'medium' | 'high' | 'critical'
  diagnosis: string
  recommendation: string
  action?: string
}

export async function analyzeIncident(
  source: string,
  event: string,
  data: any
): Promise<IncidentAnalysis> {
  const prompt = `Analyze this incident:
Source: ${source}
Event: ${event}
Data: ${JSON.stringify(data)}

Provide:
1. Severity (low/medium/high/critical)
2. Diagnosis
3. Recommended fix
4. Action to take`

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    maxTokens: 500,
    messages: [{ role: 'user', content: prompt }]
  })

  return {
    severity: 'medium',
    diagnosis: 'Analyzing...',
    recommendation: response.content[0].type === 'text' ? response.content[0].text : 'See analysis'
  }
}
