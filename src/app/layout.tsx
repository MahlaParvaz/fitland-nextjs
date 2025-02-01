import type { Metadata } from 'next';
import './globals.css';
import vazirFont from '@/constants/localFont';
import Header from '@/components/ui/Header';

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
      <body className={`min-h-screen  ${vazirFont.variable} font-sans `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
