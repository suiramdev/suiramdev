FROM node:20-slim AS base
WORKDIR /app
RUN npm install -g pnpm@9.1.2

FROM base AS build
COPY . .
RUN pnpm install
RUN pnpm run build

FROM base AS production
COPY --from=build /app/.output ./.output
COPY --from=build /app/content ./content

EXPOSE 3000
CMD [ "node", "./.output/server/index.mjs" ]
