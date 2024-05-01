import http from 'k6/http';
import { check } from 'k6';
import {
  generateRandomFullName,
  generateRandomEmail,
  generateRandomPassword
} from './utils/random.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "./reports/serverless-dynamodb-api-stress-test-create-user.html": htmlReport(data),
  };
}

export const options = {
  stages: [
    { duration: '3s', target: 10 },
    { duration: '5s', target: 20 },
    { duration: '7s', target: 30 },
    { duration: '10s', target: 50 },
    { duration: '7s', target: 40 },
    { duration: '5s', target: 20 },
    { duration: '3s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em até 2s
    http_req_failed: ['rate<0.01'], // 1% das requisições podem ocorrer erro
  }
}

export default function () {
  const url = 'https://id.execute-api.us-east-1.amazonaws.com/user' // serverless-dynamodb-api

  const headers = {
    'headers': {
      'Content-Type': 'application/json',
    }
  };

  const fullName = generateRandomFullName()

  const payload = JSON.stringify({
    name: fullName,
    email: generateRandomEmail(fullName),
    password: generateRandomPassword(12)
  })

  const res = http.post(url, payload, headers);

  check(res, {
    'status should be 201': (r) => r.status === 201,
    'response success should be true': (r) => r.body.success === true
  });
}
