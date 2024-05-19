# REST POSTGRES API

## Local development setup

1. Clone repository
```bash
git clone git@github.com:AlexGalhardo/learning-load-stress-tests.git
```

2. Enter repository
```bash
cd learning-load-stress-tests/rest-postgres-api
```

3. Run setup.sh
```bash
./setup.sh
```

4. Up development server
```bash
bun run dev
```

5. Verify API endpoint: http://localhost:3333

## API
- You can see the HTTP Requests references inside folder [./rest-client](./rest-client)
- Or use cURL:
```bash
curl --request POST \
    --url http://localhost:3333/checkout \
    --header 'Content-Type: application/json'
```

```bash
curl --request POST \
    --url http://localhost:3333/signup \
    --header 'Content-Type: application/json' \
    --data '{ "name":"cURL Test Name", "email":"curl.test.name@gmail.com", "password":"qwe123BR@qwe123BR@" }'
```
