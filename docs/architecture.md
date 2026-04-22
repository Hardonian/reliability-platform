# Architecture

## Webhook Handler

```
External Source → Webhook → Validator → Analyzer → Response
                                    ↓
                              Claude API
```

## Components

### Router
- Validates incoming webhooks
- Normalizes format
- Routes to appropriate handler

### Analyzer
- Extracts incident data
- Formats prompt for Claude
- Returns structured analysis

### Notifier (future)
- Sends alerts via Slack/Discord/Email
- Creates tickets
- Escalates based on severity
