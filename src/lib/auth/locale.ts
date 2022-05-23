import { LANGUAGE_DEFAULT, LOCALE_SEPARATOR, COUNTRY_DEFAULT } from "./conf";

export type Locale = string;

// this is wrong, need to use proper locale, see https://docs.oracle.com/cd/E23824_01/html/E26033/glmbx.html
export const localeDefault: Locale =
  LANGUAGE_DEFAULT + LOCALE_SEPARATOR + COUNTRY_DEFAULT;

export const langToLocale = (
  lang: string,
  country: string = COUNTRY_DEFAULT
): Locale => lang + LOCALE_SEPARATOR + country;

/**
 * turn locale into lang and country
 * @param locale : typically "fr_CH", lang only is also accepted, e.g. "en"
 * @returns {lang, country}
 */
export const localeToLangAndCountry = (
  locale: string
): { lang: string; country: string } => {
  try {
    const [lang, country = COUNTRY_DEFAULT] = locale.split(LOCALE_SEPARATOR);
    return { lang, country };
  } catch (err) {
    throw Error("could not split locale into lang and country");
  }
};
