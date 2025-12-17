import type {
  ContactInfo,
  Schedule,
  SocialLinks,
  SiteInfo,
  NavItem,
  Value,
  Service,
  Testimonial,
  TrainingArea,
} from "../types";

export const CONTACT_INFO: ContactInfo = {
  phone: "+39 345 4131977",
  phoneDisplay: "+39 345 4131977",
  email: "sere.massarani@gmail.com",
  whatsapp: "https://wa.me/393454131977",
  facebook: "https://www.facebook.com/nidocavallucciomarino/?locale=it_IT",
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
  tagline:
    "Un luogo sicuro, flessibile e pieno d'amore, per crescere sereni e felici",
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
    title: "Aperta dal 2012",
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
    title: "Cura e Attenzione Personalizzata",
    description:
      "Un massimo di 5 bambini alla volta, per garantire attenzione costante a ogni piccolo. Ogni bambino è seguito individualmente con un diario dei ricordi settimanale per i genitori.",
    highlights: [
      "Cura personalizzata per ogni bambino",
      "Diario dei ricordi settimanale per i genitori",
      "Comunicazione continua su progressi e momenti speciali",
      "Ambiente sicuro e accogliente",
    ],
    image: "/seahorse/assets/tata_baby_hand_color.jpeg",
  },
  {
    title: "Attività Educative e Creative",
    description:
      "Attività stimolanti in un ambiente sicuro e colorato, per crescere divertendosi. Approccio Montessori-inspired per lo sviluppo cognitivo e motorio.",
    highlights: [
      "Attività artistiche e creative",
      "Giochi sensoriali e motori",
      "Lettura e musica ogni giorno",
      "Attività all'aperto e gioco libero",
    ],
    image: "/seahorse/assets/baby_montessory.jpeg",
  },
  {
    title: "Orari Flessibili per Famiglie Moderne",
    description:
      "Dal lunedì al venerdì, dalle 8:00 alle 17:30, con orari personalizzabili per le tue necessità. Inserimento graduale per i piccoli e servizio estivo disponibile.",
    highlights: [
      "Orari flessibili per famiglie moderne",
      "Ingressi e uscite personalizzate",
      "Servizio estivo disponibile",
      "Inserimento graduale per i bambini",
    ],
    image: "/seahorse/assets/family_daycare.jpg",
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Marco",
    quote: "Abbiamo portato la nostra piccola per pochi mesi e ci siamo trovati bene; tata Serena è stata molto dolce e nostra figlia le si è affezionata molto! Sempre pronta, poi, ad aggiornarci quotidianamente (mandandoci anche foto/ video 'in diretta') e a dare consigli a genitori come noi alle prime armi!!",
  },
  {
    name: "Rozy",
    quote: "Consiglio questo posto per chi vuole lasciare il proprio figlio al sicuro, in un ambiente sereno. Mio figlio si è sentito a casa, in famiglia. Serena molto dolce, disponibile e attenta (mi mandava tutti giorni più volte foto e video di mio figlio). Grazie ancora!",
  },
  {
    name: "Alessandra",
    quote: "Lo consiglio perché al Nido di Tata Serena ognuno si sente come a casa. La tata è molto attenta, dolce, accogliente e allo stesso tempo ferma e decisa. È autorevole e materna al punto giusto. C'è sempre spazio per un confronto. A nostro figlio è piaciuto molto trascorrere qui le sue giornate e io sono sempre stata serena nell'affidarlo alla Tata. Decisamente 5 stelle💫",
  },
  {
    name: "Stefania",
    quote: "Assolutamente 'straconsigliato'. Noi non abbiamo avuto l'opportunità di finire l'anno per causa Covid-19, però ciò non toglie che questi pochi mesi passati con tata Serena hanno aiutato tantissimo sia Brian nella sua crescita che me mamma. Ambiente pulito e confortevole. Cibo 🔝🔝🔝🔝 perché Brian a casa non mangia niente e invece al nido sì. Accoglienza perfetta (compreso di caffè la mattina 😜). Disponibilità massima nei confronti dei genitori. Mi dispiace non poterci tornare😞, ma sicuramente con l'arrivo di un'altro/a figlio/a la tata tornerà a far parte dei nostri giorni ❤️",
  },
  {
    name: "Melissa",
    quote: "Dolcissima tata, con tanta creatività e amorevolezza! Sempre molto comprensiva e attenta a tutti.... Mio figlio qui dentro si è trovato molto bene. Ciao tata sere❤️❤️",
  },
  {
    name: "Mihaela",
    quote: "5 stelle. Nido famiglia molto accogliente, Tata sempre disponibile è molto attenta alle esigenze di ciascun bimbo e delle famiglie. Un grazie enorme a Tata Serena.😘❤",
  },
  {
    name: "Laurentiu",
    quote: "Nido famiglia belisimo tranquilo, tata sempre disponibile e molto atento ai picoli. Raccomando a tutti genitori.",
  },
  {
    name: "Mara",
    quote: "Nido famiglia favoloso!!! Una tata esemplare sempre disponibile e attenta ai bisogni dei piccoli!!! Supersoddisfatta dell'esperienza della mia bambina che a settembre andrà alla materna.... Consigliatissimo.",
  },
  {
    name: "Eudochia",
    quote: "Nido famiglia, un ambiente molto tranquillo e sereno, consigliato a tutte le famiglie.",
  },
  {
    name: "Lilibet",
    quote: "Nido famiglia particolarmente accogliente, spazi idonei e pensati per i più piccoli. Educatrice molto dolce e amorevole a disposizione dei genitori e delle loro esigenze. Lo consiglio a tutti!!",
  },
] as const;

export const TRAINING_AREAS: readonly TrainingArea[] = [
  {
    area: "Psicologica e Relazionale",
    courses: [
      {
        title: "Il corpo in educazione e nella psicoterapia",
        description:
          "Formazione specialistica sulla centralità del corpo nei processi educativi e terapeutici, con focus sull'approccio psicoanalitico relazionale (SIPR - Società Italiana di Psicoanalisi della Relazione, Milano)",
      },
      {
        title: "Il potere della comunicazione non verbale",
        description:
          "Approfondimento sulle dinamiche comunicative oltre le parole: linguaggio del corpo, prossemica e gestualità nella relazione educativa",
      },
      {
        title: "Psicologia perinatale",
        description:
          "Introduzione ai processi psicologici che accompagnano gravidanza, parto e primi mesi di vita, con attenzione al benessere della diade madre-bambino",
      },
      {
        title: "Il distacco dalla mamma e il legame di attaccamento",
        description:
          "Studio delle fasi di separazione e delle dinamiche di attaccamento secondo le principali teorie evolutive, con strategie di accompagnamento per bambini e famiglie",
      },
    ],
  },
  {
    area: "Pedagogica e Metodologica",
    courses: [
      {
        title: "Metodo Montessori",
        description:
          "Principi e applicazioni pratiche della pedagogia montessoriana: ambiente preparato, materiali strutturati e ruolo dell'educatore come facilitatore dell'autonomia",
      },
      {
        title: "La scelta dei colori nella psicomotricità",
        description:
          "Utilizzo consapevole del colore come strumento espressivo e terapeutico nelle attività psicomotorie infantili",
      },
      {
        title: 'La gestione del sonno nei bambini: "Per dormire sonni tranquilli"',
        description:
          "Strategie evidence-based per favorire un corretto ritmo sonno-veglia e affrontare le principali difficoltà del sonno in età evolutiva",
      },
    ],
  },
  {
    area: "Tecnico-Professionale",
    courses: [
      {
        title: "Animatore per ludoteca",
        description:
          "Corso di qualifica professionale per la conduzione di attività ludico-ricreative in contesti educativi (DDT - Divulgazione Dinamica)",
      },
      {
        title: "Primo soccorso pediatrico",
        description:
          "Tecniche di intervento in situazioni di emergenza con lattanti e bambini: manovre di disostruzione, rianimazione cardiopolmonare e gestione delle urgenze più comuni",
      },
      {
        title: "HACCP - Sicurezza alimentare",
        description:
          "Normativa e procedure per la corretta manipolazione degli alimenti in ambito educativo (docente: Grazia Gabbini, Tecnologo Alimentare)",
      },
    ],
  },
  {
    area: "Progettuale",
    courses: [
      {
        title: "Introduzione alla progettazione sociale",
        description:
          "Metodologie per l'ideazione, la scrittura e la valutazione di progetti in ambito educativo e socio-assistenziale",
      },
    ],
  },
] as const;
