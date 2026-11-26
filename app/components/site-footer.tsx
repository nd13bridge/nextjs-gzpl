import FirmLogo from './firm-logo';
import Link from 'next/link';
import { firm } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-identity">
        <p className="footer-brand brand-lockup">
          <FirmLogo />
        </p>
      </div>
      <div className="footer-contact">
        <a className="footer-link-animated" href={`tel:+34${firm.phone.replaceAll(' ', '')}`}>(+34) {firm.phone}</a>
        <a className="footer-link-animated" href={`mailto:${firm.email}`}>{firm.email}</a>
        <Link className="footer-link-animated" href="/aviso-legal">Aviso Legal</Link>
      </div>
    </footer>
  );
}
