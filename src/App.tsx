import { useState } from 'react'
import { ArrowUpRight, CirclePause, Compass, Heart, Sparkles, Waves } from 'lucide-react'
import { ActivityCard, BackButton, EmotionBlob, EmotionWheel, IntensitySelector, PrimaryButton, ProgressDots, SaveButton, SecondaryButton } from './components'
import { emotions, recommendations, testimonials } from './data'

type Screen = 1 | 2 | 3 | 4

export default function App() {
  const [screen, setScreen] = useState<Screen>(1)
  const [emotionId, setEmotionId] = useState<string | null>('sad')
  const [intensity, setIntensity] = useState(3)
  const [saved, setSaved] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const emotion = emotions.find(e => e.id === emotionId) ?? emotions[4]
  const recommendation = recommendations[intensity - 1]
  const navigate = (next: Screen) => { setScreen(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  if (screen === 4) return <main className="app-shell completion-screen"><div className="completion-orb"><Sparkles/></div><p className="eyebrow">À très bientôt</p><h1>L’application complète<br/>arrive ensuite.</h1><p>Ton premier Tempo est bien au chaud. On se retrouve bientôt pour découvrir la suite.</p><button className="text-link" onClick={() => navigate(1)}>Revoir le prototype</button></main>

  return <main className={`app-shell screen-${screen}`}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    {screen === 1 && <section className="screen emotion-screen">
      <header className="topbar"><span className="logo">tempo<span>.</span></span><ProgressDots step={1}/><button className="skip" onClick={() => navigate(2)}>Passer</button></header>
      <div className="intro stagger"><p className="kicker">Ton humeur ouvre la voie</p><h1>Pas sûr·e de ce que tu veux faire aujourd’hui&nbsp;?</h1><p>Choisis une émotion. Tempo trouvera une expérience qui suit ton rythme.</p></div>
      <EmotionWheel selected={emotionId} onSelect={setEmotionId}/>
      <div className="selection-copy" aria-live="polite">{emotionId ? <>Aujourd’hui, je me sens <strong>{emotion.label.toLowerCase()}</strong>.</> : 'Choisis ce qui se rapproche le plus de ton humeur.'}</div>
      <div className="bottom-actions"><PrimaryButton disabled={!emotionId} onClick={() => navigate(2)}>Continuer</PrimaryButton></div>
    </section>}

    {screen === 2 && <section className="screen intensity-screen">
      <header className="topbar"><BackButton onClick={() => navigate(1)}/><ProgressDots step={2}/><span className="top-caption">Ton Tempo du moment</span></header>
      <div className="intro compact"><p className="kicker">Triste, mais pas seulement</p><h1>À quel point te sens-tu triste&nbsp;?</h1><p>Fais glisser la forme pour ajuster l’intensité.</p></div>
      <div className="living-blob"><EmotionBlob emotion={emotion} large intensity={intensity}/><span className="blob-halo"/></div>
      <IntensitySelector value={intensity} onChange={setIntensity} labels={recommendations.map(r => r.label)}/>
      <div className="recommendation-wrap" key={intensity}><ActivityCard eyebrow={recommendation.eyebrow} title={recommendation.title} description={recommendation.description}/></div>
      <p className="why"><Sparkles size={15}/> Tempo associe ton émotion, son intensité et ton besoin de calme à une expérience culturelle adaptée.</p>
      <div className="bottom-actions flow"><PrimaryButton onClick={() => navigate(3)}>Découvrir cette expérience</PrimaryButton><button className="text-link" onClick={() => navigate(1)}>Essayer une autre émotion</button></div>
    </section>}

    {screen === 3 && <section className="screen detail-screen">
      <header className="topbar detail-top"><BackButton onClick={() => navigate(2)}/><ProgressDots step={3}/><SaveButton saved={saved} onClick={() => setSaved(v => !v)}/></header>
      <div className="hero-art" role="img" aria-label="Composition abstraite évoquant l’eau et la lumière"><div className="hero-shape one"/><div className="hero-shape two"/><div className="hero-shape three"/><div className="match"><Heart size={15} fill="currentColor"/>92 % en accord<br/>avec ton Tempo</div><div className="hero-title"><span>Cinéma contemplatif</span><h1>Les Silences<br/>de l’eau</h1></div></div>
      <div className="event-details"><div><span>Lieu</span><strong>Studio Lumière<br/>Paris 11e</strong></div><div><span>Quand</span><strong>Aujourd’hui<br/>18 h 30</strong></div><div><span>Durée</span><strong>1 h 35<br/>8 € · 1,8 km</strong></div></div>
      <section className="editorial-section"><p className="kicker">Pourquoi ce choix</p><h2>Une expérience pour ralentir sans s’isoler</h2><p>Une séance intimiste pensée pour créer une parenthèse calme, laisser l’esprit respirer et retrouver progressivement de l’élan.</p></section>
      <section className="benefits"><h2>Ce que cette expérience pourrait t’apporter</h2><div><article><CirclePause/><span>Ralentir</span></article><article><Compass/><span>S’évader</span></article><article><Waves/><span>Revenir à soi</span></article></div></section>
      <section className="social"><div className="section-heading"><div><p className="kicker">Des ressentis, pas des notes</p><h2>Ils avaient un Tempo similaire</h2></div><span className="rating">4,7 / 5<small>128 expériences similaires</small></span></div><div className="testimonial-row">{testimonials.map((t, i) => <article className="testimonial" key={t.name}><div className="avatar">{t.name.charAt(0)}</div><div><strong>{t.name}</strong><span>{t.tempo}</span></div><p>« {t.quote} »</p><span className="card-index">0{i+1}</span></article>)}</div></section>
      <div className="bottom-actions detail-actions">{confirmed ? <div className="confirmation"><span><Sparkles size={17}/></span><div><strong>Ton Tempo est prêt.</strong><small>Cette sortie t’attend.</small></div></div> : null}<PrimaryButton onClick={() => confirmed ? navigate(4) : setConfirmed(true)}>{confirmed ? 'Entrer dans l’application' : 'Choisir cette sortie'}</PrimaryButton><SecondaryButton onClick={() => navigate(2)}>Voir une autre proposition</SecondaryButton></div>
      <footer>tempo<span>.</span><small>La culture au rythme de ton humeur.</small><ArrowUpRight/></footer>
    </section>}
  </main>
}
