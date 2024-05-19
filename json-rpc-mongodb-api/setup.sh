#!/bin/bash
bun install
bun prisma generate
bun prisma db push
