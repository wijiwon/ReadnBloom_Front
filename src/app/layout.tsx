import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-red-600 border-2 h-20">읽다:봄</header>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
