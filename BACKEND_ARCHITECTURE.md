# Backend Architecture — Oliver Cocina por Ti

> Snapshot de Fase 5: lo que ya existe, lo que vendrá después.

## Estado actual (MVP)

### Endpoint `/api/contact` (POST)
- Función serverless Next.js (Pages Router) en `src/pages/api/contact.js`
- Valida server-side (defensa en profundidad)
- Sanitiza inputs (length cap, trim, lowercase email)
- Loguea cada lead a console (visible en Vercel → Functions → logs)
- Si `RESEND_API_KEY` y `CONTACT_TO_EMAIL` están en env, envía email via Resend

### Variables de entorno necesarias (Vercel)
```
RESEND_API_KEY=re_xxxxxxxxxx           # de https://resend.com/api-keys
CONTACT_TO_EMAIL=tu-email@oliver.com   # destino de leads
CONTACT_FROM_EMAIL=Oliver <ventas@olivercocinaporti.com>  # opcional, requiere dominio verificado
```

## Roadmap backend (post-MVP)

### Fase 1 — Persistencia
Cuando los leads pasen de 5/semana, almacenar:
- **Opción A (más simple):** Vercel Postgres + Drizzle ORM
- **Opción B (no-code friendly):** Airtable o Notion API
- **Opción C (CRM):** HubSpot Free, Pipedrive, Zoho

Schema sugerido para opción A:
```sql
CREATE TABLE leads (
  id          SERIAL PRIMARY KEY,
  nombre      TEXT NOT NULL,
  empresa     TEXT,
  email       TEXT NOT NULL,
  telefono    TEXT NOT NULL,
  tipo        TEXT NOT NULL,
  etapa       TEXT,
  mensaje     TEXT,
  ip          TEXT,
  user_agent  TEXT,
  status      TEXT DEFAULT 'new',     -- new | contacted | qualified | won | lost
  notes       TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);
```

### Fase 2 — Notificaciones múltiples
- Email a equipo de ventas (ya existe via Resend)
- WhatsApp Business API: notificar lead al 555-XXX cuando llega
- Slack/Discord webhook a canal #ventas

### Fase 3 — Anti-spam
- reCAPTCHA v3 (invisible, score-based)
- Rate limiting por IP (e.g. 3 leads / 5 min via Upstash Redis)
- Honeypot field oculto en formulario (filtra bots ingenuos)

### Fase 4 — Panel admin
- `/admin` protegido con NextAuth.js
- Lista de leads con filtros, status, asignación
- Export CSV
- Stats: leads/mes, fuentes, conversión

### Fase 5 — Tracking y attribution
- UTM tracking (guardar utm_source/medium/campaign del referrer)
- Eventos a Google Analytics 4 / Mixpanel
- Pixel de Facebook/Instagram para retargeting

## Endpoints futuros

| Método | Path | Propósito |
|---|---|---|
| POST | /api/contact | Crear lead (existe) |
| POST | /api/quote-request | Solicitud detallada con archivos adjuntos |
| GET | /api/admin/leads | Listar leads (auth) |
| PATCH | /api/admin/leads/:id | Actualizar status/notas (auth) |
| POST | /api/newsletter | Suscripción (cuando exista blog) |

## Decisiones de stack recomendadas

- **Persistencia:** Vercel Postgres (zero-config, serverless-friendly)
- **ORM:** Drizzle (type-safe, ligero, mejor para edge functions)
- **Auth admin:** NextAuth.js con magic-link via Resend
- **Email:** Resend (ya integrado, free tier 3k emails/mes)
- **Anti-spam:** reCAPTCHA v3 + Upstash Redis para rate limit
- **Observability:** Vercel Analytics (incluido) + Sentry para errors
