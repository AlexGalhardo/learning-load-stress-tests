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
		"./reports/rest-postgres-api-stress-test-signup.html": htmlReport(data),
	};
}

export const options = {
	stages: [
		{ duration: '3s', target: 3 },
		{ duration: '5s', target: 5 },
		{ duration: '7s', target: 7 },
		{ duration: '10s', target: 10 },
		{ duration: '7s', target: 7 },
		{ duration: '5s', target: 5 },
		{ duration: '3s', target: 3 },
	],
	thresholds: {
		http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em até 2s
		http_req_failed: ['rate<0.01'], // 1% das requisições podem ocorrer erro
	}
}

export default function () {
	const url = 'http://localhost:3333/signup';

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

	const resBody = JSON.parse(res.body)
	console.log(resBody)

	check(res, {
		'status should be 201': (r) => r.status === 201,
		'success response should be true': (r) => resBody.success === true,
	});
}
