import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
