# Multi-stage build for the Nebbos marketing site (Next.js App Router).
# Targets Railway (ADR #1401 AD-4). Uses Next.js standalone output for a small
# runtime image. Railway sets $PORT; Next's standalone server honours it.
#
# NOTE: This config makes the Pages -> Railway cutover a one-step later change.
# It does NOT provision Railway or touch DNS. The live nebbos.ai (Cloudflare
# Pages, static site) is untouched until that separate, gated cutover.

# ---- deps ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---- build ----
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# standalone output bundles a minimal server + only the deps it needs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
