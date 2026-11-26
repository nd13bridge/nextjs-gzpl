import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/manrope/latin-400.css';
import './globals.css';
import { firm } from '@/lib/content';

export const metadata: Metadata = {
  title: firm.name,
  description: `${firm.name}. Asesoramiento en derecho registral e inmobiliario en Benidorm y la Marina Baixa.`,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#171817',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
