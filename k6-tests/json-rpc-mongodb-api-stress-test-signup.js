import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {
	generateRandomFullName,
	generateRandomEmail,
	generateRandomPassword
} from './utils/random.js';

export function handleSummary(data) {
	return {
		"./reports/json-rpc-mongodb-api-stress-test-signup.html": htmlReport(data),
	};
}

export const options = {
  stages: [
    { duration: '2s', target: 10 },
    { duration: '5s', target: 20 },
    { duration: '7s', target: 30 },
    { duration: '10s', target: 50 },
    { duration: '8s', target: 40 },
    { duration: '7', target: 20 },
    { duration: '3s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em até 2s
    http_req_failed: ['rate<0.01'], // 1% das requisições podem ocorrer erro
  }
}

export default function () {
	const url = 'http://localhost:4444/signup'; // json-rpc-mongodb-api

	const headers = {
		'headers': {
			'Content-Type': 'application/json',
		}
	};

	const fullName = generateRandomFullName()

	const payload = JSON.stringify({
  		jsonrpc: "2.0",
		id: 1,
  		method: "signup",
  		params: {
    		name: fullName,
		    email: generateRandomEmail(fullName),
		    password: generateRandomPassword(12)
  		}
	})

	const res = http.post(url, payload, headers);

	const resBody = JSON.parse(res.body)
	console.log(resBody)

	check(res, {
		'status should be 200': (r) => r.status === 200,
		'success response should be true': (r) => resBody.result.success === true,
	});
}
