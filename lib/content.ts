// Contenido de presentación pendiente de validación por el despacho.
export const firm = {
  name: 'GZPL',
  fullName: 'Gómez Zaragoza · Portillo Laguna',
  email: 'legal@gzpl.com', // Ejemplo; buzón no verificado.
  preview: true,
  reflection: 'Comprender el fondo. Cuidar cada detalle.',
};

// Los asuntos descritos son una propuesta editorial, no casos reales ni credenciales.
export const professionals = [
  {
    id: 'urbanismo', name: 'Raúl Gómez Zaragoza', specialty: 'Urbanismo',
    description: 'Asesoramiento en la transformación y el uso del suelo, desde el planeamiento hasta la ejecución de actuaciones urbanísticas.',
    matters: ['Planeamiento y gestión urbanística', 'Licencias y disciplina urbanística', 'Juntas de compensación y convenios'],
  },
  {
    id: 'inmobiliario', name: 'Fernando Portillo Laguna', specialty: 'Inmobiliario',
    description: 'Asesoramiento en operaciones inmobiliarias y en las relaciones jurídicas vinculadas a la propiedad, la promoción y el arrendamiento.',
    matters: ['Compraventas y revisión jurídica de activos', 'Promoción y contratación inmobiliaria', 'Arrendamientos y controversias sobre la propiedad'],
  },
  {
    id: 'fiscal', name: 'Carlos Alarcia', specialty: 'Fiscal',
    description: 'Análisis de las implicaciones tributarias de las decisiones empresariales y patrimoniales, así como de las relaciones con la Administración tributaria.',
    matters: ['Fiscalidad de empresas y patrimonios', 'Planificación tributaria de operaciones y sucesiones', 'Inspecciones, reclamaciones y recursos tributarios'],
  },
  {
    // Nombre ficticio autorizado para el boceto. Sustituir por el nombre completo de Francis.
    id: 'administrativo', name: 'Francisco Beltrán', specialty: 'Administrativo',
    description: 'Asistencia jurídica en las relaciones con las administraciones públicas y en la defensa de los intereses de particulares y empresas ante su actuación.',
    matters: ['Contratación pública y procedimientos de licitación', 'Procedimientos sancionadores y responsabilidad patrimonial', 'Recursos administrativos y contencioso-administrativos'],
  },
  {
    id: 'mercantil', name: 'Pablo Ferrando', specialty: 'Mercantil',
    description: 'Asesoramiento en la estructura jurídica de la empresa, sus operaciones y las relaciones entre socios, con atención a la continuidad del negocio.',
    matters: ['Derecho societario y pactos entre socios', 'Adquisiciones y reorganizaciones empresariales', 'Contratación mercantil y conflictos societarios'],
  },
] as const;
