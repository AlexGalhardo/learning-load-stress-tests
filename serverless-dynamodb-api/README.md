# Serverless Framework API

## Setup Serverless API

### Prerequisites
   - See: https://www.serverless.com/framework/docs/getting-started
   - Config AWS credentials: [../docs/config-aws-credentials.md](../docs/config-aws-credentials.md)

1. Clone repository
```bash
git clone git@github.com:AlexGalhardo/learning-load-stress-tests.git
```

2. Enter repository and install dependencies
```bash
cd learning-load-stress-tests/serverless-dynamodb-api && npm install
```

3. Install dependencies
```bash
npm install
```

4. Login to your Serverless Account
```bash
sls login
```

5. In https://app.serverless.com/your_user_name/settings/providers
   - a. Create your AWS Provider to use Access Role ARN

6. In https://app.serverless.com/your_user_name/apps
   - a. Click on "Create App"
   - b. Give your app name
   - c. Created your app, click on "crete service" and give your service name
   - d. Paste the org, app and service name into serverless.yml

7.  Deploy to AWS
```bash
sls deploy
```

