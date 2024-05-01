<div align="center">
  <h1 align="center">Learning Load & Stress Tests</a>
</div>

## Introduction

- A personal project I created to learn and improve my skills in:
  - [k6](https://k6.io/)
  - Load Tests & Stress Tests
  - Load Balancer
  - Concurrency & Parallelism
  - A.C.I.D and Transactions CRUD operations
  - Performance Benchmarks using diferent technologies and databases

- Technologies:
  - [NodeJS v20](https://nodejs.org/en)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Express REST API](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
  - [PosgreSQL](https://www.postgresql.org/)
  - [Prisma ORM](https://www.prisma.io/)
  - [Redis](https://redis.io/)
  - [Docker](https://www.docker.com/)
  - [JSON-RPC](https://www.docker.com/)
  - [NGINX](https://www.nginx.com/)
  - [ApolloGraphQL](https://www.apollographql.com/)
  - [Serverless Framework](https://www.serverless.com/)
  - [AWS](https://aws.amazon.com/)
     - [Lambda](https://aws.amazon.com/lambda/)
     - [DynamoDB](https://aws.amazon.com/dynamodb/)
     - [API Gateway](https://aws.amazon.com/api-gateway/)

## ToDo
- [x] Test using MongoDB
- [x] Test using PostgreSQL
- [x] Test using ServerlessFramework API and DynamoDB
- [x] Test using Load Balancer
- [x] Test using RPC API
- [x] Test using GraphQL API
- [x] Test using REST API
- [x] Test using Redis



## ⚠️ NOT COMPLETE ⚠️

## Load Tests
- ### Create User
   - Enter folder [./tests](./tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-load-test-create-user.js
      ```
      - See report: [./tests/reports/graphq-redis-api-load-test-create-user.html](./tests/reports/graphq-redis-api-load-test-create-user.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-load-test-create-user.js
      ```
      - See report: [./tests/reports/serverless-dynamodb-api-load-test-create-user.html](./tests/reports/serverless-dynamodb-api-load-test-create-user.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-load-test-create-user.js
      ```
      - See report: [./tests/reports/rest-postgres-api-load-test-create-user.html](./tests/reports/rest-postgres-api-load-test-create-user.html)

- ### Checkout - Last Stock Units:
   - Enter folder [./tests](./tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-load-test-checkout.js
      ```
      - See report: [./tests/reports/graphq-redis-api-load-test-checkout.html](./tests/reports/graphq-redis-api-load-test-checkout.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-load-test-checkout.js
      ```
      - See report: [./tests/reports/serverless-dynamodb-api-load-test-checkout.html](./tests/reports/serverless-dynamodb-api-load-test-checkout.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-load-test-checkout.js
      ```
      - See report: [./tests/reports/rest-postgres-api-load-test-checkout.html](./tests/reports/rest-postgres-api-load-test-checkout.html)


## Stress Tests
- ### Create User:
   - Enter folder [./tests](./tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-stress-test-create-user.js
      ```
      - See report: [./tests/reports/graphq-redis-api-stress-test-create-user.html](./tests/reports/graphq-redis-api-stress-test-create-user.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-stress-test-create-user.js
      ```
      - See report: [./tests/reports/serverless-dynamodb-api-stress-test-create-user.html](./tests/reports/serverless-dynamodb-api-stress-test-create-user.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-stress-test-create-user.js
      ```
      - See report: [./tests/reports/rest-postgres-api-stress-test-create-user.html](./tests/reports/rest-postgres-api-stress-test-create-user.html)

- ### Checkout - Last Stock Units:
   - Enter folder [./tests](./tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-stress-test-checkout.js
      ```
      - See report: [./tests/reports/graphq-redis-api-stress-test-checkout.html](./tests/reports/graphq-redis-api-stress-test-checkout.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-stress-test-checkout.js
      ```
      - See report: [./tests/reports/serverless-dynamodb-api-stress-test-checkout.html](./tests/reports/serverless-dynamodb-api-stress-test-checkout.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-stress-test-checkout.js
      ```
      - See report: [./tests/reports/rest-postgres-api-stress-test-checkout.html](./tests/reports/rest-postgres-api-stress-test-checkout.html)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) March 2024-present, [Alex Galhardo](https://github.com/AlexGalhardo)
