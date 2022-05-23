import { test, expect } from "vitest";
import * as L from "./locale";

test("lang to locale", () => {
  expect(L.langToLocale("en")).toEqual("en-US");
});

test("locale to lang", () => {
  expect(L.localeToLangAndCountry("en-US")).toEqual({
    lang: "en",
    country: "US",
  });

  expect(L.localeToLangAndCountry("fr-CH")).toEqual({
    lang: "fr",
    country: "CH",
  });

  expect(L.localeToLangAndCountry("en")).toEqual({
    lang: "en",
    country: "US",
  });
});
