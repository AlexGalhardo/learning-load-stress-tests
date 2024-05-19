#!/bin/bash
# docker-compose down
# docker-compose up -d
npx prisma generate
bun prisma migrate dev
bun prisma db seed
