import "./globals.css";
import { Header } from "@/components/header";


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
