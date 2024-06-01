#!/bin/bash
bun install
cp .env.example .env
docker-compose down
docker-compose up -d
bun prisma migrate dev
bun prisma db seed
bun run pm2:fork
