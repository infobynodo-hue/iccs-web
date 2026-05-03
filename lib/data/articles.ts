export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 'physician-musician-oncology',
    title:
      'The Physician–Musician in Oncology: Neurobiology of Music, Empathy, and Burnout Resilience',
    excerpt:
      'Una exploración profunda sobre el rol de la música en la neurobiología del médico oncólogo, la empatía clínica y las estrategias de resiliencia frente al burnout profesional.',
    category: 'Artículo destacado',
    date: 'Febrero 2026',
    featured: true,
  },
  {
    id: 'mced-blood-tests',
    title:
      'Pruebas de sangre para detección temprana del cáncer: evidencia y realidad clínica',
    excerpt:
      'Análisis del estado actual de las pruebas multi-cancer early detection (MCED), su sensibilidad, especificidad y la brecha entre los ensayos clínicos y la práctica diaria.',
    category: 'MCED',
    date: 'Ene 2026',
    featured: false,
  },
  {
    id: 'sabcs-2025',
    title:
      'SABCS 2025: Clinical and Translational Advances Redefining Breast Cancer Care',
    excerpt:
      'Resumen editorial de los avances presentados en el San Antonio Breast Cancer Symposium 2025, con foco en ADC, terapias dirigidas y biomarcadores emergentes.',
    category: 'SABCS 2025',
    date: 'Dic 2025',
    featured: false,
  },
];
