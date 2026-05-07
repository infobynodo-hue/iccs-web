export interface TeamMember {
  name: string;
  role: string;
  tag: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Adrián Huñis',
    role: 'Oncología · Referente internacional',
    tag: 'Medical Advisory',
    photo: '/team/adrian-hunis.png',
  },
  {
    name: 'Dr. José M. Cervera',
    role: 'Hemato-oncología clínica',
    tag: 'Clinical Medical Officer',
    photo: '/team/jose-cervera.png',
  },
  {
    name: 'Dr. Juan Carlos Medillez',
    role: 'Práctica oncológica avanzada',
    tag: 'Clinical Medical Officer',
    photo: '/team/medillez.png',
  },
  {
    name: 'Dr. Alexander Cuadrado',
    role: 'Investigación clínica',
    tag: 'Medical Advisory',
    photo: '/team/alexander-cuadrado.png',
  },
  {
    name: 'Dra. Sonia Macià',
    role: 'Oncología clínica',
    tag: 'Medical Advisory',
    photo: '/team/sonia-macia.png',
  },
  {
    name: 'José García',
    role: 'Dirección estratégica',
    tag: 'Managing Director',
    photo: '/team/jose-garcia.png',
  },
  {
    name: 'Diego Fajardo Puig',
    role: 'Operaciones clínicas',
    tag: 'Head of Operations',
    photo: '/team/diego-fajardo.png',
  },
];
