import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkoConnect - School Communication, Simplified',
  description: 'SkoConnect connects schools, teachers, parents, and students in one powerful platform. Simplify communication, save time, and keep everyone informed.',
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
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}