FROM node:20-alpine3.17 AS builder
ARG CI=true
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com && npm i -g pnpm
COPY . /app
RUN pnpm i && npm run build

FROM node:20-alpine3.17 AS prod
ENV workdir=/app NODE_ENV=prod
USER root
RUN apk --no-cache add curl
RUN npm config set registry https://registry.npmmirror.com && npm i -g pnpm
WORKDIR ${workdir}
COPY package.json .
COPY .env.prod .env
COPY --from=builder /app/dist/ ./dist/
RUN pnpm i
EXPOSE 3001
HEALTHCHECK CMD curl http://localhost:3001/health/live -f || exit 1
ENTRYPOINT npm run start:prod
