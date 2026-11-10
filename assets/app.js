/* Faccin OS: a small, dependency-free desktop for a real portfolio. */
(() => {
  'use strict';
  const projects = window.FACCIN_PROJECTS || [];
  const trainingProfile = window.FACCIN_TRAINING_PROFILE || {intro:'',activities:[],topics:[],skills:[],connection:''};
  const os = document.getElementById('os');
  const workspace = document.getElementById('main-content');
  const tasks = document.getElementById('task-items');
  const startMenu = document.getElementById('start-menu');
  const startButton = document.getElementById('start-button');
  const desktopEmpty = document.getElementById('desktop-empty');
  const windows = new Map();
  let activeId = null;
  let zIndex = 10;
  let toastTimer;
  let drag = null;
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = (name, size = 24) => window.FaccinIcons ? window.FaccinIcons.render(name, size) : '<span aria-hidden="true">PF</span>';
  const categories = {
    professional: { label: 'Professionali', subtitle: 'Progetti in Euro Informatica', icon: 'work', route: 'professionali', intro: 'Soluzioni nate da esigenze operative: dati aziendali, sicurezza gestita e accesso ai servizi.' },
    personal: { label: 'Personali', subtitle: 'Idee diventate applicazioni', icon: 'personal', route: 'personali', intro: 'Progetti per attività reali e passioni personali, dalla presenza online agli strumenti per il lavoro quotidiano.' },
    academic: { label: 'Università e ricerca', subtitle: 'Le basi del mio percorso', icon: 'academic', route: 'universita', intro: 'Machine learning, linguaggio, visione e pianificazione: i progetti con cui ho imparato a trasformare la teoria in codice.' }
  };
  const apps = {
    home: { title: 'Il mio profilo', windowTitle: 'Ciao, sono Pierluca — Faccin OS', icon: 'profile', route: 'home' },
    projects: { title: 'Progetti', windowTitle: 'Esplora progetti', icon: 'projects', route: 'progetti/professionali' },
    training: { title: 'Formazione', windowTitle: 'Formazione e competenze', icon: 'training', route: 'formazione' },
    certifications: { title: 'Certificazioni', windowTitle: 'Certificazioni Microsoft', icon: 'certificate', route: 'certificazioni' },
    career: { title: 'Percorso', windowTitle: 'Esperienza e studi', icon: 'academic', route: 'percorso' },
    sport: { title: 'Sport', windowTitle: 'Sport e passioni', icon: 'running', route: 'sport' },
    contact: { title: 'Contatti', windowTitle: 'Restiamo in contatto', icon: 'contact', route: 'contatti' },
    help: { title: 'Guida a Faccin OS', windowTitle: 'Informazioni su Faccin OS', icon: 'help', route: 'help' },
    settings: { title: 'Aspetto desktop', windowTitle: 'Proprietà del desktop', icon: 'settings', route: 'impostazioni' }
  };
  const routeButton = (route, text, className = 'retro-button', iconName) => `<button class="${className}" type="button" data-route="${esc(route)}">${iconName ? icon(iconName, 18) : ''}<span>${esc(text)}</span></button>`;
  const external = (url, label, className = 'retro-button') => `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}${icon('arrow',16)}</a>`;
  const tagList = values => `<div class="technology-list">${values.map(value => `<span>${esc(value)}</span>`).join('')}</div>`;
  const list = values => `<ul class="topic-list">${values.map(value => `<li>${esc(value)}</li>`).join('')}</ul>`;
  const projectIcon = project => ({nexusai:'nexus',socai:'shield','portale-servizi':'portal','faccin-auto':'car','digital-price-list':'price',lisbona21k:'running'}[project.id] || 'document');

  function homeView() {
    const featured = ['nexusai', 'socai', 'portale-servizi'].map(id => projects.find(project => project.id === id)).filter(Boolean);
    return `<div class="welcome-hero">
      <div class="welcome-copy"><p class="eyebrow">AI SOLUTION ENGINEER · EURO INFORMATICA</p>
        <h1 class="hero-heading">Ciao, sono<br><span>Pierluca.</span></h1>
        <p class="hero-copy">Trasformo esigenze reali in <strong>soluzioni AI, software e automazioni.</strong> E aiuto le persone a usarle, con corsi e workshop.</p>
        <div class="hero-actions">${routeButton('progetti/professionali', 'Esplora il mio lavoro', 'primary-button', 'projects')}${routeButton('formazione', 'Formazione ai clienti', 'retro-button', 'training')}</div>
      </div>
      <aside class="profile-stamp"><span class="stamp-label">PERSONAL FILE</span><div class="stamp-portrait"><img src="assets/pierluca-win95.png" alt="Ritratto di Pierluca Faccin in stile bitmap anni Novanta" width="1024" height="1024" decoding="async"></div><strong>Pierluca Faccin</strong><span class="stamp-role">AI Solution Engineer</span><span class="stamp-location">Valdagno, Italia</span><div class="stamp-footer">SOFTWARE · AI · PERSONE</div></aside>
    </div>
    <div class="home-columns">
      <section class="home-section"><div class="section-heading"><h2>Il lavoro, in pratica.</h2><span>EURO INFORMATICA</span></div>
        <div class="featured-projects">${featured.map((project, index) => `<button type="button" class="featured-project" data-route="progetto/${esc(project.id)}"><span class="project-code">0${index + 1}</span>${icon(projectIcon(project), 32)}<span class="project-copy"><strong>${esc(project.shortTitle || project.title)}</strong><span>${esc({nexusai:'AI conversazionale per dati e documenti',socai:'Automazione e intelligenza artificiale per il SOC','portale-servizi':'Un unico accesso alla sicurezza gestita'}[project.id])}</span></span><span class="arrow">${icon('arrow',16)}</span></button>`).join('')}</div>
      </section>
      <section class="training-teaser"><div class="section-heading"><h2>Dalla pratica, all’aula.</h2>${icon('training', 28)}</div><p>Spiego temi complessi, guido attività pratiche e ascolto le esigenze dei clienti. Un lavoro che unisce tecnologia, comunicazione e relazione.</p><div class="teaser-topics"><span>Public speaking</span><span>Chiarezza</span><span>Ascolto</span></div>${routeButton('formazione', 'Il mio ruolo nella formazione', 'text-button', 'arrow')}</section>
    </div>
    <button class="certificate-strip" type="button" data-route="certificazioni">${icon('certificate', 28)}<span><strong>Certificazioni Microsoft</strong><span>AI-102 · Azure AI Engineer Associate &nbsp; / &nbsp; AI-900 · Azure AI Fundamentals</span></span>${icon('arrow',16)}</button>
    <div class="intro-note"><span>Esplora anche</span>${routeButton('progetti/personali', 'Progetti personali', 'text-button')}${routeButton('progetti/universita', 'Università e ricerca', 'text-button')}${routeButton('sport', 'Sport e passioni', 'text-button')}${routeButton('contatti', 'Contattami', 'text-button')}</div>`;
  }

  function projectsView(category = 'professional') {
    const current = categories[category];
    return `<div class="explorer-layout"><aside class="explorer-sidebar"><div class="explorer-root">${icon('projects', 24)}<strong>Il mio archivio</strong></div>
      ${Object.entries(categories).map(([key, value]) => `<button class="folder-button" type="button" data-route="progetti/${value.route}" aria-pressed="${key === category}">${icon(value.icon, 24)}<span>${value.label}</span><small>${projects.filter(project => project.category === key).length}</small></button>`).join('')}
      <div class="explorer-sidebar-note">Ogni progetto racconta un problema, una soluzione e il mio contributo.</div>
      </aside><div class="explorer-main"><header class="content-header"><p class="eyebrow">${esc(current.subtitle)}</p><h1>${esc(current.label)}</h1><p>${esc(current.intro)}</p></header>
      <div class="explorer-toolbar"><label class="search-field">${icon('search', 18)}<span class="visually-hidden">Cerca nei progetti ${esc(current.label.toLowerCase())}</span><input type="search" data-project-search data-category="${category}" placeholder="Cerca un progetto o una tecnologia…" autocomplete="off"></label><span class="explorer-count" data-project-count>${projects.filter(project => project.category === category).length} progetti</span></div>
      <div class="project-grid" data-project-grid>${projectCards(category)}</div>
      </div></div>`;
  }

  function projectCards(category, query = '') {
    const normalized = query.trim().toLocaleLowerCase('it');
    const selected = projects.filter(project => project.category === category && `${project.title} ${project.summary} ${project.technologies.join(' ')}`.toLocaleLowerCase('it').includes(normalized));
    if (!selected.length) return '<div class="empty-state"><strong>Nessun progetto trovato.</strong><p>Prova con un’altra parola o cancella la ricerca.</p></div>';
    return selected.map(project => `<button type="button" class="project-card" data-route="progetto/${esc(project.id)}"><span class="project-card-top">${icon(projectIcon(project), 40)}<span class="project-tag">${esc(project.field)}</span></span><strong class="project-card-title">${esc(project.shortTitle || project.title)}</strong><span class="project-summary">${esc(project.summary)}</span><span class="project-meta">${esc(project.technologies.slice(0, 3).join(' · '))}</span><span class="project-card-link">Apri il progetto ${icon('arrow',16)}</span></button>`).join('');
  }

  function projectView(project) {
    const category = categories[project.category];
    return `<article class="project-detail"><div class="detail-topline">${routeButton(`progetti/${category.route}`, category.label, 'text-button', 'back')}<span class="pill">${esc(project.field)}</span></div><header class="detail-heading"><div class="detail-icon">${icon(projectIcon(project), 48)}</div><p class="eyebrow">${project.category === 'professional' ? 'PROGETTO PROFESSIONALE · EURO INFORMATICA' : project.category === 'academic' ? 'UNIVERSITÀ E RICERCA' : 'PROGETTO PERSONALE'}</p><h1>${esc(project.title)}</h1><p class="detail-lead">${esc(project.summary)}</p></header>
      <div class="detail-grid"><section class="content-section"><span class="section-index">01</span><h2>Il problema</h2><p>${esc(project.problem)}</p></section><section class="content-section"><span class="section-index">02</span><h2>La soluzione</h2><p>${esc(project.solution)}</p></section></div>
      <section class="role-section"><h2>Il mio contributo</h2><p>${esc(project.role)}</p></section>
      <section class="content-section"><h2>Dentro il progetto</h2><div class="project-detail-sections">${project.details.map(detail => `<div><h3>${esc(detail.title)}</h3><p>${esc(detail.text)}</p></div>`).join('')}</div></section>
      <section class="content-section"><h2>${project.category === 'academic' ? 'Cosa ho messo in pratica' : 'Il valore del progetto'}</h2>${list(project.outcomes)}</section>
      <section class="content-section"><h2>Tecnologie e strumenti</h2>${tagList(project.technologies)}</section>
      ${project.note ? `<p class="project-note">${esc(project.note)}</p>` : ''}
      <div class="detail-actions">${project.links.map(link => external(link.url, link.label)).join('')}${routeButton('contatti', 'Parliamone', 'primary-button', 'mail')}</div></article>`;
  }

  function trainingView() {
    return `<article class="training-role-page"><header class="training-intro"><p class="eyebrow">FORMAZIONE E RELAZIONE CON I CLIENTI · EURO INFORMATICA</p><h1>Spiegare, coinvolgere,<br>far sperimentare.</h1><p>${esc(trainingProfile.intro)}</p></header>
      <div class="teaching-approach"><span>${icon('work', 24)}Competenza tecnica</span><span>${icon('training', 24)}Comunicazione chiara</span><span>${icon('contact', 24)}Relazione con i clienti</span></div>
      <section class="training-role-section"><div class="section-heading"><h2>Il mio lavoro con i clienti</h2><span>NELLA PRATICA</span></div><div class="training-activities">${trainingProfile.activities.map((activity,index)=>`<section class="training-activity"><span class="activity-number">0${index+1}</span><h3>${esc(activity.title)}</h3><p>${esc(activity.text)}</p></section>`).join('')}</div></section>
      <section class="training-role-section"><div class="section-heading"><h2>Gli ambiti che tratto</h2><span>TECNOLOGIA APPLICATA</span></div><div class="training-topics">${trainingProfile.topics.map((topic,index)=>`<section class="training-topic"><div class="training-topic-title">${icon(['nexus','projects','settings','shield'][index] || 'document',26)}<h3>${esc(topic.title)}</h3></div><p>${esc(topic.text)}</p>${tagList(topic.tools)}</section>`).join('')}</div></section>
      <section class="training-role-section training-human-skills"><div class="section-heading"><h2>Le competenze che metto in pratica e alleno</h2></div><p class="training-section-intro">Ogni sessione è un’occasione per lavorare sul modo in cui ascolto, spiego e collaboro.</p><div class="training-skills">${trainingProfile.skills.map(skill=>`<section class="training-skill"><h3>${esc(skill.title)}</h3><p class="skill-practice">${esc(skill.practice)}</p><p>${esc(skill.text)}</p></section>`).join('')}</div></section>
      <section class="training-connection"><h2>Quello che porto anche nei progetti</h2><p>${esc(trainingProfile.connection)}</p><div class="detail-actions">${routeButton('progetti/professionali', 'Il mio lavoro tecnico', 'retro-button', 'projects')}${routeButton('contatti', 'Conosciamoci', 'primary-button', 'contact')}</div></section></article>`;
  }

  function certificationsView() {
    return `<div class="certifications-page"><header class="content-header"><p class="eyebrow">COMPETENZE · CERTIFICAZIONI OTTENUTE</p><h1>Studio. Costruisco.<br>Continuo a imparare.</h1><p>La formazione continua accompagna il lavoro sui progetti. Queste sono le certificazioni Microsoft che ho conseguito.</p></header><div class="cert-grid">
      <article class="cert-card"><div class="cert-badge">${icon('certificate', 64)}<span>MICROSOFT</span></div><div class="cert-code">AI-102</div><h2 class="cert-title">Azure AI Engineer<br>Associate</h2><p class="cert-description">Un percorso legato alla progettazione e all’implementazione di soluzioni di intelligenza artificiale nell’ecosistema Azure.</p><span class="certificate-label">Certificazione conseguita</span></article>
      <article class="cert-card"><div class="cert-badge">${icon('certificate', 64)}<span>MICROSOFT</span></div><div class="cert-code">AI-900</div><h2 class="cert-title">Azure AI<br>Fundamentals</h2><p class="cert-description">Le basi dell’intelligenza artificiale e dei servizi Azure: concetti, possibilità e applicazioni.</p><span class="certificate-label">Certificazione conseguita</span></article></div>
      <section class="certificate-note"><h2>Le competenze, nei progetti.</h2><p>Agenti e applicazioni con LLM, integrazione di dati, automazioni e formazione: è qui che lo studio incontra il lavoro quotidiano.</p>${routeButton('progetti/professionali', 'Guarda come le applico', 'primary-button', 'projects')}</section></div>`;
  }

  function careerView() {
    return `<div class="career-page"><header class="content-header"><p class="eyebrow">ESPERIENZA · FORMAZIONE</p><h1>Un percorso che<br>collega idee e persone.</h1><p>Dall’informatica all’intelligenza artificiale, fino alle applicazioni che entrano nel lavoro di ogni giorno.</p></header><div class="timeline">
      <section class="timeline-item"><div class="timeline-date">2025 — OGGI</div><div class="timeline-content"><span class="pill">LAVORO ATTUALE</span><h2>AI Solution Engineer</h2><h3>Euro Informatica SpA · Sandrigo</h3><p>Progetto e sviluppo soluzioni AI, applicazioni basate su LLM e automazioni per aziende e cybersecurity. Lavoro sull’integrazione dei dati, sulle applicazioni web e sui servizi dell’ecosistema Microsoft.</p><p>Affianco allo sviluppo corsi e workshop per i clienti su AI generativa, prompt engineering, Copilot e agenti.</p><div class="detail-actions">${routeButton('progetti/professionali', 'Progetti professionali', 'retro-button', 'work')}${routeButton('formazione', 'Formazione ai clienti', 'retro-button', 'training')}</div></div></section>
      <section class="timeline-item"><div class="timeline-date">2024 — 2025</div><div class="timeline-content"><h2>IT Consultant</h2><h3>IRIMÌ SRL · Schio</h3><p>Personalizzazione della piattaforma ITSM SysAid: analisi dei requisiti, configurazione di workflow, supporto e formazione per i clienti.</p></div></section>
      <section class="timeline-item"><div class="timeline-date">2021 — 2024</div><div class="timeline-content"><h2>Artificial Intelligence Systems</h2><h3>Laurea magistrale · Università di Trento</h3><p>Un percorso tra machine learning, linguaggio naturale, visione e pianificazione automatica, accompagnato da progetti e attività di ricerca.</p>${routeButton('progetti/universita', 'Esplora università e ricerca', 'text-button', 'academic')}</div></section>
      <section class="timeline-item"><div class="timeline-date">2022</div><div class="timeline-content"><h2>Industrial AI Challenge</h2><h3>Team vincitore · Pulsar Industry</h3><p>Machine learning applicato a una linea produttiva: un’esperienza di collaborazione tra ricerca e problema industriale.</p>${routeButton('progetto/pulsar-industry', 'Apri il progetto', 'text-button', 'document')}</div></section>
      <section class="timeline-item"><div class="timeline-date">2018 — 2021</div><div class="timeline-content"><h2>Informatica</h2><h3>Laurea · Università di Trento</h3><p>Le basi della programmazione, degli algoritmi e dei sistemi su cui ho costruito il mio percorso.</p></div></section>
      </div><section class="off-duty"><div>${icon('running', 40)}</div><div><h2>Lo sport, da sempre.</h2><p>Il calcio e l’Inter fin da piccolo, gli anni del padel, la palestra, la bici e la corsa. Oggi un nuovo obiettivo: completare le SuperHalfs, partendo da Copenaghen a settembre 2027.</p>${routeButton('sport', 'Le mie passioni, fuori dall’ufficio', 'text-button', 'arrow')}</div></section></div>`;
  }

  function contactView() {
    return `<div class="contact-page"><header class="contact-intro"><p class="eyebrow">CONTATTI</p><h1>Le idee migliori<br>partono da una<br><span>conversazione.</span></h1><p>Un progetto, un’opportunità professionale o una curiosità su quello che faccio? Parliamone.</p></header><div class="contact-links"><a class="contact-link" href="mailto:faccin.pierluca@gmail.com">${icon('mail', 40)}<span><small>SCRIVIMI</small><strong>faccin.pierluca@gmail.com</strong></span>${icon('arrow',16)}</a><a class="contact-link" href="https://www.linkedin.com/in/pierlucafaccin" target="_blank" rel="noopener noreferrer">${icon('linkedin', 40)}<span><small>IL MIO PERCORSO PROFESSIONALE</small><strong>LinkedIn</strong></span>${icon('arrow',16)}</a><a class="contact-link" href="https://github.com/pierlucafaccin" target="_blank" rel="noopener noreferrer">${icon('github', 40)}<span><small>CODICE E PROGETTI</small><strong>GitHub</strong></span>${icon('arrow',16)}</a></div><div class="contact-footer"><span>Valdagno (VI), Italia</span><button class="retro-button" type="button" data-copy-email>${icon('document', 18)}Copia indirizzo email</button></div></div>`;
  }

  function helpView() {
    return `<div class="help-page"><header class="content-header"><p class="eyebrow">FACCIN OS · PERSONAL WORKSPACE</p><h1>Un desktop da esplorare.</h1><p>Questo è il mio portfolio personale, ispirato alle interfacce che hanno fatto la storia dei computer.</p></header><div class="help-items"><section><h2>Apri una finestra</h2><p>Basta un clic sulle icone del desktop o sulle voci di Start. I progetti professionali, la formazione e le certificazioni sono subito a portata di mano.</p></section><section><h2>Fai spazio alle idee</h2><p>Puoi spostare le finestre dalla barra del titolo, ingrandirle, ridurle nella taskbar e riaprirle. Su telefono, una finestra alla volta mantiene tutto leggibile.</p></section><section><h2>Condividi un progetto</h2><p>Ogni progetto ha il suo indirizzo: copia il link dalla barra del browser. Il tasto Indietro ti riporta alla vista precedente.</p></section><section><h2>Usa la tastiera</h2><p><kbd>Tab</kbd> per muoverti, <kbd>Invio</kbd> per aprire. <kbd>Esc</kbd> chiude Start. In Progetti, <kbd>/</kbd> porta alla ricerca.</p></section></div><div class="detail-actions">${routeButton('home', 'Torna al profilo', 'primary-button', 'profile')}${routeButton('impostazioni', 'Personalizza il desktop', 'retro-button', 'settings')}</div></div>`;
  }

  function settingsView() {
    let theme = 'teal';
    try { theme = localStorage.getItem('faccin-os-theme') || 'teal'; } catch (_) { /* Private browsing still works. */ }
    return `<div class="settings-page"><header class="content-header"><p class="eyebrow">PROPRIETÀ DEL DESKTOP</p><h1>Fai come se<br>fosse il tuo.</h1><p>Scegli il colore dello sfondo. La preferenza resta nel tuo browser.</p></header><div class="settings-grid">${[{id:'teal',label:'Petrolio classico',color:'#008080'},{id:'navy',label:'Blu notte',color:'#17365e'},{id:'graphite',label:'Grafite',color:'#374742'}].map(item => `<button class="theme-option" type="button" data-theme="${item.id}" aria-pressed="${theme === item.id}"><span class="theme-preview" style="--swatch:${item.color}" aria-hidden="true"><span>PF</span></span><strong>${item.label}</strong></button>`).join('')}</div><p class="muted">Le animazioni rispettano le preferenze di movimento del tuo dispositivo.</p></div>`;
  }

  function resolveRoute(route) {
    const [section, item] = route.split('/');
    if (section === 'progetto') {
      const project = projects.find(value => value.id === item);
      if (project) return { id: `project-${project.id}`, title: project.shortTitle || project.title, icon: projectIcon(project), breadcrumb: `Progetti / ${categories[project.category].label} / ${project.shortTitle || project.title}`, html: () => projectView(project), status: categories[project.category].subtitle };
    }
    if (section === 'progetti') {
      const category = Object.keys(categories).find(key => categories[key].route === item) || 'professional';
      return { id: 'projects', title: apps.projects.windowTitle, icon:'projects', breadcrumb:`Progetti / ${categories[category].label}`, html:() => projectsView(category), status: `${projects.filter(project => project.category === category).length} progetti · ${categories[category].subtitle}` };
    }
    const key = {home:'home',formazione:'training',certificazioni:'certifications',percorso:'career',sport:'sport',contatti:'contact',help:'help',impostazioni:'settings'}[section] || 'home';
    const renderers = {home:homeView,training:trainingView,certifications:certificationsView,career:careerView,sport:() => window.renderFaccinSport({icon,routeButton,esc}),contact:contactView,help:helpView,settings:settingsView};
    const status = {home:'Soluzioni AI, software e formazione',training:'Tecnologia, comunicazione e relazione con i clienti',certifications:'2 certificazioni Microsoft',career:'Esperienza, studi e ricerca',sport:'Calcio, padel, palestra, bici e corsa · Obiettivo SuperHalfs',contact:'Valdagno (VI), Italia',help:'Un clic per aprire. Tutto il tempo per esplorare.',settings:'Preferenze del desktop'};
    return {id:key,title:apps[key].windowTitle,icon:apps[key].icon,breadcrumb:apps[key].title,html:renderers[key],status:status[key]};
  }

  function readHash() {
    try { return decodeURIComponent(location.hash.replace(/^#\/?/, '')) || 'home'; } catch (_) { return 'home'; }
  }

  function navigate(route, options = {}) {
    closeStart(false);
    if (readHash() === route) showRoute(route, options);
    else if (options.replace) { history.replaceState(null, '', `#${route}`); showRoute(route, options); }
    else location.hash = route;
  }

  function showRoute(route, options = {}) {
    const view = resolveRoute(route);
    let entry = windows.get(view.id);
    if (!entry) {
      const element = document.createElement('section');
      element.className = 'os-window';
      element.dataset.app = view.id;
      element.setAttribute('aria-labelledby', `title-${view.id}`);
      const offset = Math.min(windows.size, 5) * 14;
      const initialX = Math.max(114, Math.round((innerWidth - Math.min(1080, innerWidth - 170)) / 2) + 28);
      element.style.setProperty('--window-x', `${initialX + offset}px`);
      element.style.setProperty('--window-y', `${30 + offset}px`);
      element.innerHTML = `<header class="window-titlebar"><div class="titlebar-label">${icon(view.icon, 18)}<span id="title-${view.id}">${esc(view.title)}</span></div><div class="window-controls"><button type="button" data-window-action="minimize" aria-label="Riduci a icona" title="Riduci a icona">${icon('minimize', 14)}</button><button type="button" data-window-action="maximize" aria-label="Ingrandisci finestra" title="Ingrandisci">${icon('maximize', 14)}</button><button type="button" data-window-action="close" aria-label="Chiudi finestra" title="Chiudi">${icon('close', 14)}</button></div></header><nav class="window-menubar" aria-label="Posizione"><button type="button" class="menubar-home" data-route="home" aria-label="Torna al profilo">${icon('profile', 16)}</button><span class="breadcrumb"></span><button type="button" class="menubar-contact" data-route="contatti">Contatti</button></nav><div class="window-body" tabindex="-1"></div><footer class="window-statusbar"><span data-window-status></span><span>Faccin OS</span></footer>`;
      workspace.appendChild(element);
      entry = {id:view.id,node:element,title:view.title,icon:view.icon,route:null,minimized:false,z:0};
      windows.set(view.id, entry);
    }
    if (entry.route !== route) {
      entry.node.querySelector('.window-body').innerHTML = view.html();
      entry.node.querySelector('.breadcrumb').textContent = `Faccin OS / ${view.breadcrumb}`;
      entry.node.querySelector('[data-window-status]').textContent = view.status;
      entry.node.querySelector('.window-body').scrollTop = 0;
      entry.route = route;
    }
    focusWindow(view.id);
    document.title = `${view.id === 'home' ? 'Pierluca Faccin' : view.title} — Faccin OS`;
    if (options.focus !== false) requestAnimationFrame(() => entry.node.querySelector('.window-body').focus({preventScroll:true}));
    if (matchMedia('(max-width: 899px)').matches) scrollTo({top:0,behavior:'instant'});
  }

  function focusWindow(id, syncRoute = false) {
    const entry = windows.get(id);
    if (!entry) return;
    activeId = id;
    entry.minimized = false;
    entry.node.hidden = false;
    entry.z = ++zIndex;
    entry.node.style.zIndex = String(entry.z);
    windows.forEach(value => value.node.classList.toggle('is-active', value.id === id));
    const desktopAppId = id.startsWith('project-') ? 'projects' : id;
    document.querySelectorAll('.desktop-icon').forEach(button => {
      const current = resolveRoute(button.dataset.route).id === desktopAppId;
      button.classList.toggle('is-active', current);
      if (current) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
    });
    document.title = `${id === 'home' ? 'Pierluca Faccin' : entry.title} — Faccin OS`;
    if (syncRoute && readHash() !== entry.route) history.replaceState(null,'',`#${entry.route}`);
    updateTaskbar();
  }

  function updateTaskbar() {
    tasks.innerHTML = [...windows.values()].map(entry => `<button type="button" class="task-item${entry.id === activeId && !entry.minimized ? ' is-active' : ''}" data-task="${entry.id}" aria-pressed="${entry.id === activeId && !entry.minimized}" aria-label="${entry.minimized ? 'Ripristina' : 'Apri'} ${esc(entry.title)}">${icon(entry.icon,18)}<span>${esc(entry.id === 'home' ? 'Il mio profilo' : entry.title)}</span></button>`).join('');
    desktopEmpty.hidden = [...windows.values()].some(entry => !entry.minimized);
  }

  function hideWindow(id, close = false) {
    const entry = windows.get(id);
    if (!entry) return;
    if (close) { entry.node.remove(); windows.delete(id); }
    else { entry.minimized = true; entry.node.hidden = true; entry.node.classList.remove('is-active'); }
    const next = [...windows.values()].filter(value => !value.minimized).sort((a,b) => b.z-a.z)[0];
    if (next) { focusWindow(next.id,true); next.node.querySelector('.window-body').focus({preventScroll:true}); }
    else { activeId = null; updateTaskbar(); startButton.focus(); }
  }

  function toggleMaximize(entry) {
    const maximized = entry.node.classList.toggle('is-maximized');
    const control = entry.node.querySelector('[data-window-action="maximize"]');
    control.setAttribute('aria-label',maximized ? 'Ripristina dimensioni finestra' : 'Ingrandisci finestra');
    control.setAttribute('title',maximized ? 'Ripristina' : 'Ingrandisci');
    control.setAttribute('aria-pressed',String(maximized));
  }

  function closeStart(returnFocus = false) {
    if (startMenu.hidden) return;
    startMenu.hidden = true;
    startButton.setAttribute('aria-expanded','false');
    if (returnFocus) startButton.focus();
  }

  function showToast(message) {
    const element = document.getElementById('toast');
    clearTimeout(toastTimer);
    element.textContent = message;
    element.hidden = false;
    toastTimer = setTimeout(() => { element.hidden = true; }, 4000);
  }

  function setTheme(theme, persist = true) {
    const colors = {teal:'#008080',navy:'#17365e',graphite:'#374742'};
    const selected = Object.hasOwn(colors,theme) ? theme : 'teal';
    os.style.backgroundColor = colors[selected];
    os.dataset.theme = selected;
    document.querySelector('meta[name="theme-color"]').content = colors[selected];
    if (persist) { try { localStorage.setItem('faccin-os-theme',selected); } catch (_) { /* Optional preference only. */ } }
    document.querySelectorAll('[data-theme]').forEach(button => { if (button.tagName === 'BUTTON') button.setAttribute('aria-pressed',String(button.dataset.theme === selected)); });
  }

  const desktopApps = ['home','projects','training','certifications','career','sport','contact'];
  document.getElementById('desktop-icons').innerHTML = desktopApps.map(key => `<button class="desktop-icon" type="button" data-route="${apps[key].route}"><span class="icon">${icon(apps[key].icon,40)}</span><span>${apps[key].title}</span></button>`).join('');
  startMenu.innerHTML = `<div class="start-brand">Faccin<span>OS</span></div><div class="start-items"><div class="start-identity"><strong>Pierluca Faccin</strong><span>AI Solution Engineer</span></div>${desktopApps.map(key => routeButton(apps[key].route,apps[key].title,'start-item',apps[key].icon)).join('')}<hr>${routeButton('impostazioni','Aspetto desktop','start-item','settings')}${routeButton('help','Guida a Faccin OS','start-item','help')}</div>`;
  document.querySelectorAll('[data-icon]').forEach(element => { element.innerHTML = icon(element.dataset.icon,20); });

  document.addEventListener('click', async event => {
    const button = event.target.closest('button');
    if (button?.id === 'start-button') {
      const open = startMenu.hidden;
      startMenu.hidden = !open;
      startButton.setAttribute('aria-expanded',String(open));
      if (open) startMenu.querySelector('button').focus();
      return;
    }
    if (!event.target.closest('#start-menu')) closeStart(false);
    if (button?.dataset.route) { navigate(button.dataset.route); return; }
    if (button?.dataset.task) {
      const entry = windows.get(button.dataset.task);
      if (entry && entry.id === activeId && !entry.minimized) hideWindow(entry.id);
      else if (entry) navigate(entry.route);
      return;
    }
    if (button?.dataset.windowAction) {
      const entry = windows.get(button.closest('.os-window').dataset.app);
      if (!entry) return;
      if (button.dataset.windowAction === 'close') hideWindow(entry.id,true);
      else if (button.dataset.windowAction === 'minimize') hideWindow(entry.id);
      else toggleMaximize(entry);
      return;
    }
    if (button?.dataset.theme) { setTheme(button.dataset.theme); return; }
    if (button?.hasAttribute('data-copy-email')) {
      try { await navigator.clipboard.writeText('faccin.pierluca@gmail.com'); showToast('Indirizzo email copiato.'); }
      catch (_) { showToast('Indirizzo email: faccin.pierluca@gmail.com'); }
    }
    if (event.target.closest('.skip-link')) {
      event.preventDefault();
      const entry = windows.get(activeId);
      (entry ? entry.node.querySelector('.window-body') : workspace).focus();
    }
  });

  document.addEventListener('input', event => {
    const input = event.target.closest('[data-project-search]');
    if (!input) return;
    const body = input.closest('.window-body');
    body.querySelector('[data-project-grid]').innerHTML = projectCards(input.dataset.category,input.value);
    const count = body.querySelectorAll('.project-card').length;
    body.querySelector('[data-project-count]').textContent = `${count} ${count === 1 ? 'progetto' : 'progetti'}`;
  });

  document.addEventListener('focusin', event => {
    const element = event.target.closest('.os-window');
    if (element && element.dataset.app !== activeId) focusWindow(element.dataset.app,true);
  });

  document.addEventListener('pointerdown', event => {
    const element = event.target.closest('.os-window');
    if (element && element.dataset.app !== activeId) focusWindow(element.dataset.app,true);
    const bar = event.target.closest('.window-titlebar');
    if (!bar || event.target.closest('button') || event.button !== 0 || matchMedia('(max-width: 899px)').matches || element.classList.contains('is-maximized')) return;
    const rect = element.getBoundingClientRect();
    drag = {element,bar,startX:event.clientX,startY:event.clientY,x:rect.left,y:rect.top,pointerId:event.pointerId};
    bar.setPointerCapture(event.pointerId);
    element.classList.add('is-dragging');
    event.preventDefault();
  });
  document.addEventListener('pointermove', event => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    const maxX = Math.max(0,innerWidth - drag.element.offsetWidth);
    const maxY = Math.max(0,innerHeight - 100);
    const x = Math.min(maxX,Math.max(0,drag.x + event.clientX - drag.startX));
    const y = Math.min(maxY,Math.max(0,drag.y + event.clientY - drag.startY));
    drag.element.style.setProperty('--window-x',`${x}px`);
    drag.element.style.setProperty('--window-y',`${y}px`);
  });
  function endDrag() {
    if (!drag) return;
    if (drag.bar.hasPointerCapture(drag.pointerId)) drag.bar.releasePointerCapture(drag.pointerId);
    drag.element.classList.remove('is-dragging'); drag = null;
  }
  document.addEventListener('pointerup',endDrag);
  document.addEventListener('pointercancel',endDrag);
  document.addEventListener('dblclick',event => {
    const bar = event.target.closest('.window-titlebar');
    if (bar && !event.target.closest('button') && matchMedia('(min-width: 900px)').matches) toggleMaximize(windows.get(bar.closest('.os-window').dataset.app));
  });
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape') closeStart(true);
    if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(event.target.tagName) && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const search = windows.get(activeId)?.node.querySelector('[data-project-search]');
      if (search) { event.preventDefault(); search.focus(); }
    }
  });
  window.addEventListener('hashchange',() => showRoute(readHash()));
  window.addEventListener('resize',() => {
    if (matchMedia('(max-width: 899px)').matches) return;
    windows.forEach(entry => {
      if (entry.minimized || entry.node.classList.contains('is-maximized')) return;
      const rect = entry.node.getBoundingClientRect();
      entry.node.style.setProperty('--window-x',`${Math.max(0,Math.min(rect.left,innerWidth-entry.node.offsetWidth))}px`);
      entry.node.style.setProperty('--window-y',`${Math.max(0,Math.min(rect.top,innerHeight-100))}px`);
    });
  });

  function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    clock.dateTime = now.toISOString();
    clock.textContent = new Intl.DateTimeFormat('it-IT',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Rome'}).format(now);
    clock.setAttribute('aria-label',new Intl.DateTimeFormat('it-IT',{dateStyle:'full',timeStyle:'short',timeZone:'Europe/Rome'}).format(now));
  }
  let savedTheme = 'teal';
  try { savedTheme = localStorage.getItem('faccin-os-theme') || 'teal'; } catch (_) { /* No storage required. */ }
  setTheme(savedTheme,false);
  updateClock();
  setInterval(updateClock,30000);
  os.hidden = false;
  showRoute(readHash(),{focus:false});
  document.documentElement.classList.add('is-ready');
})();
