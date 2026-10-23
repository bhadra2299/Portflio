import type { Metadata } from "next";
import { Albert_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-albert",
  display: "swap",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kudum Veerabhadraiah - AI Engineer & Data Scientist",
  description:
    "AI Engineer and Data Scientist building production-ready ML pipelines, AI systems, and SaaS products. Bangalore, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${albert.variable} ${fragment.variable}`}>
      <body className="font-albert">{children}</body>
    </html>
  );
}
