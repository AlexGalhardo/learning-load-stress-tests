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
		"./reports/graphql-redis-api-stress-test-signup.html": htmlReport(data),
	};
}

export const options = {
	stages: [
		{ duration: '2s', target: 2 },
		{ duration: '3s', target: 3 },
		{ duration: '5s', target: 5 },
		{ duration: '7s', target: 7 },
		{ duration: '5s', target: 5 },
		{ duration: '3s', target: 3 },
		{ duration: '2s', target: 2 },
	],
	thresholds: {
		http_req_duration: ['p(95)<5000'], // 95% das requisicoes devem responder em até 2s
		http_req_failed: ['rate<0.5'], // 1% das requisições podem ocorrer erro
	}
}

export default function () {
	const url = 'http://localhost:3000/graphql'; // graphql-redis-api

	const headers = {
		'headers': {
		'Content-Type': 'application/json',
		}
	};

	const fullName = generateRandomFullName()

	const payloadGraphql = JSON.stringify({
		query: "mutation signup($name: String!, $email: String!, $password: String!) { signup(name: $name, email: $email, password: $password) { success message user { id name email password updated_at created_at jwt_token_session } } }",
		variables: {
		name: fullName,
		email: generateRandomEmail(fullName),
		password: generateRandomPassword(12)
		}
	})

  	const res = http.post(url, payloadGraphql, headers);

	const resBody = JSON.parse(res.body)
	console.log(resBody)

	check(res, {
		'status should be 200': (r) => r.status === 200,
		'success response should be true': (r) => resBody.data.signup.success === true,
	});
}
