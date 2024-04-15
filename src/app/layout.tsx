import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Que comemos hoy?",
  description:
    "Una herramienta para intentar resolver el problema de que comer hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} items-center p-4 md:p-24 max-w-screen-lg mx-auto min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
