import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
// import {locales, pathnames, localePrefix} from './config';

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales: ['en', 'ko', 'cn'],
    pathnames: {
      '/': {
        en: '/',
        ko: '/ko'
      },
    },
    localePrefix: 'always'
  });