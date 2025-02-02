import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const fontOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLC - EJG",
  description: "Finance Literacy Club - EJG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`bg-selfprimary-bg min-h-screen bg-background bg-slate-50 font-sans antialiased ${fontOutfit.variable} antialiased`}
      >
        <Navbar />
        <main className="bg-selfprimary-bg container mx-auto max-w-7xl flex-grow px-3 pt-4 md:px-6 lg:px-12">
          {children}
        </main>

        <Analytics />

        <footer className="grid grid-cols-2 items-center justify-center divide-x-2 divide-slate-900 p-4">
          <Link
            href="https://instagram.com/e5vos.technikusi.szervezet"
            className="inline-flex justify-end gap-2 px-2"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
            <span>
              <strong>FLC</strong> Instagram
            </span>
          </Link>
          <Link
            href="https://github.com/sibosi"
            className="inline-flex gap-2 px-2"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub - Simon Nimród"
              width={20}
              height={20}
            />
            <span>
              <strong>Simon Nimród</strong>
            </span>
          </Link>
        </footer>
      </body>
    </html>
  );
}
