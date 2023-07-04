/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import http from 'k6/http';
// @ts-ignore
import { sleep } from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  // stages: [
  //   { duration: '5m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
  //   { duration: '30m', target: 100 }, // stay at 100 users for 10 minutes
  //   { duration: '5m', target: 0 }, // ramp-down to 0 users
  // ],
  stages: [
    { duration: '30s', target: 1000 },
    // { duration: '1m', target: 100 },
    // { duration: '30s', target: 0 },
  ],
};

export default function () {
  http.get('http://host.docker.internal:3000/users');

  // sleep(1);
}
