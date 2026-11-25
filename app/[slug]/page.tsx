import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { firm, professionals } from '@/lib/content';
import { profiles } from '@/lib/lawyer-profiles';
import { portraits } from '@/lib/portraits';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return professionals.map(({ slug }) => ({ slug }));
}

function getProfessional(slug: string) {
  return professionals.find((person) => person.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = getProfessional((await params).slug);
  const { title, description } = profiles[person.slug];
  return { title, description };
}

export default async function LawyerProfile({ params }: Props) {
  const person = getProfessional((await params).slug);
  const profile = profiles[person.slug];
  const portrait = portraits[person.id];

  return (
    <>
      <a className="skip-link" href="#perfil">Saltar al perfil</a>
      <header className="profile-header">
        <Link href="/" className="brand-lockup">
          <Image src="/images/pilares-symbol.svg" alt="" width={32} height={32} />
          {firm.name}
        </Link>
        <Link href={`/#${person.id}`}>Volver al equipo</Link>
      </header>
      <main id="perfil">
        <section className="profile-hero" aria-labelledby="profile-name">
          <div className="profile-intro">
            <div>
              <h1 id="profile-name">{person.name}</h1>
              <p className="profile-role">{profile.role}</p>
            </div>
            <Image className="profile-portrait" src={portrait.src} alt={portrait.alt} sizes="(max-width: 700px) 160px, 280px" placeholder="blur" />
          </div>
        </section>
        <div className="profile-body">
          <section>
            <h2>{profile.primary.title}</h2>
            {profile.primary.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
          <section>
            <h2>Consultas relacionadas</h2>
            {profile.related.map((service) => (
              <div className="profile-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>Trayectoria profesional</h2>
            <p>{profile.registration} del Ilustre Colegio de la Abogacía de Alicante (ICALI).</p>
            <p>{profile.biography}</p>
          </section>
        </div>
      </main>
      <footer className="profile-header">
        <Link href={`/#${person.id}`}>Volver</Link>
        <Link href="/aviso-legal">Aviso legal</Link>
      </footer>
    </>
  );
}
