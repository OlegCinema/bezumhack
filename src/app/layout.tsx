import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "FUKCATHON",
  description: "Создай или найди свой хакатон",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{margin: 0, height: "100%"}}>
        {children}
      </body>
    </html>
  );
}
