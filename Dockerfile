FROM node:20-slim AS base
WORKDIR /app
# Faster dependency install with pnpm
RUN npm install -g pnpm@9.1.2

COPY . .
RUN pnpm install

RUN pnpm run build

EXPOSE 3000
CMD [ "node", "./.output/server/index.mjs" ]
