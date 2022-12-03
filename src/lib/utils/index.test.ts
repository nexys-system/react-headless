import { test, expect, describe } from "vitest";
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



describe('getAnalyticsReadyPath', () => {
  const prefixRegExp = new RegExp('^https://[a-z]+.mydomain.com')
  
  test('without uuid', () => {
    expect(U.getAnalyticsReadyPath('https://dev.mydomain.com/app'), prefixRegExp).toBe('/app');
    expect(U.getAnalyticsReadyPath('https://test.mydomain.com/app'), prefixRegExp).toBe(
      '/app'
    );
    expect(U.getAnalyticsReadyPath('https://app.mydomain.com/app'), prefixRegExp).toBe('/app');
  });

  test('with uuid', () => {
    expect(
      U.getAnalyticsReadyPath(
        'https://dev.mydomain.com/app/9f9cbfb5-47b9-40e0-8q2d-0d3528a0d9ff/list',
        prefixRegExp
      )
    ).toBe('/app/:uuid/list');
  });

  test('with uuid (2x)', () => {
    expect(
      U.getAnalyticsReadyPath(
        'https://dev.mydomain.com/app/9r9cbfb5-47a9-40e0-8e2d-6d3528a0d9ff/list/5d3f6d6a-f1ed-454d-8504-4yd4cf59c2a4/detail',
        prefixRegExp
      )
    ).toBe('/app/:uuid/list/:uuid/detail');
  });

  test('wuth id', () => {
    expect(
      U.getAnalyticsReadyPath(
        'https://dev.mydomain.com/app/543/detail'),
        prefixRegExp
    ).toBe('/app/:id/detail');
  });
});
