export enum ProjectType {
  ELECTRICITY = 'Électricité Générale',
  RENOVATION = 'Rénovation Électrique',
  INSTALLATION = 'Installation Neuve',
  DOMOTIQUE = 'Domotique'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

export interface Realization {
  id: string;
  title: string;
  location: string;
  type: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface QuoteFormData {
  projectType: ProjectType | null;
  location: string;
  surface: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  details: string;
}

export const COMPANY_INFO = {
  name: "M.MTRAVAUX",
  owner: "M.MTRAVAUX",
  phone: "06 52 23 66 76",
  phoneClean: "0652236676",
  email: "contact@mmtravaux.fr",
  zone: "Lozère (48) — Saint-Étienne-Vallée-Française & alentours",
  hours: "Lun-Ven 08:00–17:00",
  logo: "",
  address: "Le Meyran Lieu dit, 48330 Saint-Étienne-Vallée-Française",
  rating: "5,0",
  reviewCount: 28
};