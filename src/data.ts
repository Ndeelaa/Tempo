export type Emotion = {
  id: string; label: string; color: string; secondary: string; face: string; shape: string
}

export const emotions: Emotion[] = [
  { id: 'happy', label: 'Joyeux', color: '#FFD85A', secondary: '#FFA178', face: 'happy', shape: 'shape-a' },
  { id: 'calm', label: 'Calme', color: '#A9C878', secondary: '#DCE8B8', face: 'calm', shape: 'shape-b' },
  { id: 'curious', label: 'Curieux', color: '#C9A8F4', secondary: '#E9B5CC', face: 'curious', shape: 'shape-c' },
  { id: 'energetic', label: 'Énergique', color: '#FF8A67', secondary: '#FFD85A', face: 'excited', shape: 'shape-d' },
  { id: 'sad', label: 'Triste', color: '#748DD5', secondary: '#9C82DF', face: 'sad', shape: 'shape-e' },
  { id: 'stressed', label: 'Stressé', color: '#E98A76', secondary: '#E9B5CC', face: 'worried', shape: 'shape-f' },
]

export const recommendations = [
  { level: 1, label: 'À peine', eyebrow: 'Une sortie sans contrainte', title: 'Une balade entre les rayons d’une librairie', description: 'Quelques pas, de belles couvertures et la liberté de repartir quand tu veux.' },
  { level: 2, label: 'Un peu', eyebrow: 'Un moment à ton rythme', title: 'Un café calme avec un livre choisi sur place', description: 'Un décor chaleureux, une lecture légère et aucune urgence à combler le silence.' },
  { level: 3, label: 'Modérément', eyebrow: 'Une pause pour respirer', title: 'Une séance de cinéma contemplatif', description: 'Un lieu calme, une histoire immersive et du temps pour laisser retomber la journée.' },
  { level: 4, label: 'Beaucoup', eyebrow: 'Une immersion apaisante', title: 'Une exposition sonore en petit comité', description: 'Un voyage enveloppant, à parcourir lentement dans une lumière douce.' },
  { level: 5, label: 'Très fortement', eyebrow: 'Le plus doux des tempos', title: 'Une installation lumineuse confidentielle', description: 'Une expérience feutrée, peu fréquentée et sans aucune pression sociale.' },
]

export const testimonials = [
  { name: 'Lina, 24 ans', tempo: 'Triste · intensité 3/5', quote: 'Je ne voulais pas forcément sortir, mais l’ambiance était assez douce pour me faire du bien sans me demander d’effort.' },
  { name: 'Adam, 28 ans', tempo: 'Fatigué · intensité 4/5', quote: 'Le film était calme et le lieu peu chargé. C’était exactement le rythme dont j’avais besoin.' },
  { name: 'Inès, 26 ans', tempo: 'Morose · intensité 3/5', quote: 'La recommandation était plus juste qu’une simple catégorie “cinéma”. J’ai compris pourquoi cette séance me correspondait.' },
]
