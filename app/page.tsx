import Image from 'next/image';
import Link from 'next/link';
import architecture from '@/public/images/architecture.png';
import raulPortrait from '@/public/images/raul-gomez-zaragoza.webp';
import fernandoPortrait from '@/public/images/fernando-portillo-laguna.webp';
import carlosPortrait from '@/public/images/carlos-alarcia.webp';
import francisPortrait from '@/public/images/francis-lario-segarra.webp';
import pabloPortrait from '@/public/images/pablo-ferrando.webp';
import { firm, professionals } from '@/lib/content';
import AnimatedMatters from './components/animated-matters';
import BrandHeading from './components/brand-heading';
import HeroContent from './components/hero-content';

const portraits = {
  urbanismo: raulPortrait,
  inmobiliario: fernandoPortrait,
  fiscal: carlosPortrait,
  administrativo: francisPortrait,
  mercantil: pabloPortrait,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#presentacion">Saltar al contenido</a>
      <main id="presentacion">
        <section className="hero" aria-labelledby="main-heading">
          <HeroContent>
            <div className="hero-brand">
              <BrandHeading>
                <Image className="brand-symbol" src="/images/pilares-symbol.svg" alt="" width={114} height={114} />
                <span className="brand-name">{firm.primaryName}{' '}<span className="brand-name-secondary">{firm.secondaryName}</span></span>
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
                      src={portraits[person.id]}
                      alt={`Retrato de ${person.name}`}
                      sizes="(max-width: 700px) 240px, 280px"
                      placeholder="blur"
                    />
                  </div>
                  <h3>{person.name}</h3>
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
            <Image className="brand-symbol" src="/images/pilares-symbol.svg" alt="" width={114} height={114} />
            <span className="brand-name">{firm.primaryName}{' '}<span className="brand-name-secondary">{firm.secondaryName}</span></span>
          </p>
        </div>
        <div className="footer-contact">
          <p className="footer-email">{firm.email}</p>
          <Link className="footer-legal" href="/aviso-legal">Aviso Legal</Link>
        </div>
      </footer>
    </>
  );
}
