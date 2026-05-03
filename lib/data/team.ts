export interface TeamMember {
  name: string;
  role: string;
  tag: string;
}

export const team: TeamMember[] = [
  { name: 'Dr. Adrián Huñis', role: 'Oncología · Referente internacional', tag: 'Medical Advisory' },
  { name: 'Dr. José M. Cervera', role: 'Hemato-oncología clínica', tag: 'Clinical Medical Officer' },
  { name: 'Dr. Juan Carlos Medillez', role: 'Práctica oncológica avanzada', tag: 'Clinical Medical Officer' },
  { name: 'Dr. Alexander A. Padrón', role: 'Investigación clínica', tag: 'Medical Advisory' },
  { name: 'José García', role: 'Dirección estratégica', tag: 'Managing Director' },
  { name: 'Diego Fajardo Puig', role: 'Operaciones clínicas', tag: 'Head of Operations' },
];
