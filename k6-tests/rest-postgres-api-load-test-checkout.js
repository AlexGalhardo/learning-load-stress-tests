import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
	return {
		"./reports/load-test-checkout.html": htmlReport(data),
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
	const url = 'http://localhost:3333/checkout'; // rest-postgres-api

	const headers = {
		'headers': {
			'Content-Type': 'application/json',
		}
	};

	const res = http.post(url, headers);

	console.log('res => ', res.body);

	check(res, {
		'status should be 200': (r) => r.status === 200
	});

	sleep(1) // sleep for 1 second
}
