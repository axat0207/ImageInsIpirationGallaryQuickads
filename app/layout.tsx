import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import {quickadsLogo} from '@/utils/constants'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quickads Image Inspiration",
  description: "Image Insipiration page by Quickads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
