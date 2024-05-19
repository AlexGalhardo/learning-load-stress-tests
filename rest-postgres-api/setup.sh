#!/bin/bash
bun install
cp .env.example .env
docker-compose down
docker-compose up -d
npx prisma migrate dev
npx prisma db seed
bun prisma studio
