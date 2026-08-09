import { getRouteKey } from './localizedRoutes';

export interface DetailHero {
  image: string;
  position: string;
  alt: string;
  eyebrow: Record<'en' | 'fr' | 'sw', string>;
}

const detailHeroes: Record<string, DetailHero> = {
  'capabilities.accounting': {
    image: '/src/assets/images/capabilities/finance-spreadsheet-analysis.jpg',
    position: 'center 44%',
    alt: 'Finance team reviewing a spreadsheet',
    eyebrow: { en: 'CAPABILITY / FINANCE', fr: 'CAPACITÉ / FINANCE', sw: 'UWEZO / FEDHA' },
  },
  'capabilities.inventory': {
    image: '/src/assets/images/detail-heroes/inventory-warehouse-inspection.jpg',
    position: 'center 34%',
    alt: 'Warehouse operator checking inventory on a tablet',
    eyebrow: { en: 'CAPABILITY / INVENTORY', fr: 'CAPACITÉ / INVENTAIRE', sw: 'UWEZO / HIFADHI' },
  },
  'capabilities.sales': {
    image: '/src/assets/images/detail-heroes/retail-pos.jpg',
    position: 'center 42%',
    alt: 'Retail operator using a point-of-sale terminal',
    eyebrow: { en: 'CAPABILITY / SALES', fr: 'CAPACITÉ / VENTES', sw: 'UWEZO / MAUZO' },
  },
  'capabilities.procurement': {
    image: '/src/assets/images/detail-heroes/procurement-management.jpg',
    position: 'center center',
    alt: 'Procurement workflow on a laptop with supply chain overlays',
    eyebrow: { en: 'CAPABILITY / PROCUREMENT', fr: 'CAPACITÉ / ACHATS', sw: 'UWEZO / MANUNUZI' },
  },
  'capabilities.manufacturing': {
    image: '/src/assets/images/detail-heroes/manufacturing-factory-worker.jpg',
    position: 'center 44%',
    alt: 'Factory operator working at a production control panel',
    eyebrow: { en: 'CAPABILITY / PRODUCTION', fr: 'CAPACITÉ / PRODUCTION', sw: 'UWEZO / UZALISHAJI' },
  },
  'capabilities.hrPayroll': {
    image: '/src/assets/images/capabilities/hr-people-networking.jpg',
    position: 'center 40%',
    alt: 'Colleagues connecting during a working session',
    eyebrow: { en: 'CAPABILITY / PEOPLE', fr: 'CAPACITÉ / RH', sw: 'UWEZO / WATU' },
  },
  'capabilities.projects': {
    image: '/src/assets/images/capabilities/projects-milestones.jpg',
    position: 'center 44%',
    alt: 'Project team planning milestones together',
    eyebrow: { en: 'CAPABILITY / PROJECTS', fr: 'CAPACITÉ / PROJETS', sw: 'UWEZO / MIRADI' },
  },
  'capabilities.reporting': {
    image: '/src/assets/images/capabilities/reporting-analytics-laptop.jpg',
    position: 'center 42%',
    alt: 'Business analytics dashboard on a laptop',
    eyebrow: { en: 'CAPABILITY / INSIGHT', fr: 'CAPACITÉ / PILOTAGE', sw: 'UWEZO / RIPOTI' },
  },
  'sectors.manufacturing': {
    image: '/src/assets/images/detail-heroes/manufacturing-factory-worker.jpg',
    position: 'center 44%',
    alt: 'Factory operator working at a production control panel',
    eyebrow: { en: 'SECTOR / MANUFACTURING', fr: 'SECTEUR / INDUSTRIE', sw: 'SEKTA / VIWANDA' },
  },
  'sectors.trading': {
    image: '/src/assets/images/detail-heroes/trading-distribution.jpg',
    position: 'center 43%',
    alt: 'Distribution worker carrying a delivery box',
    eyebrow: { en: 'SECTOR / DISTRIBUTION', fr: 'SECTEUR / COMMERCE', sw: 'SEKTA / BIASHARA' },
  },
  'sectors.nonprofits': {
    image: '/src/assets/images/industries/nonprofits-volunteers.jpg',
    position: 'center 42%',
    alt: 'Volunteers working together on a community initiative',
    eyebrow: { en: 'SECTOR / IMPACT', fr: 'SECTEUR / IMPACT', sw: 'SEKTA / ATHARI' },
  },
  'sectors.consultancy': {
    image: '/src/assets/images/industries/consultancy-analysts-meeting.jpg',
    position: 'center 40%',
    alt: 'Consultants reviewing work together',
    eyebrow: { en: 'SECTOR / PROFESSIONAL SERVICES', fr: 'SECTEUR / CONSEIL', sw: 'SEKTA / USHAURI' },
  },
  'sectors.agriculture': {
    image: '/src/assets/images/industries/agriculture-sorghum-field.jpg',
    position: 'center 48%',
    alt: 'Agricultural field at golden hour',
    eyebrow: { en: 'SECTOR / AGRICULTURE', fr: 'SECTEUR / AGRICULTURE', sw: 'SEKTA / KILIMO' },
  },
  'sectors.retail': {
    image: '/src/assets/images/detail-heroes/retail-pos.jpg',
    position: 'center 42%',
    alt: 'Retail operator using a point-of-sale terminal',
    eyebrow: { en: 'SECTOR / RETAIL', fr: 'SECTEUR / DÉTAIL', sw: 'SEKTA / REJAREJA' },
  },
  'sectors.hospitality': {
    image: '/src/assets/images/detail-heroes/hospitality-hotel.jpg',
    position: 'center 48%',
    alt: 'Hospitality team welcoming guests at a hotel reception',
    eyebrow: { en: 'SECTOR / HOSPITALITY', fr: 'SECTEUR / HÔTELLERIE', sw: 'SEKTA / UTALII' },
  },
  'sectors.education': {
    image: '/src/assets/images/detail-heroes/education.jpg',
    position: 'center 44%',
    alt: 'Students learning with computers in a library',
    eyebrow: { en: 'SECTOR / EDUCATION', fr: 'SECTEUR / ÉDUCATION', sw: 'SEKTA / ELIMU' },
  },
};

export function getDetailHero(path: string): DetailHero | undefined {
  return detailHeroes[getRouteKey(path)];
}
