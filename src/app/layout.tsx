import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const dalekFont = localFont({
  src: [
    {
      path: "../../public/fonts/DalekPinpointBold.ttf",
    },
  ],
  variable: "--font-dalek",
});

export const metadata: Metadata = {
  title: "Vulcan Launchpad",
  description: "Crowd Funding System for multi chain eco system",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${dalekFont.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
