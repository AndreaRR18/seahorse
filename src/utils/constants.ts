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
  GalleryImage,
  PrivacySection,
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
    title: "Una Seconda Casa",
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
      "Meno possibilità di contagio",
      "Più attenzione per ogni bambino e bambina"
    ],
    image: "/assets/tata_baby_hand_color.jpeg",
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
    image: "/assets/baby_outdoor.jpeg",
  },
  {
    title: "Alimentazione Sana e Casalinga",
    description:
      "Al Cavalluccio Marino, crediamo che una corretta alimentazione sia fondamentale per la crescita dei bambini. Per questo prepariamo pasti freschi e bilanciati ogni giorno, utilizzando ingredienti di stagione e ricette casalinghe, senza conservanti o cibi preconfezionati.",
    highlights: [
      "Menù personalizzato adattato alle esigenze e allergie di ogni bambino",
      "Educazione alimentare attraverso attività ludiche",
      "Preparazione di semplici ricette e degustazione di frutta e verdura",
      "Menù settimanale condiviso con le famiglie per massima trasparenza",
    ],
    image: "/assets/baby_activity.jpeg",
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
    image: "/assets/family_daycare.jpg",
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Valentina",
    quote: "La nostra esperienza all’asilo nido Cavalluccio Marino di Tata Serena Massarani è stata semplicemente meravigliosa e assolutamente positiva sotto ogni aspetto.  Fin dal primo momento abbiamo trovato un ambiente accogliente, sereno e pieno di attenzione verso i bambini e le loro esigenze. Tata Serena è davvero unica: una persona speciale, dolce, paziente e profondamente competente. Il suo lavoro, basato sul metodo Montessori, ha avuto un impatto straordinario sulla crescita di nostra figlia Chloe, che nonostante abbia solo due anni, ha sviluppato una sorprendente autonomia e indipendenza.  Grazie al suo approccio educativo, Chloe ha imparato a fare tante piccole cose da sola, a gestire meglio le proprie emozioni e ad affrontare le attività quotidiane con sicurezza e serenità. È evidente quanta passione, amore e professionalità Tata Serena metta ogni giorno nel suo lavoro. Riesce a creare un legame autentico con i bambini, facendoli sentire compresi, stimolati e protetti, e questo per noi genitori è stato fondamentale.  Sapere che nostra figlia era affidata a una persona così attenta e preparata ci ha sempre dato grande tranquillità. Le attività proposte sono sempre pensate con cura, rispettando i tempi di ogni bambino e favorendo la loro crescita emotiva, educativa e sociale. La comunicazione con le famiglie è costante e basata sulla fiducia, cosa che rende l’esperienza ancora più preziosa. Il Cavalluccio Marino non è solo un asilo nido, ma una vera seconda casa♥️, un luogo dove i bambini crescono felici e sicuri. Porteremo sempre nel cuore questa esperienza e CONSIGLIAMO Tata Serena con tutto il cuore a qualsiasi genitore cerchi un ambiente davvero speciale per il proprio bambino."
  },
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

export const GALLERY_IMAGES: readonly GalleryImage[] = [
  {
    src: "/assets/babies_books.jpeg",
    alt: "Bambini che leggono libri durante l'attività educativa",
  },
  {
    src: "/assets/babies_feet.jpeg",
    alt: "Piedini dei bambini durante il gioco",
  },
  {
    src: "/assets/babies_xylo.jpeg",
    alt: "Bambini che giocano con lo xilofono durante attività musicale",
  },
  {
    src: "/assets/baby_activity.jpeg",
    alt: "Bambino impegnato in attività educativa",
  },
  {
    src: "/assets/baby_montessory.jpeg",
    alt: "Attività Montessori con materiali didattici",
  },
  {
    src: "/assets/baby_outdoor.jpeg",
    alt: "Bambini durante attività all'aperto",
  },
  {
    src: "/assets/baby_paint.jpeg",
    alt: "Bambino che dipinge durante attività artistica",
  },
  {
    src: "/assets/tata_baby_hand_color.jpeg",
    alt: "Mani colorate durante attività creative",
  },
] as const;

export const PRIVACY_LAST_UPDATED = "16 novembre 2026";

const PRIVACY_ADDRESS = `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.zip} ${CONTACT_INFO.address.city} (${CONTACT_INFO.address.province}), ${CONTACT_INFO.address.country}`;

export const PRIVACY_INTRO = `Questa informativa descrive come ${SITE_INFO.name} tratta i dati personali delle persone che visitano il sito e che ci contattano, ai sensi dell'articolo 13 del Regolamento (UE) 2016/679 (GDPR).`;

export const PRIVACY_POLICY: readonly PrivacySection[] = [
  {
    title: "Titolare del trattamento",
    paragraphs: [
      `Il titolare del trattamento è Serena Massarani, ${PRIVACY_ADDRESS}.`,
      `Per qualsiasi richiesta relativa ai tuoi dati personali o a questa informativa puoi scrivere a ${CONTACT_INFO.email} oppure telefonare al ${CONTACT_INFO.phoneDisplay}.`,
    ],
  },
  {
    title: "Quali dati trattiamo",
    paragraphs: [
      "Dati di navigazione: quando visiti il sito, il servizio che lo ospita registra automaticamente l'indirizzo IP del tuo dispositivo, insieme a data, ora e pagina richiesta. Non usiamo questi dati per identificarti.",
      "Dati che ci invii: quando ci contatti tramite il modulo, WhatsApp, telefono o email, trattiamo i dati che scegli di condividere, cioè il tuo nome, il messaggio e, se li indichi, l'indirizzo email e il numero di telefono. Se ci scrivi su WhatsApp riceviamo anche il numero e il nome del tuo profilo.",
      "Ti chiediamo di non scrivere nel messaggio informazioni sulla salute tua o di tuo figlio: per un primo contatto bastano poche indicazioni, come l'età del bambino e il periodo di inserimento che ti interessa.",
      "Il sito non installa cookie propri, non utilizza strumenti di analisi statistica e non profila i visitatori.",
    ],
  },
  {
    title: "Finalità e base giuridica",
    paragraphs: [
      "I dati che ci invii sono trattati per rispondere alla tua richiesta di informazioni e, se lo desideri, organizzare una visita. La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b, GDPR).",
      "I dati di navigazione sono trattati per garantire la sicurezza e il funzionamento del sito. La base giuridica è il legittimo interesse a mantenere il sito sicuro (art. 6, par. 1, lett. f, GDPR).",
      "La mappa di Google nella sezione «Dove Siamo» viene caricata solo dopo un tuo clic esplicito. In quel caso la base giuridica è il tuo consenso (art. 6, par. 1, lett. a, GDPR e art. 122 del Codice privacy). Puoi revocarlo in qualsiasi momento ricaricando la pagina e cancellando i cookie di Google dalle impostazioni del browser.",
    ],
  },
  {
    title: "Come viaggiano i tuoi dati",
    paragraphs: [
      "Il sito è ospitato su GitHub Pages, un servizio di GitHub, Inc. È GitHub a registrare i dati di navigazione descritti sopra.",
      "Il modulo di contatto non invia i dati a un server del sito. Compilando i campi e premendo «Invia Messaggio», il sito apre WhatsApp con un messaggio già composto: sei tu a decidere se inviarlo.",
      "Se preferisci non utilizzare WhatsApp, puoi contattarci per telefono o email usando i recapiti indicati in questa pagina.",
      "Il sito contiene un link alla nostra pagina Facebook. Il link da solo non trasmette dati a Facebook: se lo apri, lasci il sito e si applica l'informativa privacy di Meta.",
    ],
  },
  {
    title: "Destinatari",
    paragraphs: [
      "I tuoi dati sono accessibili a Serena Massarani in qualità di titolare del trattamento. Non sono ceduti né venduti a terzi.",
      "Alcuni servizi esterni trattano i dati come titolari autonomi, secondo le proprie condizioni e la propria informativa privacy: GitHub, Inc., che ospita il sito; WhatsApp Ireland Limited, se ci scrivi su WhatsApp; Google Ireland Limited, se scegli di caricare la mappa.",
      "Per la sola raccolta dei dati attraverso la mappa incorporata nel sito, Serena Massarani e Google sono contitolari del trattamento. Ogni trattamento successivo è di competenza esclusiva di Google.",
    ],
  },
  {
    title: "Trasferimento verso paesi extra UE",
    paragraphs: [
      "GitHub, WhatsApp e Google appartengono a gruppi con sede negli Stati Uniti d'America e possono trattare i dati anche lì. GitHub, Inc., Meta Platforms, Inc. e Google LLC aderiscono all'EU-US Data Privacy Framework, riconosciuto adeguato dalla Commissione europea con la decisione del 10 luglio 2023. Per i dettagli rimandiamo alle informative privacy dei singoli servizi.",
    ],
  },
  {
    title: "Periodo di conservazione",
    paragraphs: [
      "I messaggi ricevuti sono conservati per 12 mesi dalla data dell'ultimo contatto, poi cancellati.",
      "I dati di navigazione sono conservati da GitHub per il tempo indicato nella sua informativa privacy.",
    ],
  },
  {
    title: "I tuoi diritti",
    paragraphs: [
      "Puoi chiedere in ogni momento l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento e la portabilità, e puoi opporti al trattamento basato sul legittimo interesse (artt. 15-22 GDPR).",
      "Quando il trattamento si basa sul consenso, puoi revocarlo in qualsiasi momento. La revoca non rende illecito il trattamento svolto prima.",
      `Per esercitare questi diritti scrivi a ${CONTACT_INFO.email}. Risponderemo entro un mese dalla richiesta.`,
      "Se ritieni che il trattamento violi la normativa, puoi proporre reclamo al Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Roma — www.garanteprivacy.it.",
    ],
  },
  {
    title: "Conferimento dei dati",
    paragraphs: [
      "Il conferimento dei dati è facoltativo. Per rispondere alla tua richiesta ci servono però almeno il tuo nome e il messaggio; email e telefono sono facoltativi.",
    ],
  },
  {
    title: "Iscrizione al nido",
    paragraphs: [
      "Questa informativa riguarda solo il sito e i primi contatti. Se decidi di iscrivere tuo figlio, i dati della famiglia e del bambino, compresi quelli sulla salute necessari alla sua cura, sono trattati secondo un'informativa specifica che ti viene consegnata al momento dell'iscrizione.",
    ],
  },
  {
    title: "Processi decisionali automatizzati",
    paragraphs: [
      "Non utilizziamo processi decisionali automatizzati né attività di profilazione.",
    ],
  },
  {
    title: "Modifiche a questa informativa",
    paragraphs: [
      "Se dovesse cambiare il modo in cui trattiamo i dati, aggiorneremo questa pagina e la data di ultimo aggiornamento indicata in alto.",
    ],
  },
] as const;
