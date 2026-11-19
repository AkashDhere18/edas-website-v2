// Self-hosted Google Fonts (same Inter 400/500/600 and Manrope 500/600/700 as the original site)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import './site.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'EDAS Group',
  description:
    'EDAS Group: real estate advisory (EDAS Asset Advisors) and turnkey construction (EDAS Projects) under one accountable partner.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
