import Link from 'next/link';
import Image from 'next/image';
import { firm } from '@/lib/content';

export default function FirmLogo() {
  return (
    <Link href="/" className="brand-name brand-home-link" aria-label={`Inicio de ${firm.name}`}>
      <Image className="brand-symbol" src="/images/pilares-symbol.svg" alt="" width={114} height={114} />
      <span className="brand-name-primary" aria-hidden="true">{firm.primaryName}</span>
      <span className="brand-name-secondary" aria-hidden="true">{firm.secondaryName}</span>
      <span className="brand-descriptor" aria-hidden="true">
        {'ABOGADOS'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
      </span>
    </Link>
  );
}
