import Image from 'next/image';
import architecture from '@/public/images/architecture.png';
import { firm, professionals } from '@/lib/content';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#presentacion">Saltar al contenido</a>
      <main id="presentacion">
        <section className="hero" aria-labelledby="main-heading">
          <div className="hero-content">
            <div className="hero-brand">
              <h1 id="main-heading">GZPL <span className="profession">Abogados</span></h1>
              <p className="brand-specialties">Urbanismo | Inmobiliario | Fiscal</p>
              <p className="reflection">{firm.reflection}</p>
            </div>
          </div>
          <div className="hero-image">
            <Image src={architecture} alt="" fill priority sizes="(max-width: 700px) 100vw, 50vw" placeholder="blur" />
          </div>
        </section>
        <div className="practices">
          {professionals.map((person) => (
            <section className="practice" id={person.id} key={person.id} aria-labelledby={`${person.id}-heading`}>
              <div className="practice-person">
                <h2 id={`${person.id}-heading`}>{person.specialty}</h2>
                <h3>{person.name}</h3>
              </div>
              <div className="practice-content">
                <p>{person.description}</p>
                <ul aria-label={`Asuntos de ${person.specialty.toLowerCase()}`}>
                  {person.matters.map((matter) => <li key={matter}>{matter}</li>)}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="site-footer">
        <p className="footer-brand"><span className="wordmark">GZPL</span><span>Abogados</span></p>
        <a className="email-link" href={`mailto:${firm.email}`}>{firm.email}</a>
      </footer>
    </>
  );
}
