// Contenido de presentación pendiente de validación por el despacho.
export const firm = {
  name: 'Fernando Portillo Abogados',
  fullName: 'Fernando Portillo Abogados',
  primaryName: 'Fernando',
  secondaryName: 'Portillo',
  phone: '666 271 818',
  email: 'info@levanteabogados.com',
  preview: true,
  reflection: ['Territorio y patrimonio.', 'Excelencia con nombre propio.'],
};

// Los asuntos descritos son una propuesta editorial, no casos reales ni credenciales.
export const professionals = [
  {
    slug: 'fernando-portillo-laguna',
    id: 'inmobiliario', name: 'Fernando Portillo Laguna', specialty: 'Inmobiliario',
    description: 'Asesoramiento en operaciones inmobiliarias y en las relaciones jurídicas vinculadas a la propiedad, la promoción y el arrendamiento.',
    matters: ['Compraventas y revisión jurídica de activos', 'Promoción y contratación inmobiliaria', 'Arrendamientos y controversias sobre la propiedad'],
  },
  {
    slug: 'emma-tania-de-la-gala-gallego',
    id: 'derecho-corporativo', name: 'Emma Tania de la Gala Gallego', specialty: 'Derecho corporativo',
    description: 'Asesora a empresas en sus operaciones, desde la revisión de contratos hasta la negociación de acuerdos.',
    matters: ['Asesoramiento jurídico a empresas', 'Contratación', 'Negociación de acuerdos'],
  },
] as const;
