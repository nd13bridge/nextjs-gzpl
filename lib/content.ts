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

export const professionals = [
  {
    id: 'fernando',
    name: 'Fernando Portillo Laguna',
    facts: [
      'Colegiado n.º 8044 del Ilustre Colegio de la Abogacía de Alicante.',
      'Socio director de Antonucci & Portillo Abogados en 2020.',
    ],
  },
  {
    id: 'emma',
    name: 'Emma Tania de la Gala Gallego',
    facts: [
      'Colegiada n.º 8017 del Ilustre Colegio de la Abogacía de Alicante.',
      'Trayectoria profesional vinculada a Senabre Abogados.',
    ],
  },
] as const;
