"use client"

import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import Cookies from "universal-cookie";

export default function Page() {
  const t = useTranslations('Index');
  const cookies = new Cookies();
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t('title')}
      <button onClick={() => {
        cookies.set('user-lang', 'cn', {path: '/', maxAge: 315600});
        // setIsChange(!isChange);
        router.refresh();
      }}>change</button>
    </main>
  )
}