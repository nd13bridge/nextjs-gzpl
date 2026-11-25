import Image from 'next/image';
import Link from 'next/link';
import architecture from '@/public/images/architecture.png';
import { portraits } from '@/lib/portraits';
import { firm, professionals } from '@/lib/content';
import AnimatedMatters from './components/animated-matters';
import BrandHeading from './components/brand-heading';
import HeroContent from './components/hero-content';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#presentacion">Saltar al contenido</a>
      <main id="presentacion">
        <section className="hero" aria-labelledby="main-heading">
          <HeroContent>
            <div className="hero-brand">
              <BrandHeading>
                <span className="brand-name" aria-label={`${firm.primaryName} ${firm.secondaryName} Abogados`}>
                  <Image className="brand-symbol" src="/images/pilares-symbol.svg" alt="" width={114} height={114} />
                  <span className="brand-name-primary" aria-hidden="true">{firm.primaryName}</span>
                  <span className="brand-name-secondary" aria-hidden="true">{firm.secondaryName}</span>
                  <span className="brand-descriptor" aria-hidden="true">
                    {'ABOGADOS'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
                  </span>
                </span>
              </BrandHeading>
              <p className="reflection">
                {firm.reflection.map((line) => <span key={line}>{line}</span>)}
              </p>
            </div>
          </HeroContent>
          <div className="hero-image">
            <Image src={architecture} alt="" fill priority sizes="(max-width: 700px) 100vw, 50vw" placeholder="blur" />
          </div>
        </section>
        <div className="practices">
          {professionals.map((person) => (
            <section className="practice" id={person.id} key={person.id} aria-labelledby={`${person.id}-heading`}>
              <div className="practice-inner">
                <h2 id={`${person.id}-heading`}>{person.specialty}</h2>
                <div className="practice-person">
                  <div className="practice-portrait-frame">
                    <Image
                      className="practice-portrait"
                      src={portraits[person.id].src}
                      alt={portraits[person.id].alt}
                      sizes="(max-width: 700px) 240px, 280px"
                      placeholder="blur"
                    />
                  </div>
                  <h3>{person.name}</h3>
                  <Link className="profile-link" href={`/${person.slug}`} aria-label={`Ver perfil de ${person.name}`}>
                    Ver perfil <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <div className="practice-content">
                  <p>{person.description}</p>
                  <AnimatedMatters matters={person.matters} label={`Asuntos de ${person.specialty.toLowerCase()}`} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="site-footer">
        <div className="footer-identity">
          <p className="footer-brand brand-lockup">
            <span className="brand-name" aria-label={`${firm.primaryName} ${firm.secondaryName} Abogados`}>
              <Image className="brand-symbol" src="/images/pilares-symbol.svg" alt="" width={114} height={114} />
              <span className="brand-name-primary" aria-hidden="true">{firm.primaryName}</span>
              <span className="brand-name-secondary" aria-hidden="true">{firm.secondaryName}</span>
              <span className="brand-descriptor" aria-hidden="true">
                {'ABOGADOS'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
              </span>
            </span>
          </p>
        </div>
        <div className="footer-contact">
          <a className="footer-link-animated" href={`tel:+34${firm.phone.replaceAll(' ', '')}`}>(+34) {firm.phone}</a>
          <a className="footer-link-animated" href={`mailto:${firm.email}`}>{firm.email}</a>
          <Link className="footer-link-animated" href="/aviso-legal">Aviso Legal</Link>
        </div>
      </footer>
    </>
  );
}
