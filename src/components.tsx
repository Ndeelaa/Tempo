import { ArrowLeft, ArrowRight, Bookmark, Check, Clock3, MapPin, Sparkles, Ticket } from 'lucide-react'
import type { Emotion } from './data'
import { emotions } from './data'

export function ProgressDots({ step }: { step: number }) {
  return <div className="progress" aria-label={`Étape ${step} sur 3`}>{[1,2,3].map(n => <span key={n} className={n === step ? 'active' : ''} />)}</div>
}

export function PrimaryButton({ children, onClick, disabled = false }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  return <button className="primary-button" onClick={onClick} disabled={disabled}><span>{children}</span><span className="button-icon"><ArrowRight size={18}/></span></button>
}

export function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="secondary-button" onClick={onClick}>{children}</button>
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return <button className="icon-button" onClick={onClick} aria-label="Revenir à l’écran précédent"><ArrowLeft size={20}/></button>
}

export function Face({ expression }: { expression: string }) {
  return <span className={`face ${expression}`} aria-hidden="true"><i className="eye left"/><i className="eye right"/><i className="mouth"/></span>
}

export function EmotionBlob({ emotion, selected = false, large = false, intensity = 3 }: { emotion: Emotion; selected?: boolean; large?: boolean; intensity?: number }) {
  return <span className={`emotion-blob ${emotion.shape} ${selected ? 'selected' : ''} ${large ? 'large' : ''}`} style={{ '--blob-color': emotion.color, '--blob-secondary': emotion.secondary, '--intensity': intensity } as React.CSSProperties}><Face expression={emotion.face}/></span>
}

export function EmotionWheel({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return <div className="wheel-wrap"><div className="wheel" role="group" aria-label="Choisir une émotion">{emotions.map((emotion: Emotion, index: number) => <button key={emotion.id} className={`emotion-choice pos-${index} ${selected && selected !== emotion.id ? 'muted' : ''}`} onClick={() => onSelect(emotion.id)} aria-label={`Je me sens ${emotion.label.toLowerCase()}`} aria-pressed={selected === emotion.id}><EmotionBlob emotion={emotion} selected={selected === emotion.id}/><span className="emotion-label">{emotion.label}</span></button>)}</div><div className="wheel-center" aria-hidden="true"><span>ton humeur</span><b>maintenant</b></div></div>
}

export function IntensitySelector({ value, onChange, labels }: { value: number; onChange: (n: number) => void; labels: string[] }) {
  return <div className="intensity-block"><div className="intensity-track" role="radiogroup" aria-label="Intensité de l’émotion">{labels.map((label, i) => { const n=i+1; return <button key={label} role="radio" aria-checked={value===n} aria-label={`${label}, niveau ${n} sur 5`} className={value===n ? 'active' : ''} onClick={() => onChange(n)}><span style={{ '--dot-size': `${12+n*3}px` } as React.CSSProperties}/></button> })}</div><div className="intensity-copy"><strong>{labels[value-1]}</strong><span>Intensité {value} sur 5</span></div></div>
}

export function ActivityCard({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <article className="activity-card"><div className="activity-art" role="img" aria-label="Composition abstraite aux tons bleu et lavande"><i/><i/><span><Sparkles size={17}/></span></div><div className="activity-content"><span className="eyebrow">{eyebrow}</span><h3>{title}</h3><p>{description}</p><div className="meta"><span><Clock3/>18 h 30</span><span><MapPin/>1,8 km</span><span><Ticket/>Dès 8 €</span></div></div></article>
}

export function SaveButton({ saved, onClick }: { saved: boolean; onClick: () => void }) {
  return <button className={`icon-button ${saved ? 'saved' : ''}`} onClick={onClick} aria-label={saved ? 'Retirer des favoris' : 'Sauvegarder cette activité'} aria-pressed={saved}>{saved ? <Check size={20}/> : <Bookmark size={20}/>}</button>
}
