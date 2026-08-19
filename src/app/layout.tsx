import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

export const metadata: Metadata = {
  title: { default: 'Hilda | Lingerie', template: '%s | Hilda' },
  description: 'Hilda — لوکس‌ترین لباس زیر زنانه. طراحی منحصربه‌فرد، پارچه درجه یک، راحتی بی‌نظیر.',
  keywords: ['لباس زیر', 'لانژری', 'hilda', 'لوکس', 'زنانه'],
  openGraph: { type: 'website', locale: 'fa_IR', siteName: 'Hilda' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise bg-h-cream text-h-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <AIChat />
      </body>
    </html>
  );
}
