import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border-red-600 border-2 h-20 m-auto p-2 flex items-center justify-between max-w-11/12">
      <div className="font-['BookkMyungjo-Bd'] text-3xl">읽다:봄</div>
      <div>
        <FaUser className="cursor-pointer" />
      </div>
    </header>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
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
