import type { Metadata } from 'next';
import FirmLogo from '@/app/components/firm-logo';
import SiteFooter from '@/app/components/site-footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { firm } from '@/lib/content';
import { services } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return { title: `${service.title} | ${firm.name}`, description: service.introduction };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);

  return (
    <>
      <a className="skip-link" href="#servicio">Saltar al servicio</a>
      <header className="service-masthead">
        <div className="brand-lockup"><FirmLogo /></div>
      </header>
      <main id="servicio">
        <div className="profile-hero">
          <div className="service-intro">
            <h1>{service.title}</h1>
            <p>{service.introduction}</p>
          </div>
        </div>
        <div className="profile-body">
          {service.sections.map(([heading, text]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
      <Link className="service-back" href="/#especialidades">Volver</Link>
    </>
  );
}
