
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter(
  { subsets: ["latin"],
}
  );

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digitalnerdhq.com'),

  title: {
    default: "DigitalNerdHQ – Turn Your Digital Skills Into Income",
    template: "%s | DigitalNerdHQ",
  },
  description: "You've got the skill—we'll help you monetize it. Join our community of creators turning design, writing, and coding into profitable businesses.",
  
  
  keywords: ['freelancing', 'digital skills', 'monetize skills', 'online business', 'Fiverr', 'Upwork', 'freelance course', 'digital marketing'],


  authors: [{ name: 'DigitalNerdHQ', url: 'https://www.digitalnerdhq.com' }],
  creator: 'DigitalNerdHQ',
  publisher: 'DigitalNerdHQ',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "DigitalNerdHQ – Turn Your Digital Skills Into Income",
    description: "Monetize your digital skills and turn them into a sustainable income with our expert-led programs and community.",
    url: "https://www.digitalnerdhq.com",
    siteName: "DigitalNerdHQ",
    images: '/images/digitalnerd.png', // IMPORTANT: Create and add an og-image.png in your /public/images folder (1200x630px recommended)
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "DigitalNerdHQ – Turn Your Digital Skills Into Income",
    description: "Monetize your digital skills and turn them into a sustainable income with our expert-led programs and community.",
    images: ['/images/digitalnerd.png'], // IMPORTANT: Ensure this image exists
    creator: '@DigitalNerdHQ',
  },

  // Add icons
  icons: {
    icon: '/logo.png', // Using your existing logo as a favicon
    apple: '/logo.png', // For Apple devices
  },

  // Link to your manifest file for PWA capabilities
  manifest: '/manifest.json', // IMPORTANT: Create a manifest.json file in your /public folder
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
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FJ94QYC5RK"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJ94QYC5RK');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1394641318673623');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1394641318673623&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
        
        </body>
    </html>
  );
}
