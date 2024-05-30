"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Cookies from "universal-cookie";
import Link from "next/link";
import {ChangeEvent, ReactNode, useTransition} from 'react';
// import {useRouter, usePathname, useParams} from 'next/navigation'
// import { useRouter } from "@/util/useRouter";
import { useRouter } from "next/navigation";

export default function Home() {
  const t = useTranslations('Index');
  const [isPending, startTransition] = useTransition();
  const cookies = new Cookies();
  // const pathname = usePathname();
  // const params = useParams();

  const router = useRouter();

  cookies.set('user-lang', 'ko', {path: '/', maxAge: 3654000});

  const title = t('title');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {title}
      <Link href='/' prefetch={false}>go to eng page</Link>
      <Link href='/proofread' prefetch={false}>go to proofread page</Link>
    </main>
  );
}
