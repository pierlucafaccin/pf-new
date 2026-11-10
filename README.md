# Faccin OS

Portfolio personale di Pierluca Faccin, AI Solution Engineer, ispirato alle interfacce desktop degli anni Novanta. Versione del 10 novembre 2026.

## Aprire il sito

Aprire `index.html` nel browser, mantenendo la cartella `assets` accanto al file. Non servono installazione di pacchetti, compilazione, chiavi API o un backend.

Per una verifica tramite server locale, dalla cartella del progetto:

```bash
python -m http.server 8000
```

Aprire quindi `http://localhost:8000/`.

## Pubblicazione nella repository pf-new

Il progetto è predisposto per un hosting statico, compreso GitHub Pages. Copiare nella directory pubblicata `index.html` e la cartella `assets`, mantenendo i percorsi relativi. La consegna non modifica le impostazioni di hosting, il dominio o la configurazione della repository remota.

I collegamenti interni utilizzano frammenti URL e funzionano anche senza riscritture lato server. Esempi: `#progetto/nexusai`, `#progetti/universita`, `#formazione`.

## Organizzazione dei contenuti

- **Home:** presentazione, lavoro attuale, formazione e certificazioni.
- **Progetti professionali:** NexusAI, SocAI, Portale Servizi.
- **Progetti personali:** Faccin Auto, Digital Price List Manager, Lisbona 21K.
- **Università e ricerca:** Pulsar Industry, CancelOut Layer, NLU Slots & Intents, Unsupervised Domain Adaptation, Automated Planning, Thinning.
- **Formazione e relazione con i clienti:** attività svolte, ambiti tecnici trattati e competenze comunicative, relazionali e didattiche messe in pratica.
- **Certificazioni:** Azure AI Engineer Associate (AI-102), Azure AI Fundamentals (AI-900).
- **Percorso:** Euro Informatica, IRIMÌ, università, Industrial AI Challenge e progetto personale legato alla corsa.
- **Contatti:** email, LinkedIn e GitHub.

## Aggiornare il sito

| File | Contenuto |
| --- | --- |
| `assets/projects.js` | Tutte le schede dei progetti, categorie, approfondimenti, tecnologie e link. |
| `assets/training.js` | Profilo di formatore: attività, temi, strumenti e competenze esercitate. |
| `assets/app.js` | Home, certificazioni, percorso, contatti e comportamento dell’interfaccia. |
| `assets/os.css` | Aspetto desktop, finestre, contenuti e adattamento mobile. |
| `assets/icons.js` | Icone pixel originali in SVG. |
| `index.html` | Metadati e versione testuale accessibile senza JavaScript. |

Quando si modifica un’informazione principale, aggiornare anche il corrispondente testo in `index.html`, usato quando JavaScript non è disponibile.

## Fonti e stato editoriale

Le schede professionali e quelle di Faccin Auto e Digital Price List Manager sono state ricavate dai quattro Markdown forniti dall’autore. Università, percorso e certificazioni riprendono il portfolio precedente; quattro progetti universitari sono stati approfonditi con i README delle rispettive repository pubbliche. Non sono stati aggiunti nomi di clienti, dati riservati, metriche prestazionali o risultati commerciali non documentati.

Il Digital Price List Manager è organizzato tra i progetti personali in base al contesto della richiesta; se appartiene invece al lavoro in Euro Informatica, è sufficiente cambiare `category` da `personal` a `professional` e adeguare l’attribuzione della scheda.

### Formazione: attività e competenze personali

La sezione racconta il contributo di Pierluca alla formazione e alla relazione con i clienti di Euro Informatica. La struttura descrive ciò che fa nelle sessioni, gli ambiti tecnici affrontati e le competenze che mette in pratica: public speaking, chiarezza espositiva, ascolto, relazione con il cliente, facilitazione e adattamento della comunicazione.

Le quattro brochure fornite direttamente in PDF sono state lette, incluse le tabelle incorporate come immagini. Sono utilizzate come fonti degli ambiti tecnici: AI generativa e prompt engineering, Microsoft 365 Copilot, progettazione di agenti con Copilot Studio, governance e protezione dei dati, consapevolezza informatica. I documenti non sono inclusi nel sito come catalogo, schede commerciali o collegamenti di acquisto.

La descrizione delle competenze comunicative e relazionali segue la richiesta dell’autore e le attività formative documentate. Le competenze sono presentate come pratica professionale continua, senza punteggi, certificazioni aggiuntive o miglioramenti misurati non documentati. Le brochure AI citano due formatori: la presentazione usa il contributo alla formazione e non attribuisce l’intera erogazione a una sola persona.

La fonte dei contenuti è ora `window.FACCIN_TRAINING_PROFILE` in `assets/training.js`. I precedenti collegamenti alle singole schede formative aprono la sezione generale aggiornata.

### Certificazioni

AI-102 e AI-900 erano già dichiarate nel sito originale. Non sono state aggiunte date, scadenze, identificativi o collegamenti a badge personali non forniti. Le icone sono illustrazioni originali dell’interfaccia, non badge ufficiali Microsoft.

## Comportamento

- Apertura con un clic; finestre trascinabili su desktop, minimizzazione, ripristino e ingrandimento.
- Menu Start, barra delle applicazioni e collegamenti diretti alle schede.
- Ricerca per titolo, descrizione e tecnologia nella categoria selezionata.
- Su telefono e tablet stretti, una finestra attiva alla volta, con contenuto in flusso.
- Navigazione da tastiera, focus visibile, movimento ridotto secondo le preferenze del dispositivo.
- Tre sfondi, salvati esclusivamente nel browser tramite Local Storage.
- Orologio nel fuso Europe/Rome.
- Nessun tracciamento, chatbot simulato o invio automatico di dati.
- Collegamenti email tramite il programma di posta dell’utente; copia dell’indirizzo con fallback testuale.

L’eventuale AI Lab proposto nella fase iniziale non è incluso: questa versione concentra la navigazione sui contenuti richiesti, cioè progetti, formazione e certificazioni.
