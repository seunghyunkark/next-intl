"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Cookies from "universal-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "@/util/useRouter";


export default function Home() {
  const t = useTranslations('Index');
  const cookies = new Cookies();
  const router = useRouter();

  cookies.set('user-lang', 'en', {path: '/', maxAge: 3654000});

  const title = t('title');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {title}
      <Link href='/ko' prefetch={false}>go to korean page</Link>
      <Link href='/proofread' prefetch={false}>go to proofread page</Link>
    </main>
  );
}
