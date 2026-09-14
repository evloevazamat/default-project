export interface GalleryImage {
  src: string
  alt: string
}

export interface Project {
  id: string
  number: string
  title: string
  area: string
  city: string
  type: string
  year: string
  tag: string
  meta: string
  description: string
  image: string
  alt: string
  gallery: GalleryImage[]
  materials: string[]
}

export const projects: Project[] = [
  {
    id: 'apartment-01',
    number: '01',
    title: 'APARTMENT 01',
    area: '128 m²',
    city: 'Moscow',
    type: 'Interior',
    year: '2026',
    tag: 'Interior Design',
    meta: '128 m² / Moscow',
    description:
      'Современный интерьер с натуральным камнем, тёмным деревом и мягким архитектурным освещением. Пространство спроектировано вокруг естественного света и тёплых материалов.',
    image: '/img/1-2.jpg',
    alt: 'APARTMENT 01 — гостиная с деревянными панелями',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop',
        alt: 'Гостиная с тёмным деревом',
      },
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
        alt: 'Светлая зона отдыха',
      },
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop',
        alt: 'Столовая и кухня',
      },
    ],
    materials: ['Тёмный дуб', 'Натуральный камень', 'Микроцемент', 'Шёлковая штукатурка'],
  },
  {
    id: 'residence-02',
    number: '02',
    title: 'RESIDENCE 01',
    area: '186 m²',
    city: 'Private Residence',
    type: 'Architecture',
    year: '2025',
    tag: 'Architecture & Interior',
    meta: '186 m² / Private Residence',
    description:
      'Частная резиденция, где архитектура и интерьер образуют единое целое. Большие окна, чистые линии и продуманная планировка создают спокойное пространство для жизни.',
    image: '/img/1-3.jpg',
    alt: 'RESIDENCE 02 — просторная гостиная',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
        alt: 'Гостиная открытой планировки',
      },
      {
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop',
        alt: 'Спальная зона',
      },
      {
        src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
        alt: 'Лаунж с мягкой мебелью',
      },
    ],
    materials: ['Дуб', 'Мрамор', 'Латунь', 'Вельвет'],
  },
  {
    id: 'apartment-03',
    number: '03',
    title: 'APARTMENT 02',
    area: '94 m²',
    city: 'Saint Petersburg',
    type: 'Interior',
    year: '2026',
    tag: 'Interior Design',
    meta: '94 m² / Interior',
    description:
      'Компактная квартира с выразительными фактурами: бетон, дерево и керамика. Интерьер построен на контрасте тёплых материалов и точных архитектурных линий.',
    image: '/img/12.jpg',
    alt: 'APARTMENT 02 — столовая с натуральными материалами',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop',
        alt: 'Столовая',
      },
      {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
        alt: 'Кухня с деревянными фасадами',
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop',
        alt: 'Санузел с керамикой',
      },
    ],
    materials: ['Бетон', 'Дерево', 'Керамика', 'Кожа'],
  },
  {
    id: 'residence-03',
    number: '04',
    title: 'RESIDENCE 02',
    area: '196 m²',
    city: 'Moscow',
    type: 'Architecture',
    year: '2026',
    tag: 'Architecture',
    meta: '196 m² / Architecture',
    description:
      'Частная резиденция с выразительной архитектурой фасада и продуманным внутренним пространством. Чистые линии, естественный свет и спокойная палитра натуральных материалов.',
    image: '/img/1fin_logo.jpg',
    alt: 'RESIDENCE 02 — архитектура частной резиденции',
    gallery: [
      {
        src: '/img/1fin_logo.jpg',
        alt: 'Фасад и архитектурные линии',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop',
        alt: 'Детали архитектуры',
      },
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
        alt: 'Архитектурные линии современного жилья',
      },
    ],
    materials: ['Камень', 'Бетон', 'Дерево', 'Металл'],
  },
]

export const heroImage = {
  src: '/img/28.jpg',
  alt: 'Тёмный современный интерьер квартиры с тёплым светом',
}

export const aboutImage = {
  src: '/img/4fin_logo.jpg',
  alt: 'Детали интерьера — натуральные материалы и тёплое освещение',
}

export const turnkeyImage = {
  src: '/img/7.jpg',
  alt: 'Готовый интерьер квартиры, реализованный студией под ключ',
}

export const beforeAfter = {
  before: {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop',
    alt: 'Пустая бетонная квартира до ремонта',
  },
  after: {
    src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Готовый интерьер квартиры после ремонта',
  },
}

export const materialsImages = [
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop',
    alt: 'Натуральный камень — тёмная текстура',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop',
    alt: 'Тёплый архитектурный свет',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1400&auto=format&fit=crop',
    alt: 'Керамика и плитка',
  },
  {
    src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1400&auto=format&fit=crop',
    alt: 'Тёмное дерево',
  },
  {
    src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1400&auto=format&fit=crop',
    alt: 'Дерево и камень — фактуры',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
    alt: 'Архитектурные линии современного жилья',
  },
]