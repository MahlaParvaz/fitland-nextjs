import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'فیت لند',
  description: 'سایت فروش وسایل ورزشی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={'min-h-screen font-display'}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
