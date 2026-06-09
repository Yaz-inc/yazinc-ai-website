import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yazinc.ai'),
  title: {
    default: 'Yazinc AI | AI-Powered Business & Web Solutions',
    template: '%s | Yazinc AI',
  },
  description:
    'Yazinc AI — AI-powered business and web solutions by Yasir Ikram. WordPress, Shopify, GoHighLevel, custom development, and intelligent automation for agencies, startups, and enterprises.',
  keywords: [
    'AI business solutions',
    'web development',
    'WordPress developer',
    'Shopify expert',
    'GoHighLevel CRM',
    'automation',
    'Laravel',
    'React',
    'custom SaaS',
    'e-commerce development',
    'Yasir Ikram',
    'YAZ INC',
  ],
  authors: [{ name: 'Yasir Ikram', url: 'https://yazinc.ai' }],
  creator: 'YAZ INC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yazinc.ai',
    siteName: 'Yazinc AI',
    title: 'Yazinc AI | AI-Powered Business & Web Solutions',
    description:
      'Transforming businesses with AI-powered solutions, expert web development, and intelligent automation. 15+ years of experience across 6 countries.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yazinc AI | AI-Powered Business & Web Solutions',
    description:
      'AI-powered business and web solutions. WordPress, Shopify, GoHighLevel, custom development.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/branding/logo-removebg.png',
    shortcut: '/images/branding/logo-removebg.png',
    apple: '/images/branding/logo-removebg.png',
  },
};

// Inline script to set theme before first paint
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('yazinc-theme');
    if (t === 'light') document.documentElement.setAttribute('data-theme','light');
  } catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
