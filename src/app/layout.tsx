import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlocksScan Technologies | Experience the Future of Blockchain",
  description: "BlocksScan Technologies builds immersive blockchain experiences. Explore xblockchain, GCX, AI-Smart Explorer, XDCGram, and OpenScan.",
  keywords: ["blockchain", "web3", "xdc", "explorer", "xblockchain", "GCX", "AI-Smart", "XDCGram", "OpenScan"],
  authors: [{ name: "BlocksScan Technologies" }],
  openGraph: {
    title: "BlocksScan Technologies",
    description: "Experience the Future of Blockchain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
