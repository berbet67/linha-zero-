import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'python-do-zero',
    title: 'Python do Zero',
    description: 'Um guia passo a passo para quem nunca programou e quer aprender Python começando pelos fundamentos.',
    price: 47.00,
    category: 'ebook',
    level: 'Beginner',
    cover: 'https://images.unsplash.com/photo-1526374965328-7f61elah-9678', // Placeholder
    features: ['Sintaxe básica', 'Lógica de programação', 'Primeiros projetos', 'Guia de instalação'],
    status: 'available',
    checkoutUrl: '#',
  },
  {
    id: '2',
    slug: 'html-css-do-zero',
    title: 'HTML & CSS do Zero',
    description: 'Aprenda a criar interfaces modernas e responsivas do absoluto zero.',
    price: 37.00,
    category: 'ebook',
    level: 'Beginner',
    cover: 'https://images.unsplash.com/photo-1587620962725-abab7ly-9678', // Placeholder
    features: ['Tags semânticas', 'Flexbox & Grid', 'Responsividade', 'Design moderno'],
    status: 'available',
    checkoutUrl: '#',
  },
  {
    id: '3',
    slug: 'javascript-iniciantes',
    title: 'JavaScript para Iniciantes',
    description: 'Domine a linguagem que move a web e crie interatividade nos seus sites.',
    price: 57.00,
    category: 'ebook',
    level: 'Beginner',
    cover: 'https://images.unsplash.com/photo-1579468118864-14700734636a', // Placeholder
    features: ['Variáveis e Tipos', 'Funções e Loops', 'DOM Manipulation', 'Async/Await'],
    status: 'available',
    checkoutUrl: '#',
  },
  {
    id: '4',
    slug: 'git-github-iniciantes',
    title: 'Git & GitHub para Iniciantes',
    description: 'Aprenda a versionar seu código e colaborar com outros desenvolvedores.',
    price: 27.00,
    category: 'ebook',
    level: 'Beginner',
    cover: 'https://images.unsplash.com/photo-1618401471353-b98a6bcad89c', // Placeholder
    features: ['Fluxo de Trabalho', 'Branches & Merges', 'Pull Requests', 'GitHub Actions'],
    status: 'available',
    checkoutUrl: '#',
  },
  {
    id: '5',
    slug: 'apis-desenvolvedores',
    title: 'APIs para Desenvolvedores',
    description: 'Entenda como integrar seus sistemas com o resto do mundo através de APIs.',
    price: 67.00,
    category: 'ebook',
    level: 'Intermediate',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31', // Placeholder
    features: ['REST vs GraphQL', 'Autenticação JWT', 'Consumo de APIs', 'Construindo sua API'],
    status: 'available',
    checkoutUrl: '#',
  },
  {
    id: '6',
    slug: 'logica-programacao',
    title: 'Lógica de Programação',
    description: 'O alicerce de todo programador. Aprenda a pensar de forma algorítmica.',
    price: 37.00,
    category: 'ebook',
    level: 'Beginner',
    cover: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea', // Placeholder
    features: ['Algoritmos', 'Estruturas de Decisão', 'Repetições', 'Resolução de Problemas'],
    status: 'available',
    checkoutUrl: '#',
  },
];
