# Reliability Platform

**Ops automation as a service for startups.**

![License](https://img.shields.io/badge/License-MIT-green)

## Why

Startups can't afford DevOps but can't afford downtime either.

This platform:
- Monitors your services
- Detects issues early
- Recommends fixes via AI
- Optionally auto-remediates

## Features

- 🔗 **Webhook Integration** — GitHub, Datadog, PagerDuty, etc.
- 🤖 **AI Diagnosis** — Claude-powered root cause analysis
- 📋 **Actionable Fixes** — Not just alerts, but solutions
- 🔒 **Safe** — Human-in-the-loop by default
- 🚀 **Self-Hostable** — Run on your own infrastructure

## Quick Start

```bash
npm install
npm run dev
```

## Webhook Endpoints

```
POST /webhook  — Receive alerts
GET  /health   — Health check
```

## Supported Sources

- GitHub Actions
- Vercel
- Railway
- Render
- Custom webhooks

## Tech Stack

- **Runtime:** Node.js + Express
- **Database:** Prisma
- **AI:** Anthropic Claude
- **Deployment:** Docker, Fly.io

## License

MIT © Scott Hardie
