import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

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
        className={`min-h-screen bg-background bg-selfprimary-bg font-sans antialiased light:bg-white ${fontOutfit.variable} antialiased`}
      >
        <Navbar />
        <main className="px-3 md:px-6 lg:px-12 container mx-auto max-w-7xl flex-grow bg-selfprimary-bg   pt-4">
          {children}
        </main>

        <footer className="flex justify-center items-center gap-4 p-4">
          <Link href="github.com/sibosi" className="inline-flex gap-2">
            <Image
              src="/icons/github.svg"
              alt="GitHub - Simon Nimród"
              width={20}
              height={20}
            />
          </Link>
          <Link href="instagram.com/simon.nimrod" className="inline-flex gap-2">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
        </footer>
      </body>
    </html>
  );
}
