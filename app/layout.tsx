
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
  // Set a base URL for all relative URLs in metadata
  metadataBase: new URL('https://www.digitalnerdhq.com'), // IMPORTANT: Replace with your actual domain

  // Title can be a template to apply to all pages
  title: {
    default: "DigitalNerdHQ – Turn Your Digital Skills Into Income",
    template: "%s | DigitalNerdHQ",
  },
  description: "You've got the skill—we'll help you monetize it. Join our community of creators turning design, writing, and coding into profitable businesses.",
  
  // Add relevant keywords
  keywords: ['freelancing', 'digital skills', 'monetize skills', 'online business', 'Fiverr', 'Upwork', 'freelance course', 'digital marketing'],

  // Add author and publisher information
  authors: [{ name: 'DigitalNerdHQ', url: 'https://www.digitalnerdhq.com' }],
  creator: 'DigitalNerdHQ',
  publisher: 'DigitalNerdHQ',

  // Control how search engines crawl the site
  robots: {
    index: true,
    follow: true,
  },

  // Open Graph (for social media sharing, e.g., Facebook, LinkedIn)
  openGraph: {
    title: "DigitalNerdHQ – Turn Your Digital Skills Into Income",
    description: "Monetize your digital skills and turn them into a sustainable income with our expert-led programs and community.",
    url: "https://www.digitalnerdhq.com",
    siteName: "DigitalNerdHQ",
    images: '/images/og-image.png', // IMPORTANT: Create and add an og-image.png in your /public/images folder (1200x630px recommended)
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "DigitalNerdHQ – Turn Your Digital Skills Into Income",
    description: "Monetize your digital skills and turn them into a sustainable income with our expert-led programs and community.",
    images: ['/images/og-image.png'], // IMPORTANT: Ensure this image exists
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
