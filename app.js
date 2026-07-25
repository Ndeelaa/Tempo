const emotions = [
  { id: 'happy', label: 'Joyeux', color: '#FFD85A', secondary: '#FFA178', face: 'happy', shape: 'shape-a' },
  { id: 'calm', label: 'Calme', color: '#A9C878', secondary: '#DCE8B8', face: 'calm', shape: 'shape-b' },
  { id: 'curious', label: 'Curieux', color: '#C9A8F4', secondary: '#E9B5CC', face: 'curious', shape: 'shape-c' },
  { id: 'energetic', label: 'Énergique', color: '#FF8A67', secondary: '#FFD85A', face: 'excited', shape: 'shape-d' },
  { id: 'sad', label: 'Triste', color: '#748DD5', secondary: '#9C82DF', face: 'sad', shape: 'shape-e' },
  { id: 'stressed', label: 'Stressé', color: '#E98A76', secondary: '#E9B5CC', face: 'worried', shape: 'shape-f' },
]

const recommendations = [
  { label: 'À peine', eyebrow: 'Une sortie sans contrainte', title: 'Une balade entre les rayons d’une librairie', description: 'Quelques pas, de belles couvertures et la liberté de repartir quand tu veux.' },
  { label: 'Un peu', eyebrow: 'Un moment à ton rythme', title: 'Un café calme avec un livre choisi sur place', description: 'Un décor chaleureux, une lecture légère et aucune urgence à combler le silence.' },
  { label: 'Modérément', eyebrow: 'Une pause pour respirer', title: 'Une séance de cinéma contemplatif', description: 'Un lieu calme, une histoire immersive et du temps pour laisser retomber la journée.' },
  { label: 'Beaucoup', eyebrow: 'Une immersion apaisante', title: 'Une exposition sonore en petit comité', description: 'Un voyage enveloppant, à parcourir lentement dans une lumière douce.' },
  { label: 'Très fortement', eyebrow: 'Le plus doux des tempos', title: 'Une installation lumineuse confidentielle', description: 'Une expérience feutrée, peu fréquentée et sans aucune pression sociale.' },
]

const testimonials = [
  { name: 'Lina, 24 ans', tempo: 'Triste · intensité 3/5', quote: 'Je ne voulais pas forcément sortir, mais l’ambiance était assez douce pour me faire du bien sans me demander d’effort.' },
  { name: 'Adam, 28 ans', tempo: 'Fatigué · intensité 4/5', quote: 'Le film était calme et le lieu peu chargé. C’était exactement le rythme dont j’avais besoin.' },
  { name: 'Inès, 26 ans', tempo: 'Morose · intensité 3/5', quote: 'La recommandation était plus juste qu’une simple catégorie “cinéma”. J’ai compris pourquoi cette séance me correspondait.' },
]

const state = { screen: 1, emotion: 'sad', intensity: 3, saved: false, confirmed: false }
const app = document.querySelector('#app')

const icon = (name, size = 20) => {
  const paths = {
    arrowLeft: '<path d="m15 18-6-6 6-6"/><path d="M9 12h12"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    sparkles: '<path d="m12 3-1 3.5L7.5 8 11 9.5l1 3.5 1-3.5L16.5 8 13 6.5 12 3z"/><path d="m5 14-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14z"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/>',
    ticket: '<path d="M3 6h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4V6z"/>',
    pause: '<circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2z"/>',
    waves: '<path d="M3 8c3-3 5 3 8 0s5 3 10 0M3 13c3-3 5 3 8 0s5 3 10 0M3 18c3-3 5 3 8 0s5 3 10 0"/>',
  }
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.sparkles}</svg>`
}

const progress = step => `<div class="progress" aria-label="Étape ${step} sur 3">${[1,2,3].map(n => `<span class="${n === step ? 'active' : ''}"></span>`).join('')}</div>`
const face = expression => `<span class="face ${expression}" aria-hidden="true"><i class="eye left"></i><i class="eye right"></i><i class="mouth"></i></span>`
const blob = (emotion, large = false) => `<span class="emotion-blob ${emotion.shape} ${large ? 'large' : ''}" style="--blob-color:${emotion.color};--blob-secondary:${emotion.secondary};--intensity:${state.intensity}">${face(emotion.face)}</span>`
const backButton = () => `<button class="icon-button" data-action="back" aria-label="Revenir à l’écran précédent">${icon('arrowLeft')}</button>`
const primaryButton = (label, action) => `<button class="primary-button" data-action="${action}"><span>${label}</span><span class="button-icon">${icon('arrowRight', 18)}</span></button>`

function activityCard() {
  const item = recommendations[state.intensity - 1]
  return `<article class="activity-card"><div class="activity-art" role="img" aria-label="Composition abstraite aux tons bleu et lavande"><i></i><i></i><span>${icon('sparkles',17)}</span></div><div class="activity-content"><span class="eyebrow">${item.eyebrow}</span><h3>${item.title}</h3><p>${item.description}</p><div class="meta"><span>${icon('clock',11)}18 h 30</span><span>${icon('pin',11)}1,8 km</span><span>${icon('ticket',11)}Dès 8 €</span></div></div></article>`
}

function screenOne() {
  const emotion = emotions.find(item => item.id === state.emotion)
  return `<section class="screen emotion-screen">
    <header class="topbar"><span class="logo">tempo<span>.</span></span>${progress(1)}<button class="skip" data-action="skip">Passer</button></header>
    <div class="intro"><p class="kicker">Ton humeur ouvre la voie</p><h1>Pas sûr·e de ce que tu veux faire aujourd’hui&nbsp;?</h1><p>Choisis une émotion. Tempo trouvera une expérience qui suit ton rythme.</p></div>
    <div class="wheel-wrap"><div class="wheel" role="group" aria-label="Choisir une émotion">${emotions.map((item,index) => `<button class="emotion-choice pos-${index} ${state.emotion && state.emotion !== item.id ? 'muted' : ''}" data-emotion="${item.id}" aria-label="Je me sens ${item.label.toLowerCase()}" aria-pressed="${state.emotion === item.id}"><span class="emotion-blob ${item.shape} ${state.emotion === item.id ? 'selected' : ''}" style="--blob-color:${item.color};--blob-secondary:${item.secondary}">${face(item.face)}</span><span class="emotion-label">${item.label}</span></button>`).join('')}</div><div class="wheel-center" aria-hidden="true"><span>ton humeur</span><b>maintenant</b></div></div>
    <div class="selection-copy">Aujourd’hui, je me sens <strong>${emotion.label.toLowerCase()}</strong>.</div>
    <div class="bottom-actions">${primaryButton('Continuer','next')}</div>
  </section>`
}

function screenTwo() {
  const emotion = emotions.find(item => item.id === state.emotion) || emotions[4]
  return `<section class="screen intensity-screen">
    <header class="topbar">${backButton()}${progress(2)}<span class="top-caption">Ton Tempo du moment</span></header>
    <div class="intro compact"><p class="kicker">Triste, mais pas seulement</p><h1>À quel point te sens-tu triste&nbsp;?</h1><p>Choisis le niveau qui correspond à ton ressenti.</p></div>
    <div class="living-blob">${blob(emotion,true)}<span class="blob-halo"></span></div>
    <div class="intensity-block"><div class="intensity-track" role="radiogroup" aria-label="Intensité de l’émotion">${recommendations.map((item,index) => `<button role="radio" aria-checked="${state.intensity === index+1}" aria-label="${item.label}, niveau ${index+1} sur 5" class="${state.intensity === index+1 ? 'active' : ''}" data-intensity="${index+1}"><span style="--dot-size:${15+(index+1)*3}px"></span></button>`).join('')}</div><div class="intensity-copy"><strong>${recommendations[state.intensity-1].label}</strong><span>Intensité ${state.intensity} sur 5</span></div></div>
    <div class="recommendation-wrap">${activityCard()}</div>
    <p class="why">${icon('sparkles',15)} Tempo associe ton émotion, son intensité et ton besoin de calme à une expérience culturelle adaptée.</p>
    <div class="bottom-actions flow">${primaryButton('Découvrir cette expérience','next')}<button class="text-link" data-action="restart">Essayer une autre émotion</button></div>
  </section>`
}

function screenThree() {
  return `<section class="screen detail-screen">
    <header class="topbar detail-top">${backButton()}${progress(3)}<button class="icon-button ${state.saved ? 'saved' : ''}" data-action="save" aria-label="Sauvegarder cette activité" aria-pressed="${state.saved}">${icon(state.saved ? 'check' : 'bookmark')}</button></header>
    <div class="hero-art" role="img" aria-label="Composition abstraite évoquant l’eau et la lumière"><div class="hero-shape one"></div><div class="hero-shape two"></div><div class="hero-shape three"></div><div class="match">${icon('heart',15)}92 % en accord<br>avec ton Tempo</div><div class="hero-title"><span>Cinéma contemplatif</span><h1>Les Silences<br>de l’eau</h1></div></div>
    <div class="event-details"><div><span>Lieu</span><strong>Studio Lumière<br>Paris 11e</strong></div><div><span>Quand</span><strong>Aujourd’hui<br>18 h 30</strong></div><div><span>Durée</span><strong>1 h 35<br>8 € · 1,8 km</strong></div></div>
    <section class="editorial-section"><p class="kicker">Pourquoi ce choix</p><h2>Une expérience pour ralentir sans s’isoler</h2><p>Une séance intimiste pensée pour créer une parenthèse calme, laisser l’esprit respirer et retrouver progressivement de l’élan.</p></section>
    <section class="benefits"><h2>Ce que cette expérience pourrait t’apporter</h2><div><article>${icon('pause')}<span>Ralentir</span></article><article>${icon('compass')}<span>S’évader</span></article><article>${icon('waves')}<span>Revenir à soi</span></article></div></section>
    <section class="social"><div class="section-heading"><div><p class="kicker">Des ressentis, pas des notes</p><h2>Ils avaient un Tempo similaire</h2></div><span class="rating">4,7 / 5<small>128 expériences similaires</small></span></div><div class="testimonial-row">${testimonials.map((item,index) => `<article class="testimonial"><div class="avatar">${item.name[0]}</div><div><strong>${item.name}</strong><span>${item.tempo}</span></div><p>« ${item.quote} »</p><span class="card-index">0${index+1}</span></article>`).join('')}</div></section>
    <div class="bottom-actions detail-actions">${state.confirmed ? `<div class="confirmation"><span>${icon('sparkles',17)}</span><div><strong>Ton Tempo est prêt.</strong><small>Cette sortie t’attend.</small></div></div>` : ''}${primaryButton(state.confirmed ? 'Entrer dans l’application' : 'Choisir cette sortie','confirm')}<button class="secondary-button" data-action="back">Voir une autre proposition</button></div>
    <footer>tempo<span>.</span><small>La culture au rythme de ton humeur.</small>${icon('arrowRight')}</footer>
  </section>`
}

function completionScreen() {
  return `<section class="completion-screen"><div class="completion-orb">${icon('sparkles')}</div><p class="eyebrow">À très bientôt</p><h1>L’application complète<br>arrive ensuite.</h1><p>Ton premier Tempo est bien au chaud. On se retrouve bientôt pour découvrir la suite.</p><button class="text-link" data-action="restart">Revoir le prototype</button></section>`
}

function render() {
  app.className = `app-shell screen-${state.screen}`
  app.innerHTML = `<div class="ambient ambient-one"></div><div class="ambient ambient-two"></div>${state.screen === 1 ? screenOne() : state.screen === 2 ? screenTwo() : state.screen === 3 ? screenThree() : completionScreen()}`
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

app.addEventListener('click', event => {
  const emotionButton = event.target.closest('[data-emotion]')
  const intensityButton = event.target.closest('[data-intensity]')
  const actionButton = event.target.closest('[data-action]')
  if (emotionButton) state.emotion = emotionButton.dataset.emotion
  else if (intensityButton) state.intensity = Number(intensityButton.dataset.intensity)
  else if (actionButton) {
    const action = actionButton.dataset.action
    if (action === 'next' || action === 'skip') state.screen++
    if (action === 'back') state.screen--
    if (action === 'restart') { state.screen = 1; state.confirmed = false }
    if (action === 'save') state.saved = !state.saved
    if (action === 'confirm') state.confirmed ? state.screen = 4 : state.confirmed = true
  }
  render()
})

render()
