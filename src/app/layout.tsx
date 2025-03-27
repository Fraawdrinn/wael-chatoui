import type { Metadata } from "next";
import type { Viewport } from "next";

import Head from "next/head";

import inter from "@/app/font";

import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Wael Chatoui",
  description: "Mon site portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${inter} max-w-[100vw] overflow-x-hidden scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
