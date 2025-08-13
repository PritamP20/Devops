FROM oven/bun:1

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

COPY ./apps/websocket ./apps/ws

RUN bun install
RUN bun run db:generate

EXPOSE 8080

CMD [ "bun", "run", "start:ws" ]