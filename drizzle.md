// -- DrizzleOrm

```bash
data_received..................: 15 MB  493 kB/s
data_sent......................: 7.8 MB 258 kB/s
http_req_blocked...............: avg=2.81µs  min=640ns  med=1.53µs  max=9.37ms  p(90)=2.1µs   p(95)=2.54µs
http_req_connecting............: avg=517ns   min=0s     med=0s      max=5.21ms  p(90)=0s      p(95)=0s
http_req_duration..............: avg=3.65ms  min=1.12ms med=3.25ms  max=26.6ms  p(90)=5.21ms  p(95)=6.11ms
  { expected_response:true }...: avg=3.65ms  min=1.12ms med=3.25ms  max=26.6ms  p(90)=5.21ms  p(95)=6.11ms
http_req_failed................: 0.00%  ✓ 0           ✗ 80772
http_req_receiving.............: avg=42.62µs min=9.82µs med=37.36µs max=4.67ms  p(90)=61.78µs p(95)=76.93µs
http_req_sending...............: avg=9.5µs   min=3.45µs med=7.36µs  max=10.46ms p(90)=9.74µs  p(95)=20.08µs
http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s      p(90)=0s      p(95)=0s
http_req_waiting...............: avg=3.6ms   min=1.07ms med=3.2ms   max=26.57ms p(90)=5.15ms  p(95)=6.05ms
http_reqs......................: 80772  2692.152301/s
iteration_duration.............: avg=3.7ms   min=1.15ms med=3.3ms   max=26.63ms p(90)=5.26ms  p(95)=6.17ms
iterations.....................: 80772  2692.152301/s
vus............................: 10     min=10        max=10
vus_max........................: 10     min=10        max=10
running (0m30.0s), 00/10 VUs, 80772 complete and 0 interrupted iterations


data_received..................: 19 MB  159 kB/s
data_sent......................: 868 kB 7.2 kB/s
http_req_blocked...............: avg=26.05µs  min=1.09µs   med=2.85µs  max=86.56ms p(90)=3.98µs   p(95)=5.35µs
http_req_connecting............: avg=21.81µs  min=0s       med=0s      max=86.5ms  p(90)=0s       p(95)=0s
http_req_duration..............: avg=1.68ms   min=904.23µs med=1.46ms  max=93.53ms p(90)=2.07ms   p(95)=2.76ms
  { expected_response:true }...: avg=1.68ms   min=904.23µs med=1.46ms  max=93.53ms p(90)=2.07ms   p(95)=2.76ms
http_req_failed................: 0.00%  ✓ 0         ✗ 9045
http_req_receiving.............: avg=103.32µs min=-4350ns  med=56.25µs max=8.62ms  p(90)=162.82µs p(95)=241.2µs
http_req_sending...............: avg=12.19µs  min=4.63µs   med=10.2µs  max=87.51µs p(90)=19.7µs   p(95)=24.85µs
http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s
http_req_waiting...............: avg=1.57ms   min=854.82µs med=1.38ms  max=93.32ms p(90)=1.9ms    p(95)=2.43ms
http_reqs......................: 9045   75.009291/s
iteration_duration.............: avg=1s       min=1s       med=1s      max=1.09s   p(90)=1s       p(95)=1s
iterations.....................: 9045   75.009291/s
vus............................: 2      min=2       max=100
vus_max........................: 100    min=100     max=100
running (2m00.6s), 000/100 VUs, 9045 complete and 0 interrupted iterations

data_received..................: 75 MB  1.7 MB/s
data_sent......................: 3.4 MB 76 kB/s
http_req_blocked...............: avg=4.75ms   min=630ns    med=1.62µs   max=329.65ms p(90)=2.36µs   p(95)=3.48µs
http_req_connecting............: avg=4.74ms   min=0s       med=0s       max=329.58ms p(90)=0s       p(95)=0s
http_req_duration..............: avg=522.59ms min=1.03ms   med=343.51ms max=14.91s   p(90)=508.58ms p(95)=533.18ms
  { expected_response:true }...: avg=323.77ms min=1.03ms   med=340.63ms max=612.78ms p(90)=504.04ms p(95)=524.74ms
http_req_failed................: 1.37%  ✓ 491        ✗ 35125
http_req_receiving.............: avg=156.61ms min=0s       med=165.36ms max=340.21ms p(90)=252.88ms p(95)=268.78ms
http_req_sending...............: avg=10.24µs  min=4.17µs   med=8.29µs   max=508.35µs p(90)=11.24µs  p(95)=24.56µs
http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
http_req_waiting...............: avg=365.97ms min=987.58µs med=173.79ms max=14.91s   p(90)=264.72ms p(95)=287.05ms
http_reqs......................: 35616  791.841678/s
iteration_duration.............: avg=527.39ms min=1.07ms   med=346.12ms max=15.06s   p(90)=509.63ms p(95)=533.69ms
iterations.....................: 35616  791.841678/s
vus............................: 4      min=4        max=996
vus_max........................: 1000   min=1000     max=1000
running (0m45.0s), 0000/1000 VUs, 35616 complete and 0 interrupted iterations
```
