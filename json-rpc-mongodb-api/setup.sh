#!/bin/bash
bun install
bun prisma generate
docker-compose down
docker-compose up -d --remove-orphans
bun prisma db push
bun prisma db seed
