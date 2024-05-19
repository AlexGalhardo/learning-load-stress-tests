#!/bin/bash
# docker-compose down
# docker-compose up -d
npx prisma generate
npx prisma migrate dev
npx prisma db seed
