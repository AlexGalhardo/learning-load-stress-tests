FROM oven/bun:latest
WORKDIR /home/node/app
COPY package*.json ./
RUN bun install
COPY . .
RUN cp .env.example .env
RUN ./setup.sh
EXPOSE 4003
CMD ["bun", "run", "dev"]
