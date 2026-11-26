import Image from 'next/image';
import SiteFooter from './components/site-footer';
import architecture from '@/public/images/architecture.png';
import { services } from '@/lib/services';
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
          <section className="practice" id="equipo" aria-label="Equipo">
            <div className="practice-overview">
              {professionals.map((person) => (
                <article className="team-member" key={person.id}>
                  <div className="practice-portrait-frame">
                    <Image className="practice-portrait" src={portraits[person.id].src} alt={portraits[person.id].alt}
                      sizes="(max-width: 700px) 240px, 280px" placeholder="blur" />
                  </div>
                  <div>
                    <h2 className="team-member-name">{person.name}</h2>
                    <div className="practice-content">
                      <ul>
                        {person.facts.map((fact) => <li key={fact}>{fact}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="practice" id="especialidades" aria-labelledby="servicios-heading">
            <div className="practice-overview">
              <h2 className="practice-title" id="servicios-heading">Especialidades</h2>
              <div className="practice-content">
                <AnimatedMatters matters={services.map(({ title, slug }) => ({ title, slug }))} label="Especialidades" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
