import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";

const bodyFont = Arvo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My Weather App",
  description: "Suraj Katyayan makes a weather app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
