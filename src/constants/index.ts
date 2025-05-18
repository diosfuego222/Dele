import { NavItem, ChatbotQuestion } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Inicio',
    href: '#home',
  },
  {
    label: 'Préstamos',
    href: '#loans',
    children: [
      {
        label: 'Personales',
        href: '#personal',
      },
      {
        label: 'Calculadora',
        href: '#calculator',
      },
    ],
  },
  {
    label: 'Requisitos',
    href: '#requirements',
  },
  {
    label: 'Proceso',
    href: '#process',
  },
  {
    label: 'Preguntas Frecuentes',
    href: '#faq',
  },
];

export const LOAN_APPLICATION_URL = 'https://crediar.webcindario.com/index.html';

export const CHATBOT_QUESTIONS: ChatbotQuestion[] = [
  {
    id: 1,
    question: '¿Cuáles son los requisitos para solicitar un préstamo?',
    answer: 'Para solicitar un préstamo necesitas residir en Argentina, ser mayor de 21 años, tener DNI y una cuenta bancaria válida.',
  },
  {
    id: 2,
    question: '¿Cuál es el monto máximo que puedo solicitar?',
    answer: 'Puedes solicitar hasta 2,5 millones de pesos argentinos.',
  },
  {
    id: 3,
    question: '¿Cuál es el plazo máximo para pagar el préstamo?',
    answer: 'Ofrecemos plazos de hasta 60 meses (5 años) para devolver tu préstamo.',
  },
  {
    id: 4,
    question: '¿Cómo recibo el dinero si me aprueban?',
    answer: 'El monto aprobado se deposita directamente en tu CVU/CBU una vez verificados tus datos.',
  },
  {
    id: 5,
    question: '¿Cuánto tiempo toma la aprobación?',
    answer: 'El proceso de aprobación es 100% online y puede variar, pero generalmente es rápido. Te contactaremos por email o WhatsApp una vez procesada tu solicitud.',
  },
  {
    id: 6,
    question: '¿Qué documentación necesito presentar?',
    answer: 'Necesitarás tu DNI y los datos de tu cuenta bancaria. Todo el proceso es digital, no necesitas presentar documentación física.',
  },
  {
    id: 7,
    question: '¿Puedo cancelar anticipadamente?',
    answer: 'Sí, ofrecemos la posibilidad de cancelación anticipada con condiciones favorables.',
  },
  {
    id: 8,
    question: '¿Qué tasa de interés manejan?',
    answer: 'Nuestras tasas de interés son competitivas y varían según el monto y plazo seleccionado. Puedes verificarlas en nuestra calculadora.',
  },
  {
    id: 9,
    question: '¿Necesito tener un buen historial crediticio?',
    answer: 'Evaluamos cada caso individualmente. Un buen historial crediticio mejora tus posibilidades, pero no es excluyente.',
  },
  {
    id: 10,
    question: '¿Cómo puedo contactarlos para más información?',
    answer: 'Puedes contactarnos a través de nuestro chat en línea, por WhatsApp o email que encontrarás en la sección de contacto.',
  },
];