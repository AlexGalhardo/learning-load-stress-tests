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

## Prerequisites
- Install k6: https://k6.io/docs/get-started/installation/
- Install Bun: https://bun.sh/docs/installation
- Install NodeJS: https://nodejs.org/en/download/package-manager
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

## Load Tests
- ### POST /signup
   - Enter folder [./k6-tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-load-test-signup.js
      ```
      - See report: [./k6-tests/reports/graphq-redis-api-load-test-signup.html](./k6-tests/reports/graphq-redis-api-load-test-signup.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-load-test-signup.js
      ```
      - See report: [./k6-tests/reports/serverless-dynamodb-api-load-test-signup.html](./k6-tests/reports/serverless-dynamodb-api-load-test-signup.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-load-test-signup.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-load-test-signup.html](./k6-tests/reports/rest-postgres-api-load-test-signup.html)

- ### POST /checkout (Last Stock Units - simulating a black friday):
   - Enter folder [./tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-load-test-checkout.js
      ```
      - See report: [./k6-tests/reports/graphq-redis-api-load-test-checkout.html](./k6-tests/reports/graphq-redis-api-load-test-checkout.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-load-test-checkout.js
      ```
      - See report: [./k6-tests/reports/serverless-dynamodb-api-load-test-checkout.html](./k6-tests/reports/serverless-dynamodb-api-load-test-checkout.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-load-test-checkout.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-load-test-checkout.html](./k6-tests/reports/rest-postgres-api-load-test-checkout.html)


## Stress Tests
- ### POST /signup
   - Enter folder [./tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-stress-test-signup.js
      ```
      - See report: [./k6-tests/reports/graphq-redis-api-stress-test-signup.html](./k6-tests/reports/graphq-redis-api-stress-test-signup.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-stress-test-signup.js
      ```
      - See report: [./k6-tests/reports/serverless-dynamodb-api-stress-test-signup.html](./k6-tests/reports/serverless-dynamodb-api-stress-test-signup.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-stress-test-signup.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-stress-test-signup.html](./k6-tests/reports/rest-postgres-api-stress-test-signup.html)

- ### POST /checkout (Last Stock Units - simulating a black friday):
   - Enter folder [./tests](./k6-tests/)
   - Testing GraphQL Redis API:
      ```bash
      k6 run graphq-redis-api-stress-test-checkout.js
      ```
      - See report: [./k6-tests/reports/graphq-redis-api-stress-test-checkout.html](./k6-tests/reports/graphq-redis-api-stress-test-checkout.html)
   - Testing Serverless DynamoDB API:
      ```bash
      k6 run serverless-dynamodb-api-stress-test-checkout.js
      ```
      - See report: [./k6-tests/reports/serverless-dynamodb-api-stress-test-checkout.html](./k6-tests/reports/serverless-dynamodb-api-stress-test-checkout.html)
   - Testing REST Postgres API:
      ```bash
      k6 run rest-postgres-api-stress-test-checkout.js
      ```
      - See report: [./k6-tests/reports/rest-postgres-api-stress-test-checkout.html](./k6-tests/reports/rest-postgres-api-stress-test-checkout.html)

## K6 Reports Examples

### ./k6-tests/reports/rest-postgres-api-stress-test-signup.html
<img width="1438" alt="Screenshot 2024-05-19 at 10 51 47" src="https://github.com/AlexGalhardo/api.nerdapi.com/assets/19540357/c5c5c8be-c203-475d-a08a-8607416061e3">

### ./k6-tests/reports/rest-postgres-api-stress-test-checkout.html
<img width="1436" alt="Screenshot 2024-05-19 at 11 08 08" src="https://github.com/AlexGalhardo/api.nerdapi.com/assets/19540357/3454cfd9-7713-4393-ad18-8af07577e1bb">
<img width="1436" alt="Screenshot 2024-05-19 at 11 07 57" src="https://github.com/AlexGalhardo/api.nerdapi.com/assets/19540357/162cd9bd-1ec9-4bae-a170-72934c9c8fd2">

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) March 2024-present, [Alex Galhardo](https://github.com/AlexGalhardo)
