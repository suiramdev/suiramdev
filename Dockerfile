FROM node:20-slim AS base
WORKDIR /app
RUN npm install -g pnpm@9.1.2

ARG NUXT_PUBLIC_POSTHOG_PUBLIC_KEY
ENV NUXT_PUBLIC_POSTHOG_PUBLIC_KEY=$NUXT_PUBLIC_POSTHOG_PUBLIC_KEY
ARG NUXT_PUBLIC_STUDIO_TOKENS
ENV NUXT_PUBLIC_STUDIO_TOKENS=$NUXT_PUBLIC_STUDIO_TOKENS
ARG NUXT_PUBLIC_BASE_URL
ENV NUXT_PUBLIC_BASE_URL=$NUXT_PUBLIC_BASE_URL

FROM base AS build
COPY . .
RUN pnpm install
RUN pnpm run build

FROM base AS production
COPY --from=build /app/.output ./.output
COPY --from=build /app/content ./content

EXPOSE 3000
CMD [ "node", "./.output/server/index.mjs" ]
