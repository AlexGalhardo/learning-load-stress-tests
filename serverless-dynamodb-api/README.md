# Serverless DynamoDB API

## Prerequisites
- See: https://www.serverless.com/framework/docs/getting-started
- Config AWS credentials: [../docs/config-aws-credentials.md](../docs/config-aws-credentials.md)

## Local development setup

1. Clone repository
```bash
git clone git@github.com:AlexGalhardo/learning-load-stress-tests.git
```

2. Enter repository and install dependencies
```bash
cd learning-load-stress-tests/serverless-dynamodb-api
```

3. Install dependencies
```bash
npm install
```

4. Don't forget to setup your AWS credentials locally (prerequisites) to be able to access DynamoDB in AWS
Example in MacOS terminal:
```bash
export AWS_ACCESS_KEY_ID=YOU_AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=YOUR_AWS_ACCESS_KEY_ID
```

5. Up server locally
```bash
npm run dev
```

## Deploying to AWS

a. Login to your Serverless Account
```bash
sls login
```

b. In `https://app.serverless.com/your_user_name/settings/providers`
   - a. Click button at end right: `+ Create Provider`
   - b. Give a **name to your org provider**, like: `alexgalhardo` for example
   - c. Click button: `Connect AWS Provider`
   - You are gonna be redirect to your AWS Console
   - Confirm clicking button: `Create Stack`
   - When is finished, your page: `https://app.serverless.com/your_user_name/settings/providers` will be updated

c. In `https://app.serverless.com/your_user_name/apps`
   - a. Click on "Create App"
   - b. Give your **app name**, like: `serverless-dynamodb-api` for example
   - c. Created your app, click on "crete service" and give your **service name**, like: `serverless-dynamodb-api` for example
   - d. Paste the org, app and service name into serverless.yml

d. Run command
```bash
sls deploy
```

## Remove Deploy from AWS
```bash
sls remove
```
