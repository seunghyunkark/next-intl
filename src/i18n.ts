import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async() => {
  const header = headers();
  const pathname = header.get('x-url');
  console.log('i18n pathname:', pathname);

  // Provide a static locale, fetch a user setting,
  // read from 'cookies()', 'headers()', etc.
  const cookie = cookies();
  const userLng = cookie.get('user-lang')?.value || 'en';

  const locale = pathname === '/' ? 'en' : pathname === '/ko' ? 'ko' : userLng;
  

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})

