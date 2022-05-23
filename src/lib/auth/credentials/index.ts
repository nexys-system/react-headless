import * as Store from "../../store";

import * as Conf from "../conf";
import * as Locale from "../locale";

export const getProfile = <Profile>(): Profile | undefined =>
  Store.get(Conf.PROFILE);

export const getPermissions = () => Store.get(Conf.PERMISSIONS);

export const isDefined = (): boolean => !!getProfile();

export const getLocale = () => Store.get(Conf.LOCALE);

/**
 * get user language. look for the value in the cache. if none
 * - (withDefault=true): fallback to defulat language
 * - (withDefault=false) => throw Error
 */
export const getLanguage = (withDefault: boolean = true): string => {
  const s = getLocale();
  if (!s) {
    if (withDefault) {
      return Conf.LANGUAGE_DEFAULT;
    }
    throw Error("language not set");
  }

  const { lang } = Locale.localeToLangAndCountry(s);

  return lang;
};

export const setLanguage = (lang: string) => {
  const s = getLocale();

  const { country } = Locale.localeToLangAndCountry(s);

  const locale = Locale.langToLocale(lang, country);

  setLocale(locale);
};

export const setCountry = (country: string) => {
  const s = getLocale();

  const { lang } = Locale.localeToLangAndCountry(s);

  const locale = Locale.langToLocale(lang, country);

  setLocale(locale);
};

/**
 * set credentials
 * @param profile : minimal profile
 * @param permissions : list of permissions
 * @param locale : locale, e.g. en_US
 */
export const set = <Profile>(
  profile: Profile,
  permissions: string[],
  locale: string
): void => {
  Store.set(Conf.PROFILE, profile);
  Store.set(Conf.PERMISSIONS, permissions);

  setLocale(locale);
};

export const setLocale = (locale: string): void =>
  Store.set(Conf.LOCALE, locale);

export const remove = (): void => {
  Store.remove(Conf.PROFILE);
  Store.remove(Conf.PERMISSIONS);
  Store.remove(Conf.LOCALE);
};
