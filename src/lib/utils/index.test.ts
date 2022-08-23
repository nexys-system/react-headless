import { test, expect } from "vitest";
import * as U from "./index";

test("delay", async () => {
  const t1 = new Date().getTime();
  const dt = 100;
  await U.delay(dt);
  const t2 = new Date().getTime();
  expect(t2 - dt).toBeGreaterThanOrEqual(t1);
});

test("yes or not", () => {
  expect(U.yesOrNo(true)).toBe("yes");
  expect(U.yesOrNo(false)).toBe("no");
  expect(U.yesOrNo()).toBe("-");
});

test("parse JWT", () => {
  expect(
    U.parseJwt(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    )
  ).toEqual({
    sub: "1234567890",
    name: "John Doe",
    iat: 1516239022,
  });
});
