FROM node:20
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
RUN cp .env.example .env
RUN ./setup.sh
EXPOSE 4001
CMD ["npm", "run", "dev"]
