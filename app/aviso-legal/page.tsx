import type { Metadata } from 'next';
import Link from 'next/link';
import { firm } from '@/lib/content';

export const metadata: Metadata = {
  title: `Aviso Legal | ${firm.name}`,
  description: `Información sobre el titular y las condiciones de uso del sitio web de ${firm.name}.`,
};

export default function LegalNotice() {
  return (
    <main className="legal-page">
      <Link href="/">← Volver a {firm.name}</Link>
      <h1>Aviso Legal</h1>
      <p className="legal-draft">Borrador pendiente de completar y validar por el despacho antes de su publicación. Los datos señalados como pendientes no constituyen información identificativa verificada.</p>

      <section aria-labelledby="titular">
        <h2 id="titular">1. Identificación del titular</h2>
        <p>Este sitio presenta los servicios de {firm.name}. La información identificativa se completará conforme al artículo 10 de la <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758#a10">Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico</a>.</p>
        <dl>
          <dt>Nombre comercial</dt><dd>{firm.name}</dd>
          <dt>Titular o razón social y NIF</dt><dd>Pendientes de confirmar.</dd>
          <dt>Domicilio profesional</dt><dd>Pendiente de completar.</dd>
          <dt>Correo de contacto</dt><dd>{firm.email}</dd>
          <dt>Datos registrales y autorización administrativa, si procede</dt><dd>Pendientes de confirmar.</dd>
          <dt>Información profesional</dt><dd>Pendientes de completar para cada profesional: colegio y número de colegiación, título oficial, Estado de expedición u homologación y normas profesionales aplicables con sus medios de consulta.</dd>
        </dl>
      </section>

      <section aria-labelledby="objeto">
        <h2 id="objeto">2. Objeto y uso del sitio</h2>
        <p>El sitio ofrece información general sobre las áreas de práctica del despacho. Su contenido no constituye asesoramiento jurídico individualizado. La navegación o el envío de una consulta no implican por sí solos la aceptación de un encargo profesional, que deberá acordarse expresamente con el despacho.</p>
      </section>

      <section aria-labelledby="uso">
        <h2 id="uso">3. Condiciones de utilización</h2>
        <p>Las personas usuarias deberán utilizar el sitio de forma lícita, respetando los derechos de terceros y evitando actuaciones que puedan dañar, sobrecargar o impedir su funcionamiento.</p>
      </section>

      <section aria-labelledby="propiedad">
        <h2 id="propiedad">4. Propiedad intelectual</h2>
        <p>Los textos, diseños, imágenes y demás elementos del sitio están sujetos a los derechos que correspondan a sus titulares y a las licencias aplicables. Su utilización deberá respetar dichos derechos y los usos permitidos por la ley. Los retratos se han adaptado con inteligencia artificial a partir de fotografías de los profesionales identificados.</p>
      </section>

      <section aria-labelledby="responsabilidad">
        <h2 id="responsabilidad">5. Contenidos y enlaces</h2>
        <p>La información puede modificarse o actualizarse y deberá contrastarse antes de adoptar decisiones jurídicas. Los enlaces a sitios externos se facilitan como referencia. Las responsabilidades por los contenidos, la disponibilidad del servicio y los enlaces se determinarán conforme a la normativa aplicable, sin excluir derechos reconocidos legalmente.</p>
      </section>

      <section aria-labelledby="privacidad">
        <h2 id="privacidad">6. Datos personales y cookies</h2>
        <p>Este aviso no sustituye a la información de protección de datos. Antes de habilitar la recogida de datos personales, el despacho deberá facilitar la información correspondiente sobre responsable, finalidades, base jurídica, conservación, destinatarios y ejercicio de derechos. El uso de cookies o tecnologías similares deberá revisarse e informarse según su configuración efectiva.</p>
      </section>

      <section aria-labelledby="legislacion">
        <h2 id="legislacion">7. Legislación aplicable</h2>
        <p>El uso del sitio se regirá por la legislación española en lo que resulte aplicable. Cualquier controversia se someterá a los órganos competentes conforme a las reglas legales, respetando las normas imperativas y los derechos de las personas consumidoras.</p>
      </section>
    </main>
  );
}
