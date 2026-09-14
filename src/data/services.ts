export interface Service {
  number: string
  title: string
  description: string
  highlight?: boolean
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Дизайн интерьера',
    description: 'Полный дизайн-проект квартиры.',
  },
  {
    number: '02',
    title: 'Архитектура',
    description: 'Планировочные и архитектурные решения.',
  },
  {
    number: '03',
    title: 'Комплектация',
    description: 'Материалы, мебель, свет и оборудование.',
  },
  {
    number: '04',
    title: 'Авторский надзор',
    description: 'Контроль реализации проекта.',
  },
  {
    number: '05',
    title: 'Под ключ',
    description: 'Полная реализация квартиры до готового интерьера.',
    highlight: true,
  },
]