import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Canário Belga Amarelo',
    species: 'Serinus canaria',
    description: 'Lindo canário belga amarelo, conhecido por seu canto melodioso e cor vibrante. Ideal para iniciantes no mundo dos pássaros.',
    price: 180.00,
    originalPrice: 220.00,
    images: [
      '/public/images/belga_1.png',
      '/public/images/belga_2.png'
    ],
    category: 'canários',
    age: '4-6 meses',
    sex: 'macho',
    inStock: true,
    featured: true,
    characteristics: ['Canto melodioso', 'Cor vibrante', 'Dócil', 'Fácil cuidado'],
    care: ['Alimentação: mix de sementes e frutas', 'Gaiola espaçosa', 'Banho diário', 'Temperatura 18-24°C']
  },
  {
    id: '2',
    name: 'Calopsita Lutino',
    species: 'Nymphicus hollandicus',
    description: 'Calopsita lutino com linda crista e personalidade cativante. Muito inteligente e sociável.',
    price: 350.00,
    images: [
      '/public/images/lutino_1.png',
      '/public/images/lutino_2.png'
    ],
    category: 'calopsitas',
    age: '6-8 meses',
    sex: 'fêmea',
    inStock: true,
    featured: true,
    characteristics: ['Muito inteligente', 'Sociável', 'Aprende truques', 'Crista expressiva'],
    care: ['Ração para calopsitas', 'Interação social diária', 'Brinquedos estimulantes', 'Espaço para voar']
  },
  {
    id: '3',
    name: 'Papagaio Verdadeiro',
    species: 'Amazona aestiva',
    description: 'Papagaio verdadeiro brasileiro, excelente falador e companheiro. Muito inteligente e longevo.',
    price: 1200.00,
    images: [
      '/public/images/verdadeiro_1.png',
      '/public/images/verdadeiro_2.png'
    ],
    category: 'papagaios',
    age: '8-12 meses',
    sex: 'não-definido',
    inStock: true,
    featured: true,
    characteristics: ['Excelente falador', 'Muito inteligente', 'Longevo (50-80 anos)', 'Companheiro fiel'],
    care: ['Ração de qualidade', 'Frutas e verduras frescas', 'Muito estímulo mental', 'Supervisão veterinária regular']
  },
  {
    id: '4',
    name: 'Periquito Australiano Azul',
    species: 'Melopsittacus undulatus',
    description: 'Periquito australiano azul, alegre e brincalhão. Ótimo para iniciantes e famílias.',
    price: 120.00,
    images: [
      '/public/images/periquito_1.png',
      '/public/images/periquito_2.png'
    ],
    category: 'periquitos',
    age: '3-5 meses',
    sex: 'macho',
    inStock: true,
    featured: false,
    characteristics: ['Alegre e brincalhão', 'Sociável', 'Fácil manutenção', 'Coloração vibrante'],
    care: ['Mix de sementes', 'Frutas pequenas', 'Companhia de outros periquitos', 'Gaiola com brinquedos']
  },
  {
    id: '5',
    name: 'Agapornis Fischer',
    species: 'Agapornis fischeri',
    description: 'Agapornis fischer, conhecido como "pássaro do amor". Colorido e cheio de personalidade.',
    price: 280.00,
    images: [
      '/public/images/agapornis_1.png',
      '/public/images/agapornis_2.png'
    ],
    category: 'pássaros-exóticos',
    age: '4-6 meses',
    sex: 'fêmea',
    inStock: true,
    featured: true,
    characteristics: ['Muito colorido', 'Forma vínculos fortes', 'Ativo e brincalhão', 'Tamanho pequeno'],
    care: ['Ração específica', 'Frutas e verduras', 'Ambiente seguro', 'Atenção e carinho diários']
  },
  {
    id: '6',
    name: 'Canário do Reino',
    species: 'Serinus canaria',
    description: 'Canário do reino, conhecido por seu porte elegante e canto excepcional.',
    price: 250.00,
    images: [
      '/public/images/reino_1.png',
      '/public/images/reino_2.png'
    ],
    category: 'canários',
    age: '5-7 meses',
    sex: 'macho',
    inStock: true,
    featured: false,
    characteristics: ['Porte elegante', 'Canto excepcional', 'Resistente', 'Boa reprodução'],
    care: ['Alimentação variada', 'Gaiola ampla', 'Ambiente tranquilo', 'Banho regular']
  }
];

export const categories = [
  { id: 'canários', name: 'Canários', icon: '🐤' },
  { id: 'papagaios', name: 'Papagaios', icon: '🦜' },
  { id: 'calopsitas', name: 'Calopsitas', icon: '🦜' },
  { id: 'periquitos', name: 'Periquitos', icon: '🦜' },
  { id: 'pássaros-exóticos', name: 'Pássaros Exóticos', icon: '🦅' },
  { id: 'acessórios', name: 'Acessórios', icon: '🏠' }
]; 