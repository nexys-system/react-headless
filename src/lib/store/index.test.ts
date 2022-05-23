import { test, expect } from "vitest";
import * as Store from "./index";

import LocalStorageMock from "./local-storage-mock";

globalThis.localStorage = new LocalStorageMock();

// init
const key = "my-key";
const val = { a: [3, 4, 5] };

test("store - set", () => {
  const r = Store.set(key, val);
  expect(r).toEqual(undefined);
});

test("store - retrieve", () => {
  const e = Store.get(key);
  expect(val).toEqual(e);
});

test("store - remove and get (null)", () => {
  Store.remove(key);
  const e = Store.get(key);
  expect(e).toEqual(undefined);
});
