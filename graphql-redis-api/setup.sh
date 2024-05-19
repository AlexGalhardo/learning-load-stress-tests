#!/bin/bash
bun install
cp .env.example .env
docker-compose down
docker-compose up -d
bun run redis:seed:product
bun run dev
