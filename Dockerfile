FROM node:16.20.2-slim AS base
WORKDIR /app
# Faster dependency install with pnpm
RUN npm install -g pnpm

FROM base AS build
COPY . .
RUN pnpm install
RUN pnpm run build

FROM node:16.20.2-slim
WORKDIR /app
COPY --from=build /app/.output/ .

EXPOSE 3000
CMD [ "node", "./server/index.mjs" ]
