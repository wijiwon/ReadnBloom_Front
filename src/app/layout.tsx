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
      <header className="border-red-600 border-2 h-20 font-['BookkMyungjo-Bd'] text-3xl m-auto p-2 flex items-center max-w-11/12 ">
        읽다:봄
      </header>
      <html lang="en">
        <body>
          <div className="border-amber-700 border-2 m-auto max-w-11/12">
            {children}
          </div>
        </body>
      </html>
    </>
  );
}
