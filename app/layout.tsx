import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/manrope/latin-400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'GZPL | Gómez Zaragoza · Portillo Laguna',
  description: 'Gómez Zaragoza · Portillo Laguna. Abogados. Urbanismo, inmobiliario, fiscal, administrativo y mercantil.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
