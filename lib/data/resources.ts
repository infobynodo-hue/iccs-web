export interface Resource {
  title: string;
  coverTitle: string;
  type: string;
  category: string;
  author: string;
  year: string;
  price: string;
  pages: string;
  gradient: string; // CSS gradient value for inline style
  tagColor: 'blue' | 'green' | 'purple';
}

export const resources: Resource[] = [
  {
    title: 'Cardio-Oncología en Pacientes con Cáncer',
    coverTitle: 'Cardio-Oncología',
    type: 'Manual',
    category: 'Cardio-Onc.',
    author: 'Dr. Adrián Huñis',
    year: '2026',
    price: '35€',
    pages: '320 págs',
    gradient: 'linear-gradient(to bottom, #0E5C8C, #1F4D6F)',
    tagColor: 'blue',
  },
  {
    title: 'Inmunología para Pacientes con Cáncer',
    coverTitle: 'Inmunología',
    type: 'Manual',
    category: 'Inmunoterapia',
    author: 'Equipo iCCS',
    year: '2026',
    price: '45€',
    pages: '280 págs',
    gradient: 'linear-gradient(to bottom, #2F8E7C, #1F6055)',
    tagColor: 'green',
  },
  {
    title: 'Medical Science Liaison Curso Integral',
    coverTitle: 'MSL Curso Integral',
    type: 'Curso',
    category: 'Certificado',
    author: '12 módulos · Aval científico',
    year: 'Online',
    price: '45€',
    pages: 'Online',
    gradient: 'linear-gradient(to bottom, #7C3AED, #5B27B5)',
    tagColor: 'purple',
  },
  {
    title: 'Oncología e Inteligencia Artificial',
    coverTitle: 'Oncología e IA',
    type: 'Digital',
    category: 'IA Clínica',
    author: 'Edición Digital',
    year: '2026',
    price: '25€',
    pages: 'PDF',
    gradient: 'linear-gradient(to bottom, #1FA9E0, #0E5C8C)',
    tagColor: 'blue',
  },
];
