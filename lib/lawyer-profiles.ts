import type { professionals } from './content';

type Profile = {
  role: string;
  title: string;
  description: string;
  registration: string;
  biography: string;
  primary: { title: string; paragraphs: string[] };
  related: { title: string; text: string }[];
};

export const profiles = {
  'fernando-portillo-laguna': {
    role: 'Abogado de derecho inmobiliario y registral',
    title: 'Fernando Portillo Laguna | Registro de la Propiedad',
    description: 'Fernando Portillo Laguna asesora sobre inscripción de fincas, linderos y discrepancias con el Catastro.',
    registration: 'Colegiado n.º 8044',
    biography: 'Fernando ha ejercido la defensa ante la Audiencia Provincial de Alicante. En 2020, como socio director de Antonucci & Portillo Abogados, publicó en Noticias Jurídicas un comentario sobre un recurso de apelación que había defendido en materia de impago de pensiones.',
    primary: {
      title: 'Registro de la Propiedad',
      paragraphs: [
        'Una herencia pendiente de inscripción, una vivienda cuya ampliación no figura en la escritura o dos parcelas que se quieren agrupar plantean trámites distintos. Fernando contrasta el título de propiedad con el historial registral para identificar qué falta y cómo documentarlo.',
        'Atiende primeras inscripciones de fincas, segregaciones, agrupaciones y declaraciones de obra nueva. Si el Registro ha suspendido una inscripción, revisa la nota de calificación y explica qué reparos pueden subsanarse y cuándo tiene sentido recurrir.',
      ],
    },
    related: [
      { title: 'Georreferenciación, cabida y linderos', text: 'Si los metros de la escritura difieren de la medición sobre el terreno, Fernando revisa los planos con el técnico que ha medido la parcela y estudia cómo incorporar su representación gráfica al Registro. También atiende al propietario que recibe una notificación sobre los límites de una finca vecina.' },
      { title: 'Catastro', text: 'Una construcción puede faltar en el plano catastral o aparecer dentro de la parcela contigua. Fernando compara la cartografía, los títulos y la realidad física, valora dónde iniciar la corrección y asesora sobre cambios de titularidad, subsanación de discrepancias y recursos.' },
      { title: 'Procedimientos judiciales sobre fincas', text: 'Cuando dos personas reclaman la misma franja de terreno, el primer paso es reconstruir los títulos y localizar el límite en los planos. Fernando estudia las opciones de acuerdo y la defensa ante los tribunales en litigios sobre propiedad, deslinde, recuperación de la finca o rectificación del Registro.' },
    ],
  },
  'emma-tania-de-la-gala-gallego': {
    role: 'Abogada de contratación inmobiliaria',
    title: 'Emma Tania de la Gala Gallego | Compraventa inmobiliaria',
    description: 'Emma Tania de la Gala Gallego asesora a compradores, vendedores, arrendadores y comunidades de propietarios.',
    registration: 'Colegiada n.º 8017',
    biography: 'Emma ejerce la abogacía desde 2014. Su trayectoria está vinculada a Senabre Abogados, donde figura en el equipo profesional. En el despacho es el contacto para compradores y vendedores, así como para quienes necesitan revisar un alquiler o resolver una cuestión de comunidad.',
    primary: {
      title: 'Compraventas y operaciones inmobiliarias',
      paragraphs: [
        'Antes de entregar una reserva o firmar unas arras, Emma revisa qué se transmite, quién puede vender y qué cargas o discrepancias afectan al inmueble. Contrasta la documentación registral, catastral y urbanística con las condiciones que comprador y vendedor quieren pactar.',
        'Acompaña la operación desde la revisión del contrato hasta la escritura y su inscripción. En una compra sobre plano examina las condiciones de entrega. Si parte del precio queda aplazada, estudia cómo reflejar los pagos y sus garantías en el acuerdo.',
      ],
    },
    related: [
      { title: 'Arrendamientos', text: 'Emma redacta y revisa contratos de vivienda, locales, naves y suelo. En el alquiler de un local que necesita obras, ayuda a concretar quién las asume y en qué condiciones. También asesora en opciones de compra, reclamaciones de rentas y procedimientos de desahucio.' },
      { title: 'Propiedad horizontal y relaciones de vecindad', text: 'Atiende a propietarios y comunidades que necesitan modificar la división horizontal, regularizar un local o valorar un acuerdo de junta. En conflictos por medianeras, vallados o servidumbres de paso, revisa los títulos y estudia con el cliente una salida negociada.' },
    ],
  },
} satisfies Record<(typeof professionals)[number]['slug'], Profile>;
