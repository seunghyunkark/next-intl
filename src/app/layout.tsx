import { NextIntlClientProvider } from "next-intl";
import {getLocale, getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const header = headers();
  // const pathname = header.get('x-url');
  // const cookie = cookies();

  // Provoding all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // if(pathname === '/') {
  //   cookie.set('user-lang', 'en', {path: '/', maxAge: 365400})
  // }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
