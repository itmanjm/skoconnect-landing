import type { Metadata } from 'next';
import './globals.css';
import StructuredData from '@/components/StructuredData';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'SkoConnect | AI-Powered School Communication Software Jamaica',
  description: 'Transform how Jamaican schools communicate with parents. Real-time announcements, emergency alerts, digital forms, AI-powered document processing & mobile apps. Free Pilot Program available for schools.',
  keywords: 'school communication, parent engagement, emergency alerts, digital forms, school management system, Jamaica, Caribbean, AI document processing, Gemini',
  authors: [{ name: 'SkoConnect' }],
  creator: 'SkoConnect',
  publisher: 'SkoConnect',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://skoconnect.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skoconnect.com',
    title: 'SkoConnect | AI-Powered School Communication Software Jamaica',
    description: 'Transform how Jamaican schools communicate with parents. Real-time announcements, emergency alerts, digital forms, AI-powered document processing & mobile apps.',
    siteName: 'SkoConnect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkoConnect | AI-Powered School Communication Software Jamaica',
    description: 'Transform how Jamaican schools communicate with parents. Real-time announcements, emergency alerts, digital forms, AI-powered document processing & mobile apps.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}