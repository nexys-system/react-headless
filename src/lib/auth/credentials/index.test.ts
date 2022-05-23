import { describe, test, expect } from "vitest";
import * as Credentials from "./index";
import { PROFILE, PERMISSIONS, LOCALE, LANGUAGE_DEFAULT } from "../conf";

import LocalStorageMock from "../../store/local-storage-mock";

globalThis.localStorage = new LocalStorageMock();

type Locale = string;

const profile = { name: "my profile" };
const permissions = ["a", "b", "c"];
const locale: Locale = "en-US";

describe("test credentials", () => {
  test("before init", () => {
    expect(Credentials.getLanguage()).toEqual(LANGUAGE_DEFAULT);
  });

  test("set credentials", () => {
    Credentials.set(profile, permissions, locale);

    expect(Credentials.getProfile()).toEqual(profile);
    expect(Credentials.getPermissions()).toEqual(permissions);
    expect(Credentials.getLocale()).toEqual(locale);
    expect(Credentials.isDefined()).toEqual(true);

    expect(localStorage.getItem(PROFILE)).toEqual(JSON.stringify(profile));
    expect(localStorage.getItem(PERMISSIONS)).toEqual(
      JSON.stringify(permissions)
    );
    expect(localStorage.getItem(LOCALE)).toEqual(JSON.stringify("en-US"));
  });

  test("set locale", () => {
    expect(Credentials.setLocale("fr-FR"));
  });

  test("set country", () => {
    expect(Credentials.setCountry("CH"));
  });

  test("get locale", () => {
    expect(Credentials.getLocale()).toEqual("fr-CH");
  });

  test("set language", () => {
    expect(Credentials.setLanguage("de"));
  });

  test("get language", () => {
    expect(Credentials.getLanguage()).toEqual("de");
  });

  test("is defined - defined", () => {
    expect(Credentials.isDefined()).toEqual(true);
  });

  test("remove credentials", () => {
    Credentials.remove();

    expect(Credentials.getProfile()).toEqual(undefined);
    expect(Credentials.isDefined()).toEqual(false);
  });

  test("is defined - undefined", () => {
    expect(Credentials.isDefined()).toEqual(false);
  });
});
