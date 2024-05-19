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
		"./reports/graphql-redis-api-load-test-signup.html": htmlReport(data),
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

	check(res, {
		'status should be 201': (r) => r.status === 200,
		'response success should be true': (r) => r.body.success === true
	});

	sleep(1) // sleep for 1 second
}
