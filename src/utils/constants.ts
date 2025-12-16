import type {
  ContactInfo,
  Schedule,
  SocialLinks,
  SiteInfo,
  NavItem,
  Value,
  Service,
  Testimonial,
} from '../types';

export const CONTACT_INFO: ContactInfo = {
  phone: "+39 345 4131977",
  phoneDisplay: "+39 345 4131977",
  email: "sere.massarani@gmail.com",
  whatsapp: "https://wa.me/393454131977",
  address: {
    street: "Viale Calabria, 2B",
    city: "Lodi",
    province: "LO",
    zip: "26900",
    country: "Italia",
  },
};

export const SCHEDULE: Schedule = {
  days: "Lunedì - Venerdì",
  hours: "8:00 - 17:30",
  note: "Orari personalizzabili per venire incontro alle esigenze di mamma e papà",
  closures: "Chiuso nei giorni festivi e nel mese di agosto",
};

export const SOCIAL_LINKS: SocialLinks = {
  whatsapp: "https://wa.me/393454131977",
  facebook: "https://www.facebook.com/nidocavallucciomarino/",
  instagram: "", // Add if available
};

export const SITE_INFO: SiteInfo = {
  name: "Cavalluccio Marino di Serena",
  tagline: "Un luogo sicuro, flessibile e pieno d'amore, per crescere sereni e felici",
  description:
    "Asilo nido familiare a Lodi con cura personalizzata, attività educative e orari flessibili.",
  year: new Date().getFullYear(),
};

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "Chi Siamo" },
  { id: "services", label: "Servizi" },
  { id: "schedule", label: "Orari" },
  { id: "contact", label: "Contatti" },
] as const;

export const VALUES: readonly Value[] = [
  {
    title: "Solo 5 Bambini",
    description:
      "Un massimo di 5 bambini per garantire a ognuno l'attenzione costante che merita.",
  },
  {
    title: "Flessibilità",
    description:
      "Orari personalizzabili pensati per le esigenze delle famiglie moderne.",
  },
  {
    title: "Oltre 15 Anni di Esperienza",
    description:
      "Tata Serena porta la sua lunga esperienza nell'accudimento dei bambini.",
  },
  {
    title: "Un Secondo Casa",
    description:
      "Un ambiente intimo e familiare, lontano dallo stress dei grandi asili.",
  },
] as const;

export const SERVICES: readonly Service[] = [
  {
    title: "Cura e Attenzione",
    description:
      "Un massimo di 5 bambini alla volta, per garantire attenzione costante a ogni piccolo.",
    highlights: [
      "Cura personalizzata per ogni bambino",
      "Diario dei ricordi settimanale per i genitori",
      "Comunicazione continua su progressi e momenti speciali",
    ],
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&q=80&fit=crop",
  },
  {
    title: "Gioco e Apprendimento",
    description:
      "Attività stimolanti in un ambiente sicuro e colorato, per crescere divertendosi.",
    highlights: [
      "Attività artistiche e creative",
      "Giochi sensoriali e motori",
      "Lettura e musica ogni giorno",
    ],
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&h=600&q=80&fit=crop",
  },
  {
    title: "Orari Pensati per Voi",
    description:
      "Dal lunedì al venerdì, dalle 8:00 alle 17:30, con orari personalizzabili per le tue necessità.",
    highlights: [
      "Orari flessibili per famiglie moderne",
      "Ingressi e uscite personalizzate",
      "Servizio estivo disponibile",
    ],
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&h=600&q=80&fit=crop",
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote: "Mio figlio ha trovato al Cavalluccio Marino un secondo casa. Tata Serena è attenta, paziente e sempre disponibile. Lo consiglio a tutti i genitori!",
    name: "Mamma di Luca",
    role: "2 anni",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Finalmente un nido dove non sei un numero! Tata Serena conosce ogni bambino e segue i suoi progressi con amore. È come avere una nonna premurosa.",
    name: "Papà di Emma",
    role: "18 mesi",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "La flessibilità degli orari ci ha salvato! Tata Serena capisce le esigenze delle famiglie moderne. Mia figlia è felice e serena ogni giorno.",
    name: "Mamma di Giulia",
    role: "3 anni",
    image: "https://i.pravatar.cc/150?img=9"
  }
] as const;
