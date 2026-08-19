import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ScrollProgress from '@/components/ScrollProgress';
import AIChat from '@/components/AIChat';

export const metadata: Metadata = {
  title: {
    default: 'Hilda | لباس زیر زنانه لوکس و شیک',
    template: '%s | Hilda',
  },
  description:
    'Hilda - برند لوکس لباس زیر زنانه با بهترین کیفیت، طراحی‌های منحصربه‌فرد و راحتی بی‌نظیر. خرید آنلاین سوتین، شورت، ست لانژری با ارسال رایگان.',
  keywords: [
    'لباس زیر زنانه',
    'سوتین',
    'شورت زنانه',
    'لانژری',
    'ست لباس زیر',
    'hilda',
    'لباس زیر لوکس',
    'زنانه',
    'فروش لباس زیر',
    'خرید آنلاین لباس زیر',
  ],
  authors: [{ name: 'Hilda' }],
  creator: 'Hilda',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://hilda.com',
    siteName: 'Hilda',
    title: 'Hilda | لباس زیر زنانه لوکس و شیک',
    description:
      'بهترین لباس زیر زنانه با کیفیت بالا و طراحی‌های خاص. خرید راحت و ارسال سریع.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hilda Lingerie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hilda | لباس زیر زنانه لوکس',
    description: 'بهترین لباس زیر زنانه با کیفیت بالا و طراحی‌های خاص.',
    images: ['/og-image.jpg'],
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
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise-overlay bg-hilda-cream text-hilda-charcoal antialiased">
        <CursorGlow />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AIChat />
      </body>
    </html>
  );
}
