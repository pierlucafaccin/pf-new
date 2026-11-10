/*
 * Portfolio content supplied by Pierluca Faccin, November 2026.
 * Professional/personal sources: the four supplied project descriptions.
 * Academic sources: previous portfolio and the linked repositories' README files.
 * Benefits are qualitative; no unverified performance figures are presented.
 */
window.FACCIN_PROJECTS = [
  {
    id: "nexusai",
    title: "NexusAI",
    shortTitle: "NexusAI",
    category: "professional",
    field: "AI generativa · Dati aziendali",
    summary: "Un assistente che collega CRM, documenti e ticket per aiutare i commerciali a preparare visite, rinnovi e offerte.",
    problem: "Le informazioni utili per seguire un cliente sono distribuite tra CRM, documenti, listini e assistenza. Preparare un incontro o un preventivo richiede ricerche in più strumenti, incroci manuali e trascrizioni.",
    solution: "Ho sviluppato una piattaforma conversazionale che interpreta le domande, consulta le fonti aziendali pertinenti e presenta risposte con riferimenti ai dati, tabelle esportabili e documenti di lavoro. Un orchestratore mantiene il contesto e coordina servizi dedicati al CRM, alla ricerca documentale e ai flussi commerciali. L’interfaccia accompagna anche attività strutturate, come la preparazione di una visita e la compilazione guidata di una scheda preventivo.",
    role: "Sviluppo e integrazione della piattaforma: applicazione web, servizi backend, strumenti per gli agenti, ricerca documentale e flussi di lavoro commerciali. Attenzione a test, prestazioni, controllo degli accessi e gestione del contesto.",
    outcomes: [
      "Informazioni prima separate consultabili da un’unica interfaccia.",
      "Meno passaggi manuali nella preparazione di visite, rinnovi e offerte.",
      "Fonti e dati verificabili accanto alle risposte, alle tabelle e ai documenti.",
      "Architettura estendibile con nuovi servizi e nuove fonti aziendali."
    ],
    technologies: ["Python", "FastAPI", "Azure OpenAI", "RAG", "MySQL", "Qdrant", "Next.js", "React", "TypeScript", "Microsoft Graph", "Entra ID", "Langfuse"],
    details: [
      {
        title: "AI e dati verificabili",
        text: "Il modello interpreta la richiesta e prepara il testo. Prezzi, scadenze e totali vengono invece letti dalle fonti e calcolati dal software: la progettazione separa la generazione linguistica dalle operazioni che richiedono risultati deterministici."
      },
      {
        title: "Ricerca nei documenti",
        text: "Il motore RAG combina ricerca semantica e per parole chiave. Include OCR per i PDF scansionati e sincronizzazione dei documenti da SharePoint, così l’assistente può recuperare il contesto rilevante per una domanda."
      },
      {
        title: "Dal prototipo all’uso quotidiano",
        text: "Accesso con account Microsoft 365, visibilità dei clienti legata all’utente, risposte in streaming e test automatici accompagnano lo sviluppo. Le sfide centrali riguardano continuità delle conversazioni, affidabilità dei dati e manutenzione del prodotto."
      }
    ],
    links: []
  },
  {
    id: "socai",
    title: "SocAI",
    shortTitle: "SocAI",
    category: "professional",
    field: "Cybersecurity · Automazione · AI",
    summary: "Eventi di sicurezza trasformati in segnalazioni comprensibili, con pipeline automatiche e una console conversazionale.",
    problem: "Le piattaforme di protezione producono molti eventi, spesso ripetuti. Individuare quelli rilevanti e spiegarli a un cliente richiede tempo agli analisti del Security Operation Center.",
    solution: "Ho progettato pipeline che raccolgono gli eventi tramite API, li normalizzano, li filtrano e li raggruppano prima della segnalazione. Per i casi rilevanti, un modello linguistico aiuta a preparare un messaggio chiaro per i referenti. Una console web permette di esplorare lo storico e interrogare i dati in linguaggio naturale, mentre report periodici coprono aspetti come licenze, dispositivi e aggiornamenti.",
    role: "Progettazione delle pipeline e della console, sviluppo, refactoring del codice esistente con test automatici, integrazione dell’AI e messa in produzione nell’infrastruttura del Portale Servizi. Gestione dell’esercizio e della sicurezza.",
    outcomes: [
      "Eventi ripetuti riuniti in segnalazioni più utili per gli analisti.",
      "Comunicazioni più coerenti e comprensibili anche ai destinatari non tecnici.",
      "Raccolta, elaborazione e invio organizzati in processi ripetibili e monitorati.",
      "Storico consultabile attraverso cruscotti e domande in linguaggio naturale."
    ],
    technologies: ["Python", "Flask", "React", "Vite", "MySQL", "Azure OpenAI", "API REST", "systemd", "pytest"],
    details: [
      {
        title: "Dal rilevamento alla comunicazione",
        text: "Il flusso distingue raccolta, filtro e correlazione, redazione della segnalazione e invio. Più rilevamenti sullo stesso dispositivo in una breve finestra temporale possono essere ricondotti a un’unica comunicazione."
      },
      {
        title: "Operatività e qualità",
        text: "Configurazione validata all’avvio, gestione degli errori, tentativi successivi per le elaborazioni non riuscite e test automatici aiutano a rendere le pipeline più robuste. I job sono monitorati per individuare anomalie nell’esecuzione."
      },
      {
        title: "AI nella console",
        text: "L’assistente supporta la consultazione dei dati mostrati nei cruscotti. Le conversazioni possono essere salvate ed esportate; il contenuto prodotto con l’aiuto dell’intelligenza artificiale viene dichiarato come tale."
      }
    ],
    links: []
  },
  {
    id: "portale-servizi",
    title: "Portale Servizi",
    shortTitle: "Portale Servizi",
    category: "professional",
    field: "Full-stack · Identità · Servizi gestiti",
    summary: "Un solo punto di accesso per le console di sicurezza, con servizi e autorizzazioni organizzati per cliente.",
    problem: "Console separate e credenziali diverse rendono complicato accedere ai servizi e amministrare gli utenti. Manca inoltre un percorso semplice per mostrare le soluzioni a chi desidera conoscerle.",
    solution: "Ho realizzato un portale che riunisce monitoraggio delle minacce, gestione delle vulnerabilità e altri servizi di sicurezza. L’accesso Microsoft Entra ID, affiancato da un codice via email, collega le console senza richiedere un nuovo login. Un pannello centrale gestisce ruoli, organizzazioni e abilitazioni. L’area dimostrativa presenta i servizi con dati fittizi, mentre una sezione dedicata raccoglie i percorsi formativi.",
    role: "Progettazione, sviluppo full-stack, migrazione in produzione su architettura ad alta disponibilità e gestione operativa: aggiornamenti, sicurezza e monitoraggio.",
    outcomes: [
      "Accesso e gestione delle abilitazioni riuniti in un unico punto.",
      "Servizi visibili in base al ruolo e all’organizzazione dell’utente.",
      "Manutenzione organizzata su un’infrastruttura pensata per la continuità del servizio.",
      "Dimostrazioni autonome per presentare le soluzioni a potenziali clienti."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Auth.js", "Entra ID", "MySQL", "Python", "Flask", "Linux"],
    details: [
      {
        title: "Identità e autorizzazioni",
        text: "L’autenticazione usa OAuth 2.0 e OpenID Connect. Ruoli distinti, approvazione dei nuovi utenti e abilitazioni per organizzazione permettono di gestire l’accesso ai servizi in modo centralizzato."
      },
      {
        title: "Strumenti per l’esercizio",
        text: "Gli amministratori possono consultare lo stato delle attività pianificate e i log raccolti dai servizi. Le esclusioni dalle raccolte e dalle notifiche possono essere gestite con una regola comune per il cliente."
      },
      {
        title: "Continuità e sicurezza",
        text: "La piattaforma adotta ridondanza applicativa, replica del database e coordinamento dei job. Isolamento dei processi, header di sicurezza e Content Security Policy affiancano procedure ripetibili di aggiornamento e monitoraggio."
      }
    ],
    links: []
  },
  {
    id: "faccin-auto",
    title: "Faccin Auto — Automotive Web Experience",
    shortTitle: "Faccin Auto",
    category: "personal",
    field: "Web experience · Automazione",
    summary: "Un sito per una concessionaria, con catalogo veicoli, gallerie e contenuti aggiornabili attraverso dati strutturati.",
    problem: "Un’attività locale ha bisogno di presentare la propria identità e i veicoli disponibili, rendendo semplici sia la consultazione da smartphone sia gli aggiornamenti dei contenuti.",
    solution: "Ho sviluppato un sito responsive con catalogo e filtri dell’usato, gallerie, storia dell’attività e contatti. Veicoli e tappe della storia sono gestiti in JSON, separando i contenuti dall’impaginazione.",
    role: "Analisi delle esigenze, design dell’esperienza, sviluppo frontend, organizzazione dei dati e predisposizione delle automazioni di aggiornamento e pubblicazione.",
    outcomes: [
      "Presentazione coerente dell’attività e dei veicoli.",
      "Aggiornamento dei contenuti separato dal codice dell’interfaccia.",
      "Percorsi di contatto e consultazione pensati anche per smartphone."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JSON", "Python", "Google Places API", "GitHub Actions", "GitHub Pages", "Schema.org"],
    details: [
      {
        title: "Automazioni e stato del progetto",
        text: "Uno script Python e un workflow GitHub Actions predispongono l’aggiornamento delle recensioni Google, subordinato alla configurazione delle credenziali. Il progetto comprende metadati e dati strutturati per il SEO tecnico."
      }
    ],
    links: [
      { label: "Apri il sito", url: "https://pierlucafaccin.github.io/faccin-auto/" },
      { label: "Codice su GitHub", url: "https://github.com/pierlucafaccin/faccin-auto" }
    ],
    note: "Progetto in evoluzione: fotografie storiche e inventario effettivo sono in completamento."
  },
  {
    id: "digital-price-list",
    title: "Digital Price List Manager",
    shortTitle: "Gestore listini",
    category: "personal",
    field: "Web app · Processi commerciali",
    summary: "Listini, ricerca prodotti e composizione di proposte commerciali in un’applicazione utilizzabile anche da smartphone.",
    problem: "Cercare prodotti su più listini, applicare maggiorazioni e preparare un riepilogo richiede passaggi ripetitivi e calcoli manuali.",
    solution: "Ho costruito una web app con ricerca e filtri, varianti di prezzo e un carrello che calcola quantità e importi. Le selezioni possono essere copiate o condivise via email. Un’area di gestione consente aggiornamenti dei cataloghi, anche multipli, con anteprima.",
    role: "Sviluppo frontend, modellazione dei dati, logiche di calcolo, gestione dello stato e progettazione dell’esperienza su dispositivi diversi.",
    outcomes: [
      "Ricerca e composizione delle proposte nello stesso ambiente.",
      "Calcolo automatico dei totali e riepiloghi pronti da condividere.",
      "Importazione ed esportazione JSON per backup e ripristino."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JSON", "Web Storage API", "Responsive design"],
    details: [
      {
        title: "Una scelta architetturale leggera",
        text: "Ricerca, calcolo e gestione dei listini avvengono nel browser. Il Local Storage conserva dati e preferenze sul dispositivo utilizzato: questa persistenza non equivale a una sincronizzazione centralizzata fra dispositivi."
      }
    ],
    links: [
      { label: "Codice su GitHub", url: "https://github.com/pierlucafaccin/pippo-work" }
    ]
  },
  {
    id: "lisbona21k",
    title: "Lisbona 21K",
    shortTitle: "Lisbona 21K",
    category: "personal",
    field: "Sport · Pianificazione",
    summary: "La mia passione per la corsa trasformata in un’app: piano di allenamento, diario e ricalcolo delle andature.",
    problem: "Seguire una preparazione richiede di tenere insieme obiettivi, allenamenti svolti e ritmi da aggiornare quando la condizione cambia.",
    solution: "Ho realizzato un’app personale per la preparazione di una mezza maratona. Riunisce un piano di allenamento e un diario delle corse, con andature che vengono ricalibrate a partire dai test.",
    role: "Ideazione e sviluppo dello strumento a partire da un’esigenza personale di organizzazione degli allenamenti.",
    outcomes: [
      "Piano e diario delle corse consultabili nello stesso strumento.",
      "Andature aggiornabili in base ai risultati dei test."
    ],
    technologies: ["Applicazione web", "Calcolo delle andature", "Formule di Daniels e Gilbert"],
    details: [
      {
        title: "Dalla routine al software",
        text: "Il piano distingue fasi di base, qualità, preparazione specifica e riduzione del carico. È un esempio di come un’attività quotidiana possa diventare l’occasione per progettare uno strumento su misura."
      }
    ],
    links: [
      { label: "Apri l’app", url: "https://pierlucafaccin.github.io/LISBONA21K/" }
    ]
  },
  {
    id: "pulsar-industry",
    title: "Pulsar Industry",
    shortTitle: "Pulsar Industry",
    category: "academic",
    field: "Machine learning · Industria",
    summary: "Machine learning supervisionato applicato a una linea produttiva, nel progetto vincitore dell’Industrial AI Challenge 2022.",
    problem: "In una linea di affettatura, limitare gli scarti e migliorare la produttività è un problema concreto che può essere affrontato anche attraverso i dati.",
    solution: "Il team ha sviluppato un modello di machine learning supervisionato dedicato a questo contesto produttivo, collegando un problema industriale alle tecniche studiate nel percorso universitario.",
    role: "Contributo al progetto di gruppo e allo sviluppo del modello nell’Industrial AI Challenge, con Università di Trento e Trentino Innovation Hub.",
    outcomes: [
      "Progetto vincitore dell’Industrial AI Challenge 2022.",
      "Applicazione delle competenze di machine learning a un’esigenza industriale."
    ],
    technologies: ["Machine learning supervisionato", "Modellazione predittiva"],
    details: [
      {
        title: "Il valore dell’esperienza",
        text: "Lavorare su un caso produttivo ha richiesto di collegare l’obiettivo del modello a un risultato utile per l’azienda: la riduzione degli scarti e il miglioramento del processo."
      }
    ],
    links: []
  },
  {
    id: "cancelout",
    title: "CancelOut Layer",
    shortTitle: "CancelOut Layer",
    category: "academic",
    field: "Deep learning · Ricerca",
    summary: "Un’attività di ricerca con la Fondazione Bruno Kessler sulla progettazione e implementazione dello strato neurale CancelOut.",
    problem: "Nella ricerca sulle reti neurali, un’idea architetturale deve diventare un componente software utilizzabile all’interno di un modello.",
    solution: "Ho lavorato alla progettazione e all’implementazione dello strato nascosto CancelOut, approfondendo il collegamento fra struttura della rete e codice che ne realizza il funzionamento.",
    role: "Progettazione e implementazione del layer nell’ambito dell’attività di ricerca con la Fondazione Bruno Kessler.",
    outcomes: [
      "Implementazione di un componente per reti neurali.",
      "Esperienza nel passaggio da un’idea di ricerca alla sua realizzazione software."
    ],
    technologies: ["Deep learning", "Reti neurali", "Layer personalizzati"],
    details: [
      {
        title: "Dentro un modello",
        text: "Il progetto concentra l’attenzione sui componenti interni di una rete neurale e sulla loro implementazione, completando le esperienze dedicate all’utilizzo dei modelli in applicazioni più ampie."
      }
    ],
    links: []
  },
  {
    id: "nlu-slots-intents",
    title: "NLU Slots & Intents",
    shortTitle: "NLU Slots & Intents",
    category: "academic",
    field: "NLP · Comprensione del linguaggio",
    summary: "Una rete neurale multitask per capire lo scopo di una frase e riconoscere le informazioni utili che contiene.",
    problem: "Un sistema conversazionale deve riconoscere sia l’intenzione dell’utente sia i dati necessari per soddisfarla. Sono due compiti diversi, ma collegati.",
    solution: "Il progetto implementa una rete che affronta insieme intent classification e slot filling. Il primo compito assegna uno scopo all’intera frase; il secondo associa etichette alle sue parti per estrarre informazioni strutturate.",
    role: "Implementazione del modello neurale nel contesto del progetto universitario di Natural Language Understanding.",
    outcomes: [
      "Due compiti di comprensione del linguaggio affrontati con apprendimento multitask.",
      "Collegamento fra testo naturale e informazioni utilizzabili da un’applicazione."
    ],
    technologies: ["NLP", "Reti neurali", "Multitask learning", "Intent classification", "Slot filling"],
    details: [
      {
        title: "Valutare con pochi dati",
        text: "Il dataset è di dimensioni contenute. L’impostazione del progetto richiede addestramenti e valutazioni ripetuti, con media e deviazione standard, per considerare la variabilità dei risultati."
      }
    ],
    links: [
      { label: "Codice su GitHub", url: "https://github.com/pierlucafaccin/NLU-Slots-Intents" }
    ]
  },
  {
    id: "domain-adaptation",
    title: "Unsupervised Domain Adaptation",
    shortTitle: "Domain Adaptation",
    category: "academic",
    field: "Deep learning · Computer vision",
    summary: "Confronto fra tecniche che aiutano un modello a trasferire ciò che ha imparato verso dati di un contesto diverso.",
    problem: "Un modello addestrato su un insieme di dati può comportarsi diversamente quando incontra immagini provenienti da un altro dominio. La domain adaptation studia questo trasferimento.",
    solution: "Nel progetto del corso di Deep Learning ho confrontato, insieme a un collega, Deep CORAL, DANN e DSN rispetto a una baseline ResNet50. I tre metodi rappresentano approcci basati su discrepanza, apprendimento avversario e ricostruzione.",
    role: "Sviluppo del progetto di gruppo e del notebook di confronto per il corso dell’Università di Trento.",
    outcomes: [
      "Confronto strutturato di tre famiglie di tecniche di adattamento.",
      "Analisi del trasferimento fra domini rispetto a una baseline comune."
    ],
    technologies: ["Deep CORAL", "DANN", "DSN", "ResNet50", "Jupyter Notebook"],
    details: [
      {
        title: "Una baseline condivisa",
        text: "Il confronto con ResNet50 fornisce un punto di riferimento comune per studiare approcci diversi allo stesso problema. Il progetto è parte del corso di Deep Learning 2021–2022."
      }
    ],
    links: [
      { label: "Codice su GitHub", url: "https://github.com/pierlucafaccin/Unsupervised-Domain-Adaptation" }
    ]
  },
  {
    id: "automated-planning",
    title: "Automated Planning",
    shortTitle: "Automated Planning",
    category: "academic",
    field: "AI simbolica · Pianificazione",
    summary: "Dalla descrizione formale di un problema alla sequenza di azioni necessarie per raggiungere un obiettivo.",
    problem: "Per pianificare automaticamente, un sistema deve conoscere lo stato iniziale, le azioni disponibili, i vincoli e il risultato da raggiungere.",
    solution: "Il progetto descrive domini e problemi in PDDL e utilizza planner per generare piani. Include varianti delle formulazioni e un caso che collega le azioni pianificate a implementazioni eseguibili in C++.",
    role: "Sviluppo del progetto di gruppo del corso Automated Planning: Theory and Practice, durante la magistrale in Artificial Intelligence Systems.",
    outcomes: [
      "Problemi tradotti in modelli formali elaborabili da un planner.",
      "Collegamento fra il piano simbolico e l’esecuzione delle azioni."
    ],
    technologies: ["PDDL", "C++", "Python", "CMake", "Pianificazione automatica"],
    details: [
      {
        title: "Teoria e pratica",
        text: "Il repository raccoglie definizioni dei domini, istanze dei problemi e piani generati. L’ultima parte comprende un launcher Python e componenti C++ per eseguire le azioni descritte dal modello."
      }
    ],
    links: [
      { label: "Codice su GitHub", url: "https://github.com/pierlucafaccin/automated-planning-project" }
    ]
  },
  {
    id: "thinning",
    title: "Thinning — scheletrizzazione delle immagini",
    shortTitle: "Thinning",
    category: "academic",
    field: "Computer vision · Didattica",
    summary: "Una lezione con slide e notebook per spiegare come ridurre una forma alla sua struttura essenziale.",
    problem: "Per analizzare alcune forme in un’immagine è utile ricavarne uno scheletro sottile, mantenendo le relazioni principali fra le sue parti.",
    solution: "Ho preparato una lezione per il corso Signal, Image and Video, accompagnata da un notebook con tre implementazioni del thinning: tramite OpenCV, tramite scikit-image e con l’algoritmo Zhang-Suen.",
    role: "Preparazione del materiale didattico, delle slide e degli esempi eseguibili per mostrare il funzionamento degli algoritmi.",
    outcomes: [
      "Un concetto di elaborazione delle immagini spiegato attraverso esempi visivi.",
      "Tre implementazioni raccolte in un notebook riproducibile."
    ],
    technologies: ["Python", "OpenCV", "scikit-image", "Jupyter Notebook", "Zhang-Suen"],
    details: [
      {
        title: "Spiegare attraverso il codice",
        text: "Le slide introducono il metodo e il notebook ne mostra l’applicazione a immagini di esempio. Il progetto unisce approfondimento tecnico e capacità di rendere comprensibile un argomento specialistico."
      }
    ],
    links: [
      { label: "Codice su GitHub", url: "https://github.com/pierlucafaccin/thinning-lesson" }
    ]
  }
];
