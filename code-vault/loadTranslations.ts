import {getLocale} from 'gt-next/server';

export default async function loadTranslations(locale: string) {
  const currentLocale = await getLocale();
 
  if (locale === currentLocale) {
    const translations = await import(`./public/_gt/${locale}.json`);
    return translations.default;
  }

  return {};
}