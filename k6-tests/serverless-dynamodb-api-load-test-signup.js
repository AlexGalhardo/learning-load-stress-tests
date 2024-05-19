import http from 'k6/http';
import { sleep, check } from 'k6';
import {
	generateRandomFullName,
	generateRandomEmail,
	generateRandomPassword
} from './utils/random.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
	return {
		"./reports/serverless-dynamodb-api-load-test-signup.html": htmlReport(data),
	};
}

export const options = {
	vus: 10,
	duration: '5s',
	thresholds: {
		http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em até 2s
		http_req_failed: ['rate<0.01'], // 1% das requisições podem ocorrer erro
	}
}

export default function () {
	const url = 'https://aws-id.execute-api.us-east-1.amazonaws.com/user' // serverless-dynamodb-api

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

	sleep(1) // sleep for 1 second
}
