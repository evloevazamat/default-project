export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Знакомство',
    description: 'Понимаем ваши пожелания и особенности квартиры.',
  },
  {
    number: '02',
    title: 'Концепция',
    description: 'Определяем характер будущего интерьера.',
  },
  {
    number: '03',
    title: 'Проект',
    description: 'Создаём планировки, чертежи и визуализации.',
  },
  {
    number: '04',
    title: 'Комплектация',
    description: 'Подбираем материалы, мебель и освещение.',
  },
  {
    number: '05',
    title: 'Реализация',
    description: 'Организуем и контролируем ремонт.',
  },
  {
    number: '06',
    title: 'Готовый интерьер',
    description: 'Передаём полностью готовое пространство.',
  },
]

export const turnkeyPath = [
  'Планировка',
  'Дизайн',
  'Материалы',
  'Ремонт',
  'Мебель',
  'Готовый интерьер',
]