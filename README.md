<div align="center">
  <h1 align="center">:bomb: Learning Load & Stress Tests :bomb:</a>
</div>

## Introduction

- A side project I created to learn and improve my skills in:
  - [k6](https://k6.io/)
  - Load Tests & Stress Tests
  - Load Balancer
  - Concurrency & Parallelism
  - A.C.I.D and Transactions CRUD operations
  - Performance Benchmarks using diferent technologies and databases

- Technologies:
  - [NodeJS](https://nodejs.org/en)
  - [Bun](https://bun.sh/)
  - [ElysiaJS](https://elysiajs.com/)
  - [Fastify](https://fastify.dev/)
  - [PM2 Process Manager](https://pm2.keymetrics.io/)
  - [VineJS Data Validator](https://vinejs.dev/docs/introduction)
  - [TypeScript](https://www.typescriptlang.org/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose ODM](https://mongoosejs.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Prisma ORM](https://www.prisma.io/)
  - [Redis](https://redis.io/)
  - [Docker](https://www.docker.com/)
  - [JSON-RPC](https://www.jsonrpc.org/)
  - [NGINX](https://www.nginx.com/)
  - [GraphQL](https://graphql.org/)
  - [Serverless Framework](https://www.serverless.com/)
  - [AWS](https://aws.amazon.com/)
     - [Lambda](https://aws.amazon.com/lambda/)
     - [DynamoDB](https://aws.amazon.com/dynamodb/)
     - [API Gateway](https://aws.amazon.com/api-gateway/)

## ToDo
- [x] API using MongoDB
- [x] API using PostgreSQL
- [x] API using Serverless Framework and DynamoDB
- [x] API using Load Balancer
- [x] API using RPC
- [x] API using GraphQL
- [x] API using REST
- [x] API using Redis

## Videos Demo

### Testing REST Postgres API

https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/b1e1bf42-a661-4983-abee-994f9f2689d6

### Testing GraphQL Redis API

https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/f0382aad-c85d-4137-a958-449ead1cf491

## Prerequisites
- Install k6: https://k6.io/docs/get-started/installation/
- Install Bun: https://bun.sh/docs/installation
- Install NodeJS >= v20: https://nodejs.org/en/download/package-manager
- Install Docker & Docker Compose: https://docs.docker.com/engine/install/
- Have an AWS Account: https://aws.amazon.com/free/

## Up API Servers
- Enter the API folder you wanna test and follow README.md instructions

## Tips
- K6 Reports:
   - To see k6 tests reports, up a server in the root of this project
   - And go for example: http://localhost:3000/k6-tests/reports/rest-postgres-api-load-test-signup.html
- POST /signup:
   - Tests are made using fake data, to not repeat the same signup
- POST /checkout:
   - Check to increase ou add more stock units as you want in database while you are testing.

## :warning: Doing :warning:
- [x] Finish REST Postgres API Tests
- [x] Finish GraphQL Redis API Tests
- [x] Finish JSON-RPC MongoDB API Tests
- [ ] Finish Serverless API Tests
- [ ] Finish NGINX Load Balancer API Tests

## Load Tests
- ### POST /signup
   - Enter folder [./k6-tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphql-redis-api-load-test-signup.js
      ```
      - See report: [./k6-tests/reports/graphql-redis-api-load-test-signup.html](./k6-tests/reports/graphqL-redis-api-load-test-signup.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-load-test-signup.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-load-test-signup.html](./k6-tests/reports/rest-postgres-api-load-test-signup.html)
   - Testing JSON-RPC MongoDB API:
      ```bash
      k6 run json-rpc-mongodb-api-load-test-signup.js
      ```
      - See report: [./k6-tests/reports/json-rpc-mongodb-api-load-test-signup.html](./k6-tests/reports/json-rpc-mongodb-api-load-test-signup.html)

- ### POST /checkout (Last Stock Units - simulating a black friday):
   - Enter folder [./k6-tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphql-redis-api-load-test-checkout.js
      ```
      - See report: [./k6-tests/reports/graphql-redis-api-load-test-checkout.html](./k6-tests/reports/graphql-redis-api-load-test-checkout.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-load-test-checkout.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-load-test-checkout.html](./k6-tests/reports/rest-postgres-api-load-test-checkout.html)
   - Testing JSON-RPC MongoDB API:
      ```bash
      k6 run json-rpc-mongodb-api-load-test-checkout.js
      ```
      - See report: [./k6-tests/reports/json-rpc-mongodb-api-load-test-checkout.html](./k6-tests/reports/json-rpc-mongodb-api-load-test-checkout.html)


## Stress Tests
- ### POST /signup
   - Enter folder [./k6-tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphql-redis-api-stress-test-signup.js
      ```
      - See report: [./k6-tests/reports/graphql-redis-api-stress-test-signup.html](./k6-tests/reports/graphql-redis-api-stress-test-signup.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-stress-test-signup.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-stress-test-signup.html](./k6-tests/reports/rest-postgres-api-stress-test-signup.html)
   - Testing JSON-RPC MongoDB API:
      ```bash
      k6 run json-rpc-mongodb-api-stress-test-signup.js
      ```
      - See report: [./k6-tests/reports/json-rpc-mongodb-api-stress-test-signup.html](./k6-tests/reports/json-rpc-mongodb-api-stress-test-signup.html)

- ### POST /checkout (Last Stock Units - simulating a black friday):
   - Enter folder [./k6-tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphql-redis-api-stress-test-checkout.js
      ```
      - See report: [./k6-tests/reports/graphql-redis-api-stress-test-checkout.html](./k6-tests/reports/graphql-redis-api-stress-test-checkout.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-stress-test-checkout.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-stress-test-checkout.html](./k6-tests/reports/rest-postgres-api-stress-test-checkout.html)
   - Testing JSON-RPC MongoDB API:
      ```bash
      k6 run json-rpc-mongodb-api-stress-test-checkout.js
      ```
      - See report: [./k6-tests/reports/json-rpc-mongodb-api-stress-test-checkout.html](./k6-tests/reports/json-rpc-mongodb-api-stress-test-checkout.html)

## K6 Reports Examples

### [./k6-tests/reports/rest-postgres-api-stress-test-signup.html](./k6-tests/reports/rest-postgres-api-stress-test-signup.html)
<img width="1438" alt="Screenshot 2024-05-19 at 10 51 47" src="https://github.com/AlexGalhardo/api.nerdapi.com/assets/19540357/c5c5c8be-c203-475d-a08a-8607416061e3">

### [./k6-tests/reports/rest-postgres-api-stress-test-checkout.html](./k6-tests/reports/rest-postgres-api-stress-test-checkout.html)
<img width="1436" alt="Screenshot 2024-05-19 at 11 08 08" src="https://github.com/AlexGalhardo/api.nerdapi.com/assets/19540357/3454cfd9-7713-4393-ad18-8af07577e1bb">
<img width="1436" alt="Screenshot 2024-05-19 at 11 07 57" src="https://github.com/AlexGalhardo/api.nerdapi.com/assets/19540357/162cd9bd-1ec9-4bae-a170-72934c9c8fd2">

### [./k6-tests/reports/graphql-redis-api-stress-test-checkout.html](./k6-tests/reports/graphql-redis-api-stress-test-checkout.html)
![Screenshot 2024-05-19 at 15 00 09](https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/ed5cc142-5552-42ec-9d17-d34139fd70b6)
![Screenshot 2024-05-19 at 14 57 50](https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/1a2dfb5c-2bc1-453a-8564-d9aab392c6e2)

### [./k6-tests/reports/json-rpc-mongodb-api-stress-test-checkout.html](./k6-tests/reports/json-rpc-mongodb-api-stress-test-checkout.html)
![Screenshot 2024-05-25 at 11 39 00](https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/d21e0afb-5ec8-41e5-b1f0-3fb3f128cfcf)
![Screenshot 2024-05-25 at 11 38 50](https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/3767120e-7ab2-4b25-80d6-52fe15757408)
![Screenshot 2024-05-25 at 11 38 36](https://github.com/AlexGalhardo/learning-load-stress-tests/assets/19540357/f351d7c7-03e8-47c7-bf5c-a2c479cafa7f)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) March 2024-present, [Alex Galhardo](https://github.com/AlexGalhardo)
