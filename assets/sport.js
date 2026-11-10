/* Personal sporting interests and goals supplied by Pierluca, November 2026. */
(() => {
  'use strict';

  const sport = {
    eyebrow: 'FUORI DALL’UFFICIO · PASSIONI PERSONALI',
    title: 'Lo sport, da sempre.',
    intro: 'Lo sport fa parte della mia vita da quando ero piccolo. Nel tempo sono cambiate le discipline e il modo di allenarmi, ma il movimento è rimasto una presenza costante: il calcio, gli anni del padel, la palestra, la bici e la corsa. È una parte di me che accompagna il lavoro, le amicizie e i progetti personali.',
    stories: [
      {
        number: '01',
        label: 'LE ORIGINI',
        title: 'Calcio. E Inter, dal giorno zero.',
        text: 'La passione per il calcio è iniziata da piccolo e il tifo ha sempre avuto due colori: il nero e l’azzurro. Interista dal giorno zero, porto con me questa passione da sempre. È il punto da cui comincia il mio rapporto con lo sport.',
        accent: 'football'
      },
      {
        number: '02',
        label: 'IN CAMPO',
        title: 'Gli anni del padel.',
        text: 'Per anni il padel ha avuto un posto importante nelle mie giornate. Il tempo in campo, le partite e il piacere di giocare hanno affiancato le altre attività. È una parte del mio percorso sportivo a cui sono legato, fatta anche di confronto e condivisione.',
        accent: 'padel'
      },
      {
        number: '03',
        label: 'LA CONTINUITÀ',
        title: 'Palestra, bici e corsa.',
        text: 'In parallelo ho continuato a mantenermi attivo con la palestra, la bici e la corsa. Mi piace avere più modi di allenarmi e alternarli nella quotidianità. Oggi la corsa dà una direzione precisa a questo percorso, con la palestra che entra anche nella preparazione ai prossimi obiettivi.',
        accent: 'training'
      }
    ],
    goal: {
      title: 'Un percorso chiamato SuperHalfs.',
      text: 'Il mio obiettivo è completare il circuito SuperHalfs. Lo vedo come un progetto personale di lungo periodo, da costruire un allenamento e una gara alla volta. Copenaghen, a settembre 2027, sarà la mia prima SuperHalf: il punto di partenza di questo percorso.',
      firstCity: 'Copenaghen',
      firstDate: 'Settembre 2027',
      destination: 'Completare le SuperHalfs',
      preparation: 'La preparazione comprende la corsa e il lavoro propedeutico in palestra. Voglio poter seguire queste attività come parti dello stesso percorso, mantenendo chiaro il collegamento tra gli allenamenti di oggi e la gara che sto preparando.'
    },
    project: {
      title: 'Quando la passione diventa software.',
      text: 'Da questa passione è nata anche Lisbona 21K, la mia applicazione per organizzare gli allenamenti e tenere un diario di corsa. La prossima evoluzione sarà allinearla alla preparazione di Copenaghen e al percorso SuperHalfs, ampliando l’integrazione di tutti gli allenamenti propedeutici in palestra.',
      note: 'Il nuovo obiettivo dell’app e l’integrazione completa del lavoro in palestra sono sviluppi previsti.',
      button: 'Il progetto Lisbona 21K'
    }
  };

  window.FACCIN_SPORT = sport;
  window.renderFaccinSport = ({icon, routeButton, esc}) => `
    <article class="sport-page">
      <header class="sport-header">
        <p class="eyebrow">${esc(sport.eyebrow)}</p>
        <h1>Lo sport,<br><span>da sempre.</span></h1>
        <p class="sport-intro">${esc(sport.intro)}</p>
        <div class="sport-disciplines" aria-label="Le mie passioni sportive">
          <span>Calcio</span><span>Padel</span><span>Palestra</span><span>Bici</span><span>Corsa</span>
        </div>
      </header>

      <section class="sport-stories" aria-label="Il mio percorso nello sport">
        ${sport.stories.map(story => `<section class="sport-story sport-story--${esc(story.accent)}">
          <div class="sport-story-top"><span class="sport-number">${esc(story.number)}</span><span>${esc(story.label)}</span></div>
          <h2>${esc(story.title)}</h2>
          <p>${esc(story.text)}</p>
        </section>`).join('')}
      </section>

      <section class="sport-goal" aria-labelledby="sport-goal-title">
        <div class="sport-goal-heading"><span class="sport-goal-icon">${icon('running', 40)}</span><div><p class="eyebrow">CORSA · IL PROSSIMO CAPITOLO</p><h2 id="sport-goal-title">${esc(sport.goal.title)}</h2></div></div>
        <p class="sport-goal-copy">${esc(sport.goal.text)}</p>
        <div class="sport-route">
          <section class="sport-first-race" aria-label="La mia prima SuperHalf">
            <span class="sport-route-label">LA MIA PRIMA SUPERHALF</span>
            <h3>${esc(sport.goal.firstCity)}</h3>
            <p>${esc(sport.goal.firstDate)}</p>
          </section>
          <div class="sport-route-connector" aria-hidden="true">${icon('arrow', 28)}</div>
          <section class="sport-long-goal" aria-label="Il mio obiettivo a lungo termine">
            <span class="sport-route-label">L’OBIETTIVO COMPLETO</span>
            <h3>${esc(sport.goal.destination)}</h3>
            <p>Un percorso, più traguardi.</p>
          </section>
        </div>
        <p class="sport-preparation">${esc(sport.goal.preparation)}</p>
      </section>

      <section class="sport-project">
        <p class="eyebrow">SPORT E CODICE</p>
        <h2>${esc(sport.project.title)}</h2>
        <p>${esc(sport.project.text)}</p>
        <p class="sport-project-note">${esc(sport.project.note)}</p>
        ${routeButton('progetto/lisbona21k', sport.project.button, 'retro-button', 'running')}
      </section>
    </article>`;
})();
