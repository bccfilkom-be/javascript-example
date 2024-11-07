import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "20s", target: 50 },
    { duration: "8s", target: 5 },
  ],
};

export default function () {
  const res = http.get("http://localhost:3000");
  check(res, { "is status 200": (r) => r.status === 200 });
  sleep(1);
}
