
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter(
  { subsets: ["latin"],
    // You can specify weights here if needed, e.g., weight: ['400', '700']
}
  );

export const metadata: Metadata = {
  title: "DigitalNerd – Turn Your Digital Skills Into Income",
  description: "You've got the skill—we'll help you monetize it. Join our community of creators turning design, writing, marketing, and coding into profitable businesses with daily action plans, premium templates, live workshops, community support, quick-win challenges, and growth accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      
      suppressHydrationWarning={true}
      className={font.className}>
        <Analytics />
        {children}
        
        </body>
    </html>
  );
}
