import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kirans-blog.vercel.app"),
  title: {
    template: "%s | Kiran Kumar",
    default: "Kiran Kumar | AI Field Notes",
  },
  description: "Dispatches on using AI agents to replace meetings, freelancers, and busywork.",
  authors: [{ name: "Kiran Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#f5f5fa] text-zinc-900 dark:bg-[#05050b] dark:text-white">
        {children}
      </body>
    </html>
  );
}
