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

const culturalEvents = [
  { id:'silences', title:'Les Silences de l’eau', category:'Cinéma contemplatif', venue:'Studio Lumière — Paris 11e', date:'Aujourd’hui, 18 h 30', duration:'1 h 35', price:'8 €', distance:'1,8 km', compatibility:92, reason:'Une expérience calme, immersive et inattendue, en accord avec ton besoin de ralentir.', description:'Une sélection de courts métrages contemplatifs autour de l’eau, du silence et de la mémoire.', tags:['Calme','Immersif','Inattendu'], visual:'visual-water' },
  { id:'lumieres', title:'Lumières liquides', category:'Installation immersive', venue:'Atelier des Lumières', date:'Aujourd’hui, 19 h', duration:'1 h 10', price:'12 €', distance:'2,4 km', compatibility:89, reason:'Des formes visuelles enveloppantes et peu de pression sociale.', description:'Une installation lumineuse qui transforme l’espace au fil de compositions fluides.', tags:['Visuel','Immersif','Calme'], visual:'visual-sun' },
  { id:'murmures', title:'Nuit des murmures', category:'Lecture sonore', venue:'Maison de la poésie', date:'Aujourd’hui, 20 h', duration:'1 h 20', price:'10 €', distance:'3,1 km', compatibility:84, reason:'Une expérience intime qui stimule l’imagination sans être trop intense.', description:'Une lecture à plusieurs voix dans un écrin sonore discret et enveloppant.', tags:['Intime','Sonore','Poétique'], visual:'visual-night' },
  { id:'matieres', title:'Matières sensibles', category:'Exposition', venue:'Galerie Fragment', date:'Jusqu’à 21 h', duration:'Libre', price:'Gratuit', distance:'1,2 km', compatibility:81, reason:'Un parcours libre, calme et suffisamment surprenant.', description:'Un parcours tactile et visuel autour de matériaux inattendus.', tags:['Libre','Calme','Insolite'], visual:'visual-sage' },
  { id:'voix', title:'Voix suspendues', category:'Concert intimiste', venue:'Le Hasard Ludique', date:'Aujourd’hui, 20 h 30', duration:'1 h 30', price:'15 €', distance:'3,6 km', compatibility:78, reason:'Des voix proches et une scénographie feutrée.', description:'Un concert acoustique à jauge réduite, pensé comme une conversation.', tags:['Intime','Musique','Doux'], visual:'visual-night' },
  { id:'traversees', title:'Traversées silencieuses', category:'Exposition', venue:'Palais de Tokyo', date:'Jusqu’à 22 h', duration:'Libre', price:'13 €', distance:'4,2 km', compatibility:76, reason:'Un parcours libre pour laisser vagabonder ton attention.', description:'Une exposition qui fait dialoguer espace, silence et mouvement.', tags:['Libre','Visuel','Calme'], visual:'visual-sage' },
]

function emotionRecommendationProfile(){
  const expression=state.appearance.expression
  const groups={
    calm:['calm','serene','pleased','confident','tired','sad','pensive','crying','shy','bored'],
    intense:['angry','rage','irritated','disgusted','pain'],
    bright:['happy','laughing','excited','triumph','silly','flirty','devious'],
    uncertain:['scared','nervous','confused','concerned','surprised','embarrassed'],
  }
  const mood=Object.keys(groups).find(key=>groups[key].includes(expression))||'curious'
  return {
    calm:{summary:'des lieux feutrés, libres et sans pression',order:['silences','matieres','lumieres','murmures'],reasons:{silences:'Son rythme lent prolonge la douceur de ta création.',matieres:'Son parcours libre laisse ton émotion respirer.',lumieres:'Ses images enveloppantes offrent une immersion sans agitation.',murmures:'Ses voix discrètes accompagnent un ressenti intérieur.'}},
    intense:{summary:'des expériences expressives qui donnent de l’espace à ce que tu ressens',order:['lumieres','murmures','matieres','silences'],reasons:{lumieres:'Ses mouvements lumineux font écho à la tension expressive de ta forme.',murmures:'La puissance des voix offre un exutoire culturel sans foule excessive.',matieres:'Les textures permettent de canaliser ton ressenti par la curiosité.',silences:'Son contraste calme peut créer une vraie rupture de rythme.'}},
    bright:{summary:'des expériences vivantes, lumineuses et partageables',order:['lumieres','murmures','matieres','silences'],reasons:{lumieres:'Sa lumière vibrante prolonge le caractère joyeux de ton émotion.',murmures:'Une expérience collective à taille humaine, pleine de présence.',matieres:'Un parcours ludique qui nourrit ton envie de mouvement.',silences:'Une proposition plus posée pour faire durer ce bel élan.'}},
    uncertain:{summary:'des expériences rassurantes avec une petite part de surprise',order:['silences','matieres','murmures','lumieres'],reasons:{silences:'Un cadre intime et prévisible, avec juste assez d’évasion.',matieres:'Tu avances librement, sans horaire ni parcours imposé.',murmures:'La proximité des voix crée une présence douce et contenue.',lumieres:'Une immersion visuelle sans interaction sociale obligatoire.'}},
    curious:{summary:'des expériences singulières, visuelles et légèrement inattendues',order:['matieres','lumieres','silences','murmures'],reasons:{matieres:'Ses matières inattendues répondent au caractère exploratoire de ta création.',lumieres:'Ses formes mouvantes prolongent ton univers visuel.',silences:'Une narration sensible qui laisse une place à l’interprétation.',murmures:'Un format rare qui stimule l’imaginaire autrement.'}},
  }[mood]
}

function personalizedRecommendations(){
  const profile=emotionRecommendationProfile(),byId=Object.fromEntries(culturalEvents.map(event=>[event.id,event]))
  return profile.order.map((id,index)=>({...byId[id],compatibility:Math.max(78,94-index*4),reason:`Pour « ${state.profile.name} » : ${profile.reasons[id]}`}))
}

let storedFavorites = []
try { storedFavorites = JSON.parse(localStorage.getItem('tempo-favorites') || '[]') } catch (_) { storedFavorites = [] }
const onboardingDone = localStorage.getItem('tempo-onboarding-done') === 'true'
let savedAppearance = {}
try { savedAppearance = JSON.parse(localStorage.getItem('tempo-appearance') || '{}') } catch (_) { savedAppearance = {} }
const state = { screen: onboardingDone ? 4 : 1, navigationHistory:[], emotion: 'sad', intensity: 3, saved: false, confirmed: false, profile:{ name:savedAppearance.name||'Curiosité nocturne' }, favorites:storedFavorites, selectedEvent:'silences', activeFilter:'Tous', activeTab:'home', bookingAction:'Réserver', bookingConfirmed:false, desiredFeeling:'Inspiré·e', places:1, reminder:'1 heure avant', calendar:true, darkMode:localStorage.getItem('tempo-dark-mode')==='true', soundEnabled:false, customPanel:null, creationMode:'model', model:{scaleX:1,scaleY:1,rotate:0}, strokes:[], redoStrokes:[], brush:'pencil', brushSize:24, eraser:false, musicProvider:null, customAudioUrl:null, customAudioName:'', appearance:{ color:savedAppearance.color||'night', shape:savedAppearance.shape||'organic', texture:savedAppearance.texture||'grain', expression:savedAppearance.expression||'curious', sound:savedAppearance.sound||'mystery' } }
const app = document.querySelector('#app')
const escapeHTML = value => String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))
function navigateTo(screen){if(screen!==state.screen){state.navigationHistory.push(state.screen);state.screen=screen}}
function navigateBack(){if(state.screen<=3)state.screen=Math.max(1,state.screen-1);else state.screen=state.navigationHistory.pop()||4}

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
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    share: '<circle cx="18" cy="5" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="19" r="2"/><path d="m8 11 8-5M8 13l8 5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    rotate: '<path d="M20 7h-6V1"/><path d="M20 7a9 9 0 1 0 1 7"/>',
    route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h3a3 3 0 0 0 3-3V8a3 3 0 0 1 3-3"/>',
    moon: '<path d="M21 12.7A9 9 0 1 1 11.3 3 7 7 0 0 0 21 12.7z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/>',
    volumeOff: '<path d="M11 5 6 9H3v6h3l5 4V5zM22 9l-6 6M16 9l6 6"/>',
    palette: '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/><path d="M15 17c-2 0-2-3 0-3h2c3 0 4-2 4-4"/>',
    library: '<path d="M4 5h5v14H4zM10 5h5v14h-5zM17 4l3 14"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2 2 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5z"/>',
  }
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.sparkles}</svg>`
}

const progress = step => `<div class="progress" aria-label="Étape ${step} sur 3">${[1,2,3].map(n => `<span class="${n === step ? 'active' : ''}"></span>`).join('')}</div>`
const face = expression => `<span class="face ${expression}" aria-hidden="true"><i class="eye left"></i><i class="eye right"></i><i class="mouth"></i></span>`
const blob = (emotion, large = false) => `<span class="emotion-blob ${emotion.shape} ${large ? 'large' : ''}" style="--blob-color:${emotion.color};--blob-secondary:${emotion.secondary};--intensity:${state.intensity}">${face(emotion.face)}</span>`
const backButton = () => `<button class="icon-button" data-action="back" aria-label="Revenir à l’écran précédent">${icon('arrowLeft')}</button>`
const primaryButton = (label, action) => `<button class="primary-button" data-action="${action}"><span>${label}</span><span class="button-icon">${icon('arrowRight', 18)}</span></button>`

function drawingSvg(id='drawing',live=true){
  const colors=colorSets[state.appearance.color]||colorSets.night
  const width=stroke=>Math.round(stroke.size*({pencil:1,marker:1.45,watercolor:1.8,chalk:1.25}[stroke.brush]||1))
  const drawn=state.strokes.filter(stroke=>!stroke.eraser).map(stroke=>`<path class="brush-${stroke.brush}" d="${stroke.d}" stroke-width="${width(stroke)}" ${stroke.brush==='watercolor'?`filter="url(#watercolor-${id})"`:stroke.brush==='chalk'?`filter="url(#chalk-${id})" stroke-dasharray="8 3"`:''}/>`).join('')
  const erased=state.strokes.filter(stroke=>stroke.eraser).map(stroke=>`<path d="${stroke.d}" stroke="black" stroke-width="${stroke.size*2}"/>`).join('')
  return `<svg class="free-drawing" viewBox="0 0 350 390" preserveAspectRatio="none"><defs><linearGradient id="gradient-${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${colors[0]}"/><stop offset=".45" stop-color="${colors[1]}"/><stop offset="1" stop-color="${colors[2]}"/></linearGradient><filter id="watercolor-${id}"><feTurbulence baseFrequency=".025" numOctaves="3" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="7"/></filter><filter id="chalk-${id}"><feTurbulence baseFrequency=".8" numOctaves="2" result="noise"/><feBlend in="SourceGraphic" in2="noise" mode="multiply"/></filter><mask id="mask-${id}"><rect width="350" height="390" fill="white"/>${erased}${live?'<path data-live-eraser d="" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>':''}</mask></defs><g data-strokes mask="url(#mask-${id})" fill="none" stroke="url(#gradient-${id})" stroke-linecap="round" stroke-linejoin="round">${drawn}${live?'<path data-live-stroke d=""/>':''}</g></svg>`
}
function smoothPath(points){
  if(points.length<2)return `M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`
  let path=`M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`
  for(let index=1;index<points.length-1;index++){const current=points[index],next=points[index+1],midX=(current[0]+next[0])/2,midY=(current[1]+next[1])/2;path+=` Q ${current[0].toFixed(1)} ${current[1].toFixed(1)} ${midX.toFixed(1)} ${midY.toFixed(1)}`}
  const last=points[points.length-1];return `${path} L ${last[0].toFixed(1)} ${last[1].toFixed(1)}`
}

function activityCard() {
  const item = recommendations[state.intensity - 1]
  return `<article class="activity-card"><div class="activity-art" role="img" aria-label="Composition abstraite aux tons bleu et lavande"><i></i><i></i><span>${icon('sparkles',17)}</span></div><div class="activity-content"><span class="eyebrow">${item.eyebrow}</span><h3>${item.title}</h3><p>${item.description}</p><div class="meta"><span>${icon('clock',11)}18 h 30</span><span>${icon('pin',11)}1,8 km</span><span>${icon('ticket',11)}Dès 8 €</span></div></div></article>`
}

function screenOne() {
  const emotion = emotions.find(item => item.id === state.emotion)
  return `<section class="screen emotion-screen">
    <header class="topbar"><span class="logo">tempo<span>.</span></span>${progress(1)}<button class="skip" data-action="skip-onboarding">Passer</button></header>
    <div class="onboarding-step">1 sur 3 · Ton humeur</div>
    <div class="intro onboarding-intro"><p class="kicker">Commence par toi</p><h1>Comment tu te sens, là maintenant&nbsp;?</h1><p>Touche l’émotion qui te ressemble le plus. Il n’y a pas de mauvaise réponse.</p></div>
    <div class="wheel-wrap"><div class="wheel" role="group" aria-label="Choisir une émotion">${emotions.map((item,index) => `<button class="emotion-choice pos-${index} ${state.emotion && state.emotion !== item.id ? 'muted' : ''}" data-emotion="${item.id}" aria-label="Je me sens ${item.label.toLowerCase()}" aria-pressed="${state.emotion === item.id}"><span class="emotion-blob ${item.shape} ${state.emotion === item.id ? 'selected' : ''}" style="--blob-color:${item.color};--blob-secondary:${item.secondary}">${face(item.face)}</span><span class="emotion-label">${item.label}</span></button>`).join('')}</div><div class="wheel-center" aria-hidden="true"><span>ton humeur</span><b>maintenant</b></div></div>
    <div class="selection-copy">Aujourd’hui, je me sens <strong>${emotion.label.toLowerCase()}</strong>.</div>
    <div class="onboarding-actions">${primaryButton(`Continuer avec « ${emotion.label} »`,'next-onboarding')}</div>
  </section>`
}

function screenTwo() {
  const emotion = emotions.find(item => item.id === state.emotion) || emotions[4]
  return `<section class="screen intensity-screen">
    <header class="topbar">${backButton()}${progress(2)}<button class="skip" data-action="skip-onboarding">Passer</button></header>
    <div class="onboarding-step">2 sur 3 · L’intensité</div>
    <div class="intro compact onboarding-intro"><p class="kicker">Chaque nuance compte</p><h1>À quel point te sens-tu ${emotion.label.toLowerCase()}&nbsp;?</h1><p>Choisis simplement le niveau qui correspond à ton ressenti.</p></div>
    <div class="living-blob">${blob(emotion,true)}<span class="blob-halo"></span></div>
    <div class="intensity-block"><div class="intensity-track" role="radiogroup" aria-label="Intensité de l’émotion">${recommendations.map((item,index) => `<button role="radio" aria-checked="${state.intensity === index+1}" aria-label="${item.label}, niveau ${index+1} sur 5" class="${state.intensity === index+1 ? 'active' : ''}" data-intensity="${index+1}"><span style="--dot-size:${15+(index+1)*3}px"></span></button>`).join('')}</div><div class="intensity-copy"><strong>${recommendations[state.intensity-1].label}</strong><span>Intensité ${state.intensity} sur 5</span></div></div>
    <div class="onboarding-explanation">${icon('sparkles',16)}<p><strong>Tempo comprend la nuance.</strong><br>Ton émotion et son intensité aideront à choisir une sortie adaptée.</p></div>
    <div class="onboarding-actions flow">${primaryButton('Voir comment Tempo m’aide','next-onboarding')}<button class="text-link" data-action="back">Choisir une autre émotion</button></div>
  </section>`
}

function screenThree() {
  return `<section class="screen onboarding-final-screen">
    <header class="topbar">${backButton()}${progress(3)}<span></span></header>
    <div class="onboarding-step">3 sur 3 · Ta prochaine sortie</div>
    <div class="intro onboarding-intro"><p class="kicker">Tempo fait le lien</p><h1>Ton humeur devient une expérience.</h1><p>Tempo transforme ce que tu ressens en recommandations culturelles qui suivent vraiment ton rythme.</p></div>
    <div class="onboarding-story" aria-label="Ton humeur mène à une sortie adaptée">
      <div class="story-node mood-node">${blob(emotions.find(item=>item.id===state.emotion)||emotions[4])}<span>Ton humeur</span></div>
      <div class="story-line"><i></i>${icon('arrowRight',17)}</div>
      <div class="story-node tempo-node">${tempoBlob('onboarding-tempo-blob')}<span>Ton Tempo</span></div>
      <div class="story-line"><i></i>${icon('arrowRight',17)}</div>
      <div class="story-node outing-node"><div class="outing-art visual-water">${icon('sparkles')}</div><span>Ta sortie</span></div>
    </div>
    <article class="onboarding-result"><span class="result-icon">${icon('check',18)}</span><div><p class="kicker">Une recommandation, expliquée</p><h2>Une sortie adaptée à ton ressenti</h2><p>Tu vois pourquoi elle te correspond, avant même de choisir.</p></div></article>
    <div class="onboarding-promise"><span>${icon('compass',18)}Culture</span><span>${icon('heart',18)}Émotion</span><span>${icon('sparkles',18)}Découverte</span></div>
    <div class="onboarding-actions">${primaryButton('Entrer dans Tempo','enter-app')}<button class="secondary-button" data-action="back">Revenir en arrière</button></div>
  </section>`
}

const tempoBlob = (className='') => `<div class="tempo-blob color-${state.appearance.color} shape-${state.appearance.shape} texture-${state.appearance.texture} pose-${state.appearance.expression} ${className}" aria-label="Émotion ${escapeHTML(state.profile.name)}"><i class="blob-light"></i><i class="blob-shadow"></i><span class="blob-glow"></span><b class="blob-expression expression-${state.appearance.expression}"><u></u><u></u><em></em></b><s class="limb arm-left"></s><s class="limb arm-right"></s><s class="limb leg-left"></s><s class="limb leg-right"></s></div>`
const createdEmotion = (className='') => {
  if(state.creationMode!=='free'||!state.strokes.some(stroke=>!stroke.eraser))return `<div class="created-emotion ${className}" style="--model-x:${state.model.scaleX};--model-y:${state.model.scaleY};--model-r:${state.model.rotate}deg">${tempoBlob()}</div>`
  return `<div class="created-emotion free-created ${className}">${drawingSvg('profile',false)}<b class="blob-expression expression-${state.appearance.expression}"><u></u><u></u><em></em></b></div>`
}
const favoriteButton = id => `<button class="favorite-button ${state.favorites.includes(id) ? 'active' : ''}" data-favorite="${id}" aria-label="${state.favorites.includes(id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}" aria-pressed="${state.favorites.includes(id)}">${icon('heart',18)}</button>`
const appHeader = (title='', back=false) => `<header class="app-header">${back ? backButton() : '<span class="logo">tempo<span>.</span></span>'}<div>${title ? `<strong>${title}</strong>` : ''}</div><div class="header-actions"><button class="icon-button ${state.soundEnabled?'sound-on':''}" data-action="toggle-sound" aria-label="${state.soundEnabled?'Arrêter':'Écouter'} le son de cette émotion" aria-pressed="${state.soundEnabled}">${icon(state.soundEnabled?'volume':'volumeOff',18)}</button><button class="icon-button" data-action="toggle-dark" aria-label="${state.darkMode?'Désactiver':'Activer'} le mode sombre" aria-pressed="${state.darkMode}">${icon(state.darkMode?'sun':'moon',18)}</button></div></header>`

let audioContext=null,audioNodes=[]
function stopEmotionSound(){
  audioNodes.forEach(node=>{try{node.pause?.();node.stop?.();node.disconnect?.()}catch(_){}});audioNodes=[];state.soundEnabled=false
}
function startEmotionSound(){
  try {
    stopEmotionSound()
    if(state.customAudioUrl){const player=new Audio(state.customAudioUrl);player.loop=true;player.volume=.38;player.play();audioNodes.push(player);state.soundEnabled=true;return}
    audioContext ||= new (window.AudioContext||window.webkitAudioContext)();audioContext.resume?.()
    const master=audioContext.createGain();master.gain.value=.065;master.connect(audioContext.destination);audioNodes.push(master)
    const sound=state.appearance.sound||({serene:'waves',happy:'chimes',angry:'thunder',sad:'rain',worried:'wind',shy:'breeze',curious:'mystery',confused:'mystery'}[state.appearance.expression]||'mystery')
    const oscillator=(frequency,type='sine',volume=.22)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type=type;osc.frequency.value=frequency;gain.gain.value=volume;osc.connect(gain).connect(master);osc.start();audioNodes.push(osc,gain)}
    const noise=(filterFrequency=600,volume=.3)=>{const length=audioContext.sampleRate*3,buffer=audioContext.createBuffer(1,length,audioContext.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<length;i++)data[i]=Math.random()*2-1;const source=audioContext.createBufferSource(),filter=audioContext.createBiquadFilter(),gain=audioContext.createGain();source.buffer=buffer;source.loop=true;filter.type='lowpass';filter.frequency.value=filterFrequency;gain.gain.value=volume;source.connect(filter).connect(gain).connect(master);source.start();audioNodes.push(source,filter,gain);return gain}
    if(sound==='waves'){const gain=noise(520,.32);const lfo=audioContext.createOscillator(),depth=audioContext.createGain();lfo.frequency.value=.13;depth.gain.value=.22;lfo.connect(depth).connect(gain.gain);lfo.start();audioNodes.push(lfo,depth)}
    else if(sound==='rain'){noise(1800,.24);oscillator(146,'sine',.08)}
    else if(sound==='thunder'){noise(180,.48);oscillator(48,'sine',.28)}
    else if(sound==='chimes'){oscillator(523,'sine',.12);oscillator(659,'sine',.08);oscillator(784,'sine',.06)}
    else if(sound==='wind'||sound==='breeze'){noise(sound==='wind'?420:900,sound==='wind'?.3:.16);oscillator(196,'sine',.06)}
    else {oscillator(220,'sine',.11);oscillator(330,'triangle',.05);noise(1000,.07)}
    state.soundEnabled=true
  } catch (_) { state.soundEnabled=false }
}

function saveAppearance(){
  localStorage.setItem('tempo-appearance',JSON.stringify({...state.appearance,name:state.profile.name}))
}
const bottomNavigation = () => `<nav class="bottom-nav" aria-label="Navigation principale">${[
  ['home','Accueil','home',4],['explore','Explorer','search',7],['favorites','Favoris','heart',10],['profile','Profil','user',11]
].map(([tab,label,ico,target]) => `<button class="${state.activeTab === tab ? 'active' : ''}" data-tab="${tab}" data-screen="${target}" aria-current="${state.activeTab === tab ? 'page' : 'false'}">${icon(ico,19)}<span>${label}</span></button>`).join('')}</nav>`

function miniEventCard(event) {
  return `<article class="mini-event" data-event="${event.id}" tabindex="0"><div class="event-visual ${event.visual}">${favoriteButton(event.id)}<span>${event.price}</span></div><p>${event.category}</p><h3>${event.title}</h3><div><span>${icon('clock',12)}${event.date.replace('Aujourd’hui, ','')}</span><span>${event.venue}</span></div></article>`
}

function homeScreen() {
  return `<section class="screen app-screen home-screen">${appHeader()}<div class="home-greeting"><div><p>Bonjour Alex</p><h1>Quel est ton rythme aujourd’hui&nbsp;?</h1><span>Laisse ton humeur choisir ta prochaine expérience.</span></div><div class="avatar">A</div></div>
    <article class="my-tempo-card"><div class="tempo-orbit">${tempoBlob('home-blob')}</div><div class="tempo-card-copy"><p class="kicker">Mon Tempo</p><h2>Illustre ton ressenti actuel</h2><p>Quelques gestes suffisent pour créer une émotion qui te ressemble aujourd’hui.</p><button class="light-button" data-screen="5"><span>Créer mon émotion</span>${icon('arrowRight',16)}</button></div></article>
    <section class="home-section"><div class="list-heading"><h2>Près de toi ce soir</h2><button data-screen="7">Tout voir</button></div><div class="mini-events">${[culturalEvents[1],culturalEvents[4],culturalEvents[5]].map(miniEventCard).join('')}</div></section>
    <section class="last-tempo"><div class="last-mini-blob">${tempoBlob()}</div><div><p class="kicker">Ton dernier Tempo · Aujourd’hui</p><h3>${escapeHTML(state.profile.name)}</h3><button data-screen="7">Revoir mes recommandations ${icon('arrowRight',14)}</button></div></section>${bottomNavigation()}</section>`
}

const emotionLibrary=[
  {name:'Curiosité nocturne',color:'night',shape:'organic',texture:'grain',expression:'curious',sound:'mystery'},
  {name:'Énergie solaire',color:'sun',shape:'burst',texture:'smooth',expression:'happy',sound:'chimes'},
  {name:'Évasion calme',color:'sage',shape:'round',texture:'cloud',expression:'serene',sound:'waves'},
  {name:'Orage intérieur',color:'coral',shape:'spiky',texture:'grain',expression:'angry',sound:'thunder'},
  {name:'Mélancolie douce',color:'night',shape:'droop',texture:'watercolor',expression:'sad',sound:'rain'},
  {name:'Timidité rose',color:'lavender',shape:'soft',texture:'watercolor',expression:'shy',sound:'breeze'},
]
const expressionChoices=[['happy','Joyeuse'],['sad','Triste'],['angry','Fâchée'],['confused','Confuse'],['pleased','Satisfaite'],['pain','Peinée'],['scared','Effrayée'],['serious','Sérieuse'],['silly','Espiègle'],['flirty','Charmeuse'],['nervous','Nerveuse'],['tired','Fatiguée'],['surprised','Surprise'],['irritated','Irritée'],['rage','Furieuse'],['disgusted','Dégoûtée'],['confident','Confiante'],['concerned','Préoccupée'],['curious','Curieuse'],['pouty','Boudaire'],['bored','Ennuyée'],['laughing','Hilare'],['embarrassed','Gênée'],['calm','Calme'],['crying','En pleurs'],['devious','Malicieuse'],['pensive','Pensive'],['excited','Émerveillée'],['triumph','Triomphante']]
const expressionSounds={calm:'waves',pleased:'waves',confident:'waves',happy:'chimes',laughing:'chimes',excited:'chimes',triumph:'chimes',angry:'thunder',rage:'thunder',irritated:'thunder',sad:'rain',crying:'rain',pensive:'rain',nervous:'wind',scared:'wind',concerned:'wind',curious:'mystery',confused:'mystery',silly:'mystery'}
const colorSets={night:['#425D9C','#9C82DF','#E9B5CC'],sun:['#FFD85A','#FFA178','#FF8A67'],sage:['#A9C878','#748DD5','#C9A8F4'],coral:['#FF8A67','#E9B5CC','#9C82DF'],lavender:['#C9A8F4','#9C82DF','#748DD5'],rose:['#F2C6D8','#E989B4','#B98BD4'],ocean:['#75D5D0','#4C9DD8','#425D9C'],mint:['#D8EAA8','#8ED1B2','#74AFC4'],sunset:['#FFD85A','#FF8A67','#9C82DF'],earth:['#D9B58C','#A9C878','#7D6B5D']}

function customizationPanel() {
  const panel=state.customPanel
  if(!panel) return ''
  if(panel==='library') return `<section class="custom-panel library-panel"><div class="panel-heading"><div><p class="kicker">Besoin d’inspiration&nbsp;?</p><h2>Bibliothèque d’émotions</h2></div><button data-action="close-panel" aria-label="Fermer">×</button></div><div class="emotion-library">${emotionLibrary.map((item,index)=>`<button data-library="${index}"><span class="library-blob color-${item.color} shape-${item.shape} texture-${item.texture}"></span><strong>${item.name}</strong><small>Utiliser comme point de départ</small></button>`).join('')}</div></section>`
  const content={
    color:`<div class="choice-grid colors color-gallery">${[['night','Nuit'],['sun','Solaire'],['sage','Sauge'],['coral','Corail'],['lavender','Lavande'],['rose','Rose'],['ocean','Océan'],['mint','Menthe'],['sunset','Coucher'],['earth','Terre']].map(([value,label])=>`<button class="${state.appearance.color===value?'active':''}" data-appearance="color" data-value="${value}"><i class="color-${value}"></i><span>${label}</span></button>`).join('')}</div>`,
    shape:`<div class="choice-grid shapes scroll-choices">${[['organic','Organique'],['round','Ronde'],['wide','Étendue'],['burst','Vibrante'],['soft','Douce'],['spiky','Tendue'],['droop','Tombante']].map(([value,label])=>`<button class="${state.appearance.shape===value?'active':''}" data-appearance="shape" data-value="${value}"><i class="shape-${value}"></i><span>${label}</span></button>`).join('')}</div>`,
    texture:`<div class="choice-grid textures">${[['smooth','Lisse'],['grain','Granuleux'],['cloud','Nébuleux'],['watercolor','Aquarelle']].map(([value,label])=>`<button class="${state.appearance.texture===value?'active':''}" data-appearance="texture" data-value="${value}"><i class="texture-${value}"></i><span>${label}</span></button>`).join('')}</div>`,
    expression:`<div class="expression-picker"><label><span>Choisir dans la liste</span><select data-expression-select>${expressionChoices.map(([value,label])=>`<option value="${value}" ${state.appearance.expression===value?'selected':''}>${label}</option>`).join('')}</select></label><div class="expression-gallery">${expressionChoices.map(([value,label])=>`<button class="${state.appearance.expression===value?'active':''}" data-expression="${value}"><i><b class="blob-expression expression-${value}"><u></u><u></u><em></em></b></i><span>${label}</span></button>`).join('')}</div></div>`,
    name:`<label class="emotion-name"><span>Comment s’appelle cette émotion&nbsp;?</span><input data-emotion-name maxlength="32" value="${escapeHTML(state.profile.name)}" placeholder="Ex. Curiosité nocturne"><small>Tu pourras toujours la renommer plus tard.</small></label>`,
    sound:`<div class="sound-picker"><p>Choisis une ambiance créée par Tempo</p><div class="sound-presets">${[['waves','Vagues'],['rain','Pluie'],['thunder','Orage'],['chimes','Carillons'],['wind','Vent'],['mystery','Nuit']].map(([value,label])=>`<button class="${state.appearance.sound===value&&!state.customAudioUrl?'active':''}" data-sound="${value}">${icon('volume',16)}<span>${label}</span></button>`).join('')}</div><label class="audio-upload">${icon('plus',18)}<span><strong>Choisir mon propre son</strong><small>${state.customAudioName||'MP3, WAV ou M4A depuis cet appareil'}</small></span><input type="file" data-audio-file accept="audio/*"></label><div class="music-services"><p>Ou retrouver ta musique</p>${[['spotify','Spotify'],['apple','Apple Music'],['deezer','Deezer']].map(([provider,label])=>`<button data-provider="${provider}" class="${state.musicProvider===provider?'connected':''}"><i class="provider-${provider}"></i><span><strong>${label}</strong><small>${state.musicProvider===provider?'Connecté en mode démo':'Connecter (démo)'}</small></span></button>`).join('')}</div><small class="prototype-note">La connexion est simulée dans ce prototype. Une connexion réelle nécessitera l’autorisation sécurisée du service musical.</small></div>`,
  }
  const titles={color:'Choisis sa couleur',shape:'Dessine sa forme',texture:'Ajoute une matière',expression:'Donne-lui une expression',name:'Nomme ton émotion',sound:'Associe-lui un son'}
  return `<section class="custom-panel"><div class="panel-heading"><h2>${titles[panel]}</h2><button data-action="close-panel" aria-label="Fermer">×</button></div>${content[panel]}</section>`
}

function composeMoodScreen() {
  return `<section class="screen app-screen compose-screen">${appHeader('Composer',true)}
    <div class="screen-title"><p class="kicker">Ton geste, ton ressenti</p><h1>Illustre ton ressenti actuel</h1><p>Personnalise-le, puis modèle ou dessine librement ce que tu ressens.</p></div>
    <label class="direct-emotion-name"><span>Nom de mon émotion</span><input data-emotion-name maxlength="32" value="${escapeHTML(state.profile.name)}" placeholder="Ex. Curiosité nocturne">${icon('edit',17)}</label>
    <div class="composer-helpers"><button class="library-trigger" data-panel="library">${icon('library',18)}<span><strong>Besoin d’un point de départ&nbsp;?</strong><small>Bibliothèque d’émotions</small></span>${icon('arrowRight',16)}</button><button class="emotion-sound-button ${state.soundEnabled?'active':''}" data-panel="sound">${icon(state.soundEnabled?'volume':'volumeOff',18)}<span>Son<small>${state.customAudioName||state.appearance.sound}</small></span></button></div>${customizationPanel()}
    <div class="creation-toolbar four-tools" aria-label="Personnaliser l’émotion"><button class="${state.customPanel==='color'?'active':''}" data-panel="color">${icon('palette')}<span>Couleur</span></button><button class="${state.customPanel==='shape'?'active':''}" data-panel="shape">${icon('waves')}<span>Forme</span></button><button class="${state.customPanel==='texture'?'active':''}" data-panel="texture">${icon('sparkles')}<span>Matière</span></button><button class="${state.customPanel==='expression'?'active':''}" data-panel="expression">${icon('heart')}<span>Visage</span></button></div>
    <div class="creation-mode" role="radiogroup" aria-label="Mode de création"><button class="${state.creationMode==='model'?'active':''}" data-mode="model" aria-pressed="${state.creationMode==='model'}">${icon('waves',17)}<span><strong>Modeler la forme</strong><small>Étire et déforme la forme choisie</small></span></button><button class="${state.creationMode==='free'?'active':''}" data-mode="free" aria-pressed="${state.creationMode==='free'}">${icon('edit',17)}<span><strong>Dessin libre</strong><small>Trace une forme avec ton geste</small></span></button></div>
    ${state.creationMode==='free'?`<div class="brush-studio"><div class="brush-row" role="toolbar" aria-label="Outils de dessin">${[['pencil','Crayon'],['marker','Feutre'],['watercolor','Pinceau'],['chalk','Craie']].map(([brush,label])=>`<button class="${state.brush===brush&&!state.eraser?'active':''}" data-brush="${brush}"><i class="brush-icon ${brush}"></i><span>${label}</span></button>`).join('')}<button class="eraser-tool ${state.eraser?'active':''}" data-action="toggle-eraser">${icon('rotate',16)}<span>Gomme</span></button></div><label class="brush-size"><span>Fin</span><input type="range" min="8" max="64" value="${state.brushSize}" data-brush-size aria-label="Taille du pinceau"><output>${state.brushSize}</output><span>Large</span></label></div>`:''}
    <div class="canvas-instruction">${state.creationMode==='model'?'<strong>Touche puis déplace</strong><span>Horizontalement pour l’étirer · verticalement pour l’affiner</span>':'<strong>Dessine en maintenant le doigt</strong><span>Ton tracé devient directement ta forme</span>'}</div>
    <div class="mood-canvas mode-${state.creationMode}" id="mood-canvas" tabindex="0" aria-label="${state.creationMode==='model'?'Fais glisser pour modeler la forme':'Dessine librement ta forme'}">${state.creationMode==='model'?`<div class="model-transform" style="--model-x:${state.model.scaleX};--model-y:${state.model.scaleY};--model-r:${state.model.rotate}deg">${tempoBlob('canvas-blob')}</div>`:`${drawingSvg('composer',true)}<b class="free-face blob-expression expression-${state.appearance.expression}"><u></u><u></u><em></em></b>`}<div class="sound-wave ${state.soundEnabled?'active':''}"><i></i><i></i><i></i><i></i></div>${state.creationMode==='free'&&!state.strokes.length?'<p><strong>Commence ton dessin ici</strong><br><span>Tu peux recommencer autant de fois que tu veux</span></p>':''}</div>
    <div class="canvas-actions"><div class="history-tools"><button data-action="undo-stroke" aria-label="Annuler le dernier trait" ${!state.strokes.length?'disabled':''}>${icon('arrowLeft',16)}<span>Annuler</span></button><button data-action="redo-stroke" aria-label="Rétablir le trait" ${!state.redoStrokes.length?'disabled':''}>${icon('arrowRight',16)}<span>Rétablir</span></button></div><button data-action="reset-canvas">${icon('rotate',16)}Effacer</button><button class="${state.soundEnabled?'active':''}" data-action="toggle-sound">${icon(state.soundEnabled?'volume':'volumeOff',16)}${state.soundEnabled?'Arrêter':'Écouter'}</button></div>
    <div class="bottom-actions flow">${primaryButton(`Révéler « ${escapeHTML(state.profile.name)} »`,'reveal')}<button class="secondary-button" data-action="reset-mood">Recommencer</button></div></section>`
}

function profileScreen() {
  return `<section class="screen app-screen profile-screen">${appHeader('Ton Tempo du moment',true)}<div class="profile-hero">${createdEmotion('profile-created')}<p class="kicker">Création du jour</p><h1>${escapeHTML(state.profile.name)}</h1><label class="profile-name-editor"><span>Renommer cette émotion</span><input data-emotion-name maxlength="32" value="${escapeHTML(state.profile.name)}">${icon('edit',16)}</label><p>Cette émotion unique réunit la forme, les couleurs, la matière et l’expression que tu as choisies.</p></div>
    <article class="tempo-understood profile-summary"><span>${icon('sparkles')}</span><div><h2>Ton émotion a pris forme</h2><p>Tempo utilise l’univers visuel et sonore que tu as créé pour proposer des expériences culturelles qui lui ressemblent.</p></div></article><p class="privacy-note">${icon('check',14)} Cette création sert uniquement à personnaliser tes recommandations culturelles.</p>
    <div class="bottom-actions flow">${primaryButton('Voir mes recommandations','recommendations')}<button class="secondary-button" data-screen="5">Recomposer mon humeur</button></div></section>`
}

function recommendationCard(event,index) {
  return `<article class="recommendation-card variant-${index}" data-event="${event.id}" tabindex="0"><div class="rec-visual ${event.visual}"><span class="compatibility">${event.compatibility} %<small>avec ton Tempo</small></span>${favoriteButton(event.id)}<i></i><i></i></div><div class="rec-copy"><p class="kicker">${event.category}</p><h2>${event.title}</h2><span class="venue">${event.venue}</span><div class="rec-meta"><span>${icon('clock',13)}${event.date}</span><span>${icon('pin',13)}${event.distance}</span><b>${event.price}</b></div><p class="reason">${icon('sparkles',14)}${escapeHTML(event.reason)}</p><button class="discover-button" data-event="${event.id}">Découvrir ${icon('arrowRight',15)}</button></div></article>`
}

function emptyState(type='recommendations') {
  const favorite = type === 'favorites'
  return `<div class="empty-state">${tempoBlob('sleepy-blob')}<h1>${favorite ? 'Tes prochaines découvertes apparaîtront ici' : 'Aucun événement ne suit encore ce Tempo'}</h1><p>${favorite ? 'Sauvegarde une sortie pour la retrouver quand ton rythme s’y prête.' : 'Élargis la distance ou choisis un autre horaire pour découvrir davantage de propositions.'}</p><button class="primary-button" data-screen="${favorite ? 7 : 5}"><span>${favorite ? 'Explorer les événements' : 'Recomposer mon humeur'}</span><span class="button-icon">${icon('arrowRight')}</span></button></div>`
}

function errorState() {
  return `<div class="empty-state error-state">${tempoBlob('sleepy-blob')}<h1>Tempo a perdu le rythme</h1><p>Les recommandations n’ont pas pu être chargées. Vérifie ta connexion et réessaie.</p><button class="primary-button" data-screen="7"><span>Réessayer</span><span class="button-icon">${icon('rotate')}</span></button><button class="secondary-button" data-screen="4">Retour à l’accueil</button></div>`
}

function recommendationsScreen() {
  const filters=['Tous','Aujourd’hui','Gratuit','À moins de 3 km','Calme','Insolite']
  const recommendationProfile=emotionRecommendationProfile()
  let shown = personalizedRecommendations().filter(event => state.activeFilter === 'Tous' || state.activeFilter === 'Aujourd’hui' && event.date.includes('Aujourd’hui') || state.activeFilter === 'Gratuit' && event.price === 'Gratuit' || state.activeFilter === 'À moins de 3 km' && parseFloat(event.distance.replace(',','.')) < 3 || state.activeFilter === 'Calme' && event.tags.includes('Calme') || state.activeFilter === 'Insolite' && event.tags.includes('Insolite'))
  return `<section class="screen app-screen recommendations-screen">${appHeader('Pour ton Tempo',true)}<div class="rec-heading"><p class="kicker">${escapeHTML(state.profile.name)} · Paris · Ce soir</p><h1>Des expériences qui ressemblent à ton émotion</h1><p class="personalized-summary">Tempo privilégie ${recommendationProfile.summary}.</p></div><article class="profile-strip">${tempoBlob('strip-blob')}<div><strong>${escapeHTML(state.profile.name)}</strong><span>${expressionChoices.find(([value])=>value===state.appearance.expression)?.[1]||'Expression personnelle'} · recommandations recalculées</span></div><button data-screen="5">Modifier</button></article><div class="filter-row">${filters.map(filter=>`<button class="filter-chip ${state.activeFilter===filter?'active':''}" data-filter="${filter}" aria-pressed="${state.activeFilter===filter}">${filter}</button>`).join('')}</div><div class="recommendation-list">${shown.length ? shown.map(recommendationCard).join('') : emptyState()}</div>${bottomNavigation()}</section>`
}

function eventDetailScreen() {
  const event = personalizedRecommendations().find(item=>item.id===state.selectedEvent) || personalizedRecommendations()[0]
  return `<section class="app-screen event-page"><div class="event-detail-hero ${event.visual}"><div class="event-floating-actions">${backButton()}<span></span>${favoriteButton(event.id)}<button class="icon-button" aria-label="Partager">${icon('share')}</button></div><div class="liquid l1"></div><div class="liquid l2"></div><span class="compatibility large">${event.compatibility} % avec ton Tempo</span></div><div class="event-body"><p class="kicker">${event.category}</p><h1>${event.title}</h1><p class="venue-big">${event.venue}</p><div class="info-grid"><span>${icon('clock')}<b>${event.date}</b></span><span>${icon('pause')}<b>Durée · ${event.duration}</b></span><span>${icon('ticket')}<b>${event.price}</b></span><span>${icon('pin')}<b>${event.distance}</b></span></div><section><h2>Pourquoi pour « ${escapeHTML(state.profile.name)} »&nbsp;?</h2><p>${escapeHTML(event.reason.replace(`Pour « ${state.profile.name} » : `,''))}</p><div class="tag-row">${event.tags.map(tag=>`<span>${tag}</span>`).join('')}</div></section><section><h2>À propos</h2><p>${event.description} La projection se déroule dans une salle de quarante places avec une lumière tamisée.</p></section><section class="small-testimonials"><h2>Ce que les autres ont ressenti</h2><article><b>Lina</b><p>« Une sortie douce qui ne m’a pas demandé trop d’énergie. »</p></article><article><b>Adam</b><p>« J’ai apprécié le calme du lieu et le rythme du film. »</p></article></section><article class="location-card"><div class="map-lines"><i></i><i></i><span>${icon('pin')}</span></div><div><p class="kicker">À 18 min</p><h3>${event.venue.split('—')[0]}</h3><p>12 rue fictive, Paris 11e</p><button>${icon('route',16)}Voir l’itinéraire</button></div></article></div><div class="booking-bar"><div><span>À partir de</span><strong>${event.price}</strong></div><button data-screen="9">Choisir cette sortie ${icon('arrowRight',17)}</button></div></section>`
}

function bookingScreen() {
  const event = culturalEvents.find(item=>item.id===state.selectedEvent) || culturalEvents[0]
  if(state.bookingConfirmed) return confirmationScreen(event)
  return `<section class="screen app-screen booking-screen">${appHeader('Finaliser',true)}<div class="screen-title"><p class="kicker">Dernière étape</p><h1>Ta sortie est presque prête</h1></div><article class="booking-summary"><div class="summary-visual ${event.visual}"></div><div><p>${event.category}</p><h2>${event.title}</h2><span>${event.venue}</span><strong>${event.date} · ${event.price}</strong></div><span class="summary-tempo">${tempoBlob()}${escapeHTML(state.profile.name)}</span></article><div class="action-choices">${['Réserver','Sauvegarder','Partager'].map(choice=>`<button class="${state.bookingAction===choice?'active':''}" data-booking-action="${choice}" aria-pressed="${state.bookingAction===choice}">${icon(choice==='Réserver'?'ticket':choice==='Sauvegarder'?'bookmark':'share')}<span>${choice}</span></button>`).join('')}</div><div class="booking-form"><label><span>Nombre de places</span><div class="stepper"><button data-place="minus" aria-label="Retirer une place">−</button><b>${state.places}</b><button data-place="plus" aria-label="Ajouter une place">+</button></div></label><label><span>Rappel avant l’événement</span><select data-reminder><option>1 heure avant</option><option>2 heures avant</option><option>La veille</option></select></label><label><span>Ajouter au calendrier</span><button class="switch ${state.calendar?'active':''}" data-action="toggle-calendar" role="switch" aria-checked="${state.calendar}"><i></i></button></label></div><p class="partner-note">${icon('route',15)} La réservation sera finalisée sur le site du partenaire.</p><div class="bottom-actions">${primaryButton('Continuer vers le partenaire','finish-booking')}</div></section>`
}

function confirmationScreen(event) {
  return `<section class="screen app-screen final-screen"><div class="final-wave">${tempoBlob('star-blob')}</div><p class="kicker">Sortie ajoutée</p><h1>Ta sortie suit maintenant ton Tempo.</h1><p>Les Silences de l’eau a été ajouté à tes sorties.</p><article class="confirmed-event"><span>${icon('calendar')}</span><div><strong>${event.date}</strong><p>${event.venue}</p></div><button>${icon('plus',17)}Calendrier</button></article><section class="feeling-choice"><h2>Comment souhaites-tu te sentir après cette expérience&nbsp;?</h2><div>${['Plus calme','Inspiré·e','Rechargé·e'].map(feeling=>`<button class="${state.desiredFeeling===feeling?'active':''}" data-feeling="${feeling}" aria-pressed="${state.desiredFeeling===feeling}">${feeling}</button>`).join('')}</div></section><div class="bottom-actions flow"><button class="secondary-button">Ajouter au calendrier</button>${primaryButton('Retour à l’accueil','go-home')}</div></section>`
}

function favoritesScreen() {
  const items=culturalEvents.filter(event=>state.favorites.includes(event.id))
  return `<section class="screen app-screen favorites-screen">${appHeader('Favoris')}<div class="screen-title"><p class="kicker">À garder pour le bon moment</p><h1>Mes favoris</h1></div>${items.length?`<div class="recommendation-list">${items.map(recommendationCard).join('')}</div>`:emptyState('favorites')}${bottomNavigation()}</section>`
}

function placeholderScreen() {
  return `<section class="screen app-screen placeholder-screen">${appHeader(state.activeTab==='profile'?'Profil':'Explorer')}<div class="profile-hero">${tempoBlob('profile-blob')}<p class="kicker">Bientôt dans Tempo</p><h1>${state.activeTab==='profile'?'Ton espace personnel':'Explore à ton rythme'}</h1><p>Cette section sera enrichie dans la prochaine étape du projet.</p><button class="primary-button" data-screen="4"><span>Retour à l’accueil</span><span class="button-icon">${icon('arrowRight')}</span></button>${state.activeTab==='profile'?'<button class="secondary-button replay-button" data-action="replay-onboarding">Revoir l’onboarding</button>':''}</div>${bottomNavigation()}</section>`
}

function render(shouldScroll=true) {
  app.className = `app-shell screen-${state.screen} ${state.darkMode?'dark':''}`
  const screens={1:screenOne,2:screenTwo,3:screenThree,4:homeScreen,5:composeMoodScreen,6:profileScreen,7:recommendationsScreen,8:eventDetailScreen,9:bookingScreen,10:favoritesScreen,11:placeholderScreen}
  app.innerHTML = `<div class="ambient ambient-one"></div><div class="ambient ambient-two"></div>${(screens[state.screen] || homeScreen)()}`
  if(shouldScroll)window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

app.addEventListener('click', event => {
  const screenBeforeClick=state.screen
  const emotionButton = event.target.closest('[data-emotion]')
  const intensityButton = event.target.closest('[data-intensity]')
  const favorite = event.target.closest('[data-favorite]')
  const eventCard = event.target.closest('[data-event]')
  const screenButton = event.target.closest('[data-screen]')
  const filter = event.target.closest('[data-filter]')
  const bookingAction = event.target.closest('[data-booking-action]')
  const feeling = event.target.closest('[data-feeling]')
  const place = event.target.closest('[data-place]')
  const panel = event.target.closest('[data-panel]')
  const appearance = event.target.closest('[data-appearance]')
  const library = event.target.closest('[data-library]')
  const mode = event.target.closest('[data-mode]')
  const sound = event.target.closest('[data-sound]')
  const provider = event.target.closest('[data-provider]')
  const brush = event.target.closest('[data-brush]')
  const expression = event.target.closest('[data-expression]')
  const actionButton = event.target.closest('[data-action]')
  if (emotionButton) state.emotion = emotionButton.dataset.emotion
  else if (intensityButton) state.intensity = Number(intensityButton.dataset.intensity)
  else if (favorite) {
    event.stopPropagation()
    const id=favorite.dataset.favorite
    state.favorites=state.favorites.includes(id)?state.favorites.filter(item=>item!==id):[...state.favorites,id]
    localStorage.setItem('tempo-favorites',JSON.stringify(state.favorites))
  }
  else if (eventCard) { state.selectedEvent=eventCard.dataset.event; navigateTo(8) }
  else if (screenButton) { navigateTo(Number(screenButton.dataset.screen)); if(screenButton.dataset.tab)state.activeTab=screenButton.dataset.tab; if(state.screen===4)state.activeTab='home' }
  else if (filter) state.activeFilter=filter.dataset.filter
  else if (bookingAction) state.bookingAction=bookingAction.dataset.bookingAction
  else if (feeling) { state.desiredFeeling=feeling.dataset.feeling; localStorage.setItem('tempo-desired-feeling',state.desiredFeeling) }
  else if (place) state.places=Math.max(1,Math.min(6,state.places+(place.dataset.place==='plus'?1:-1)))
  else if (panel) state.customPanel=state.customPanel===panel.dataset.panel?null:panel.dataset.panel
  else if (appearance) { const kind=appearance.dataset.appearance,value=appearance.dataset.value; state.appearance[kind]=value; if(kind==='expression')state.appearance.sound={serene:'waves',happy:'chimes',angry:'thunder',sad:'rain',worried:'wind',shy:'breeze',curious:'mystery',confused:'mystery'}[value]||'mystery'; if(state.soundEnabled)startEmotionSound(); saveAppearance() }
  else if (library) { const preset=emotionLibrary[Number(library.dataset.library)]; state.profile.name=preset.name; state.appearance={color:preset.color,shape:preset.shape,texture:preset.texture,expression:preset.expression,sound:preset.sound}; state.customPanel=null; if(state.soundEnabled)startEmotionSound(); saveAppearance() }
  else if (mode) { state.creationMode=mode.dataset.mode; stopEmotionSound() }
  else if (sound) { state.appearance.sound=sound.dataset.sound; if(state.customAudioUrl)URL.revokeObjectURL(state.customAudioUrl);state.customAudioUrl=null;state.customAudioName='';state.musicProvider=null;saveAppearance();startEmotionSound() }
  else if (provider) { stopEmotionSound();state.musicProvider=provider.dataset.provider;state.customAudioName='';state.customAudioUrl=null }
  else if (brush) { state.brush=brush.dataset.brush;state.eraser=false }
  else if (expression) { state.appearance.expression=expression.dataset.expression;state.appearance.sound=expressionSounds[state.appearance.expression]||'mystery';if(state.soundEnabled)startEmotionSound();saveAppearance() }
  else if (actionButton) {
    const action = actionButton.dataset.action
    if (action === 'next' || action === 'skip') state.screen++
    if (action === 'next-onboarding') state.screen=Math.min(3,state.screen+1)
    if (action === 'skip-onboarding' || action === 'enter-app') { state.screen=4;state.navigationHistory=[];state.activeTab='home';localStorage.setItem('tempo-onboarding-done','true') }
    if (action === 'back') navigateBack()
    if (action === 'restart') { state.screen = 1; state.confirmed = false }
    if (action === 'save') state.saved = !state.saved
    if (action === 'confirm') state.confirmed ? navigateTo(4) : state.confirmed = true
    if (action === 'reveal') navigateTo(6)
    if (action === 'recommendations') { navigateTo(7);state.activeTab='explore' }
    if (action === 'reset-mood') { stopEmotionSound(); state.profile={ name:'Curiosité nocturne' }; state.appearance={color:'night',shape:'organic',texture:'grain',expression:'curious',sound:'mystery'}; state.model={scaleX:1,scaleY:1,rotate:0};state.strokes=[];state.redoStrokes=[];state.brush='pencil';state.brushSize=24;state.eraser=false;saveAppearance() }
    if (action === 'toggle-calendar') state.calendar=!state.calendar
    if (action === 'finish-booking') { state.bookingConfirmed=true; if(!state.favorites.includes(state.selectedEvent))state.favorites.push(state.selectedEvent); localStorage.setItem('tempo-favorites',JSON.stringify(state.favorites)) }
    if (action === 'go-home') { state.screen=4;state.navigationHistory=[];state.activeTab='home';state.bookingConfirmed=false }
    if (action === 'replay-onboarding') { state.screen=1;state.navigationHistory=[];state.confirmed=false;localStorage.removeItem('tempo-onboarding-done') }
    if (action === 'close-panel') state.customPanel=null
    if (action === 'toggle-dark') { state.darkMode=!state.darkMode; localStorage.setItem('tempo-dark-mode',state.darkMode) }
    if (action === 'toggle-sound') state.soundEnabled ? stopEmotionSound() : startEmotionSound()
    if (action === 'reset-canvas') { state.model={scaleX:1,scaleY:1,rotate:0};state.strokes=[];state.redoStrokes=[] }
    if (action === 'undo-stroke'&&state.strokes.length) state.redoStrokes.push(state.strokes.pop())
    if (action === 'redo-stroke'&&state.redoStrokes.length) state.strokes.push(state.redoStrokes.pop())
    if (action === 'toggle-eraser') state.eraser=!state.eraser
  }
  render(state.screen!==screenBeforeClick)
})

app.addEventListener('change', event => {
  if(event.target.matches('[data-reminder]')) state.reminder=event.target.value
  if(event.target.matches('[data-emotion-name]')) { state.profile.name=event.target.value.trim()||'Mon Tempo'; saveAppearance(); render(false) }
  if(event.target.matches('[data-expression-select]')) { state.appearance.expression=event.target.value;state.appearance.sound=expressionSounds[state.appearance.expression]||'mystery';if(state.soundEnabled)startEmotionSound();saveAppearance();render(false) }
  if(event.target.matches('[data-audio-file]')&&event.target.files?.[0]) { stopEmotionSound();if(state.customAudioUrl)URL.revokeObjectURL(state.customAudioUrl);state.customAudioUrl=URL.createObjectURL(event.target.files[0]);state.customAudioName=event.target.files[0].name;state.musicProvider=null;state.appearance.sound='custom';startEmotionSound();render(false) }
})
app.addEventListener('input', event => {
  if(event.target.matches('[data-brush-size]')) { state.brushSize=Number(event.target.value);const output=event.target.parentElement?.querySelector('output');if(output)output.value=state.brushSize }
  if(event.target.matches('[data-emotion-name]')) { state.profile.name=event.target.value.trim()||'Mon Tempo';saveAppearance();const profileTitle=app.querySelector?.('.profile-hero > h1');if(profileTitle)profileTitle.textContent=state.profile.name;const revealLabel=app.querySelector?.('[data-action="reveal"] > span:first-child');if(revealLabel)revealLabel.textContent=`Révéler « ${state.profile.name} »` }
})

let gestureStart=null
app.addEventListener('pointerdown', event => {
  const canvas=event.target.closest('#mood-canvas');if(!canvas)return
  const rect=canvas.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width*350,y=(event.clientY-rect.top)/rect.height*390
  const stroke={d:`M ${x.toFixed(1)} ${y.toFixed(1)}`,brush:state.brush,size:state.brushSize,eraser:state.eraser}
  gestureStart={x:event.clientX,y:event.clientY,lastX:event.clientX,lastY:event.clientY,rect,points:[[x,y]],mode:state.creationMode,stroke}
  if(state.creationMode==='free'){const path=canvas.querySelector(state.eraser?'[data-live-eraser]':'[data-live-stroke]');if(path){path.setAttribute('d',stroke.d);path.setAttribute('stroke-width',state.eraser?state.brushSize*2:Math.round(state.brushSize*({pencil:1,marker:1.45,watercolor:1.8,chalk:1.25}[state.brush]||1)));if(!state.eraser){path.setAttribute('class',`brush-${state.brush}`);if(state.brush==='watercolor')path.setAttribute('filter','url(#watercolor-composer)');if(state.brush==='chalk'){path.setAttribute('filter','url(#chalk-composer)');path.setAttribute('stroke-dasharray','8 3')}}}canvas.querySelector(':scope > p')?.remove()}
  canvas.setPointerCapture?.(event.pointerId)
})
app.addEventListener('pointermove', event => {
  if(!gestureStart || !event.target.closest('#mood-canvas')) return
  const canvas=event.target.closest('#mood-canvas')
  if(gestureStart.mode==='model'){
    const dx=event.clientX-gestureStart.x,dy=event.clientY-gestureStart.y
    state.model.scaleX=Math.max(.55,Math.min(1.7,1+dx/150));state.model.scaleY=Math.max(.55,Math.min(1.65,1-dy/170));state.model.rotate=Math.max(-24,Math.min(24,dx/8))
    const model=canvas.querySelector('.model-transform');if(model){model.style.setProperty('--model-x',state.model.scaleX);model.style.setProperty('--model-y',state.model.scaleY);model.style.setProperty('--model-r',`${state.model.rotate}deg`)}
  } else {
    const x=(event.clientX-gestureStart.rect.left)/gestureStart.rect.width*350,y=(event.clientY-gestureStart.rect.top)/gestureStart.rect.height*390
    if(Math.hypot(event.clientX-gestureStart.lastX,event.clientY-gestureStart.lastY)>2){gestureStart.points.push([x,y]);gestureStart.stroke.d=smoothPath(gestureStart.points);const path=canvas.querySelector(gestureStart.stroke.eraser?'[data-live-eraser]':'[data-live-stroke]');if(path)path.setAttribute('d',gestureStart.stroke.d)}
  }
  gestureStart.lastX=event.clientX;gestureStart.lastY=event.clientY
})
app.addEventListener('pointerup', () => {
  if(!gestureStart)return
  if(gestureStart.mode==='free'&&gestureStart.points.length>1){state.strokes.push(gestureStart.stroke);state.redoStrokes=[]}
  gestureStart=null;render(false)
})

window.TempoPrototype={
  goTo(screen){ state.screen=screen; render() },
  getState(){ return {...state, favorites:[...state.favorites]} },
}

render()
