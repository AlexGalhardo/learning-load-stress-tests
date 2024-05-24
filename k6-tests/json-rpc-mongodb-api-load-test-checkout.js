import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
	return {
		"./reports/json-rpc-mongodb-api-load-test-checkout.html": htmlReport(data),
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
	const url = 'http://localhost:4444/checkout'; // json-rpc-mongodb-api

	const headers = {
		'headers': {
			'Content-Type': 'application/json',
		}
	};

	const payload = JSON.stringify({
  		jsonrpc: "2.0",
		id: 1,
  		method: "checkout",
  		params: {
    		product_id: "91f2f7d6-4e3d-4ba3-b674-1168d0096755"
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
