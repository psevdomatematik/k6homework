import http from 'k6/http';
import { check, sleep } from 'k6';

const url = 'http://127.0.0.1:8080/post-message';

export const options = {
  scenarios: {
    test_mock: {
      executor: "ramping-arrival-rate",
      startRate: 1,
      preAllocatedVUs: 10,
      timeUnit: "2s",
      stages: [
        {target: 1, duration: '5m'},
        {target: 2, duration: '30s'},
        {target: 2, duration: '5m'},
        {target: 3, duration: '30s'},
        {target: 3, duration: '5m'},
        {target: 4, duration: '30s'},
        {target: 4, duration: '5m'},
        {target: 5, duration: '30s'},
        {target: 5, duration: '5m'},
      ]
    },
  },
};

export default function () {
  let data = {"msg_id": (Math.floor(Math.random() * 9000000000) + 1000000000).toString()};
  let res = http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(res.json());
  check(res, { 'status was 200': (r) => r.status == 200 });
}