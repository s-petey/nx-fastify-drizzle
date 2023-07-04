// -- keysley

```bash
data_received..................: 15 MB  511 kB/s
data_sent......................: 8.0 MB 268 kB/s
http_req_blocked...............: avg=2.39µs min=570ns   med=1.57µs  max=6.21ms  p(90)=2.03µs  p(95)=2.36µs
http_req_connecting............: avg=399ns  min=0s      med=0s      max=4.68ms  p(90)=0s      p(95)=0s
http_req_duration..............: avg=3.52ms min=1.22ms  med=3.28ms  max=24.4ms  p(90)=4.78ms  p(95)=5.36ms
  { expected_response:true }...: avg=3.52ms min=1.22ms  med=3.28ms  max=24.4ms  p(90)=4.78ms  p(95)=5.36ms
http_req_failed................: 0.00%  ✓ 0           ✗ 83813
http_req_receiving.............: avg=42µs   min=10.47µs med=39.01µs max=3.33ms  p(90)=60.65µs p(95)=70.52µs
http_req_sending...............: avg=8.93µs min=3.53µs  med=7.49µs  max=3.34ms  p(90)=9.2µs   p(95)=12.82µs
http_req_tls_handshaking.......: avg=0s     min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s
http_req_waiting...............: avg=3.47ms min=1.09ms  med=3.23ms  max=24.37ms p(90)=4.73ms  p(95)=5.31ms
http_reqs......................: 83813  2793.426307/s
iteration_duration.............: avg=3.57ms min=1.28ms  med=3.33ms  max=24.43ms p(90)=4.83ms  p(95)=5.41ms
iterations.....................: 83813  2793.426307/s
vus............................: 10     min=10        max=10
vus_max........................: 10     min=10        max=10
running (0m30.0s), 00/10 VUs, 83813 complete and 0 interrupted iterations

data_received..................: 20 MB  161 kB/s
data_sent......................: 868 kB 7.2 kB/s
http_req_blocked...............: avg=25.19µs  min=1.07µs   med=2.63µs  max=65.99ms  p(90)=3.65µs   p(95)=4.63µs
http_req_connecting............: avg=21.37µs  min=0s       med=0s      max=65.93ms  p(90)=0s       p(95)=0s
http_req_duration..............: avg=1.73ms   min=863.08µs med=1.35ms  max=58.64ms  p(90)=1.99ms   p(95)=3.77ms
  { expected_response:true }...: avg=1.73ms   min=863.08µs med=1.35ms  max=58.64ms  p(90)=1.99ms   p(95)=3.77ms
http_req_failed................: 0.00%  ✓ 0         ✗ 9045
http_req_receiving.............: avg=129.86µs min=13.19µs  med=51.62µs max=16.49ms  p(90)=160.54µs p(95)=256.89µs
http_req_sending...............: avg=11.35µs  min=4.21µs   med=9.5µs   max=181.47µs p(90)=17.2µs   p(95)=23.27µs
http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
http_req_waiting...............: avg=1.59ms   min=831.56µs med=1.27ms  max=58.54ms  p(90)=1.78ms   p(95)=2.6ms
http_reqs......................: 9045   75.010452/s
iteration_duration.............: avg=1s       min=1s       med=1s      max=1.06s    p(90)=1s       p(95)=1s
iterations.....................: 9045   75.010452/s
vus............................: 2      min=2       max=100
vus_max........................: 100    min=100     max=100

data_received..................: 90 MB  2.0 MB/s
data_sent......................: 4.1 MB 90 kB/s
http_req_blocked...............: avg=3.56ms   min=650ns  med=1.67µs   max=288.72ms p(90)=2.42µs   p(95)=3.37µs
http_req_connecting............: avg=3.55ms   min=0s     med=0s       max=288.63ms p(90)=0s       p(95)=0s
http_req_duration..............: avg=440.71ms min=1.17ms med=323.37ms max=14.9s    p(90)=447.65ms p(95)=477.3ms
  { expected_response:true }...: avg=272.29ms min=1.17ms med=320.59ms max=547.05ms p(90)=445.35ms p(95)=467.58ms
http_req_failed................: 1.16%  ✓ 491        ✗ 41770
http_req_receiving.............: avg=132.91ms min=0s     med=152.19ms max=290.56ms p(90)=224.8ms  p(95)=239.26ms
http_req_sending...............: avg=10.35µs  min=4.1µs  med=8.35µs   max=685µs    p(90)=11.18µs  p(95)=24.62µs
http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
http_req_waiting...............: avg=307.79ms min=1.11ms med=161.12ms max=14.9s    p(90)=232.79ms p(95)=247.1ms
http_reqs......................: 42261  939.566514/s
iteration_duration.............: avg=444.33ms min=1.2ms  med=326.85ms max=15.03s   p(90)=448.33ms p(95)=479.18ms
iterations.....................: 42261  939.566514/s
vus............................: 4      min=4        max=995
vus_max........................: 1000   min=1000     max=1000
running (0m45.0s), 0000/1000 VUs, 42261 complete and 0 interrupted iterations
```
