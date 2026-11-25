export interface DivisionItem {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: 'Brain' | 'Code' | 'Bot' | 'FlaskConical' | 'Factory';
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  logoType: 'factia' | 'inspectia' | 'vision';
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: 'Building2' | 'Factory' | 'Sprout' | 'Zap' | 'ShieldCheck' | 'Truck' | 'HeartPulse' | 'MoreHorizontal';
}

export const WHATSAPP_PHONE = '573176787316';
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola SPACECode, me gustaría recibir más información y asesoría técnica sobre sus soluciones de software, inteligencia artificial y productos tecnológicos.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

export const NAV_LINKS = [
  { name: 'Inicio', href: '#hero', active: true },
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Divisiones', href: '#divisiones', hasDropdown: true },
  { name: 'Productos', href: '#productos' },
  { name: 'Industrias', href: '#industrias' },
  { name: 'I+D', href: '#id' },
  { name: 'Noticias', href: '#noticias' },
];

export const HERO_FEATURES = [
  { title: 'Desarrollo de productos', icon: 'Code' },
  { title: 'Inteligencia Artificial', icon: 'Cpu' },
  { title: 'Soluciones multindustria', icon: 'Layers' },
  { title: 'Impacto regional y global', icon: 'Globe' },
];

export const DIVISIONS_DATA: DivisionItem[] = [
  {
    id: 'space-intelligence',
    name: 'SPACE Intelligence',
    description: 'IA, visión artificial y analítica de datos.',
    image: '/assets/extracted/space_intelligence_neural_brain_hd.jpg',
    iconName: 'Brain'
  },
  {
    id: 'space-systems',
    name: 'SPACE Systems',
    description: 'Plataformas, software y sistemas empresariales.',
    image: '/assets/extracted/space_systems_hd.jpg',
    iconName: 'Code'
  },
  {
    id: 'space-robotics',
    name: 'SPACE Robotics',
    description: 'Robótica, IoT y automatización.',
    image: '/assets/extracted/space_robotics_hd.jpg',
    iconName: 'Bot'
  },
  {
    id: 'space-research',
    name: 'SPACE Research',
    description: 'Investigación, prototipos y tecnología avanzada.',
    image: '/assets/extracted/space_research_hd.jpg',
    iconName: 'FlaskConical'
  },
  {
    id: 'space-industries',
    name: 'SPACE Industries',
    description: 'Aplicación de tecnología en sectores productivos.',
    image: '/assets/extracted/space_industries_hd.jpg',
    iconName: 'Factory'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'factia',
    name: 'Factia',
    tagline: 'Factia',
    description: 'Facturación electrónica y gestión empresarial.',
    image: '/assets/extracted/prod_factia_super_hd.jpg',
    logoType: 'factia'
  },
  {
    id: 'inspectia',
    name: 'INSPECTIA',
    tagline: 'INSPECTIA',
    description: 'Inspección, control y supervisión inteligente.',
    image: '/assets/extracted/prod_inspectia_super_hd.jpg',
    logoType: 'inspectia'
  },
  {
    id: 'vision-artificial',
    name: 'Visión Artificial',
    tagline: 'Visión Artificial',
    description: 'Reconocimiento, análisis y detección en tiempo real.',
    image: '/assets/extracted/prod_vision_super_hd.jpg',
    logoType: 'vision'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  { id: '1', name: 'Construcción e Infraestructura', iconName: 'Building2' },
  { id: '2', name: 'Manufactura y Producción', iconName: 'Factory' },
  { id: '3', name: 'Agroindustria', iconName: 'Sprout' },
  { id: '4', name: 'Energía', iconName: 'Zap' },
  { id: '5', name: 'Seguridad y Salud en el Trabajo', iconName: 'ShieldCheck' },
  { id: '6', name: 'Logística y Transporte', iconName: 'Truck' },
  { id: '7', name: 'Salud', iconName: 'HeartPulse' },
  { id: '8', name: 'Otras Industrias', iconName: 'MoreHorizontal' },
];

export const STATS_DATA = [
  { value: '+10', label: 'Proyectos en desarrollo', icon: 'Users' },
  { value: '+5', label: 'Productos propios', icon: 'Layers' },
  { value: '+7', label: 'Industrias impactadas', icon: 'Building' },
  { value: '+3', label: 'Países con presencia', icon: 'Globe' },
];
