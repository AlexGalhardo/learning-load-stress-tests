# NGINX Load Balancer

## Development Setup Local

1. Clone repository
```
git clone git@github.com:AlexGalhardo/learning-load-stress-tests.git
```

2. Enter repository
```
cd nginx-load-balancer/
```

3. Run setup.sh
```
./setup.sh
```

## DDoS Attacks
- To test rest-postgres-api GET http://localhost/ endpoint
```
node start-get-rest-postgres-api-ddos-attack.mjs
```

- To test rest-postgres-api POST http://localhost/signup endpoint
```
node start-post-signup-rest-postgres-api-ddos-attack.mjs
```

See DDoS Attack Responses (reports) in [responses/](./responses/) folder
