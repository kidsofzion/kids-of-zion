/**
 * Creation illustrations used in games, coloring pages and charts.
 * `line` mode renders outline-only artwork for printing and coloring.
 */
export type CreationPiece = 'sun' | 'moon' | 'star' | 'fish' | 'bird' | 'tree' | 'flower' | 'sheep' | 'cloud' | 'waves' | 'light' | 'rest' | 'person'

const INK = '#24154f'

export function CreationIcon({
  piece,
  mode = 'color',
  className = '',
  title,
}: {
  piece: CreationPiece
  mode?: 'color' | 'line'
  className?: string
  title?: string
}) {
  const f = (c: string) => (mode === 'line' ? '#ffffff' : c)
  const s = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }
  const art: Record<CreationPiece, React.ReactNode> = {
    sun: (
      <g>
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d="M50 8 L56 22 L44 22Z" fill={f('#ffc53d')} {...s} transform={`rotate(${i * 45} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="22" fill={f('#ffb320')} {...s} />
        <path d="M42 54 q8 7 16 0" fill="none" {...s} />
        <circle cx="42" cy="45" r="2.5" fill={INK} />
        <circle cx="58" cy="45" r="2.5" fill={INK} />
      </g>
    ),
    moon: (
      <g>
        <path d="M62 14 A36 36 0 1 0 86 66 A28 28 0 1 1 62 14Z" fill={f('#c9b5ff')} {...s} />
        <circle cx="44" cy="66" r="4" fill={f('#8f6cf0')} {...s} strokeWidth={2} />
        <circle cx="34" cy="46" r="3" fill={f('#8f6cf0')} {...s} strokeWidth={2} />
      </g>
    ),
    star: (
      <g>
        <path d="M50 10 L60 38 L90 38 L66 56 L75 86 L50 68 L25 86 L34 56 L10 38 L40 38Z" fill={f('#ffc53d')} {...s} />
        <circle cx="80" cy="16" r="4" fill={f('#ffffff')} {...s} strokeWidth={2} />
      </g>
    ),
    fish: (
      <g>
        <path d="M14 50 Q40 20 70 50 Q40 80 14 50Z" fill={f('#12a3a8')} {...s} />
        <path d="M68 50 L90 32 L88 68Z" fill={f('#7fdcd8')} {...s} />
        <circle cx="30" cy="46" r="3.5" fill={INK} />
        <path d="M40 40 q6 10 0 20 M50 38 q6 12 0 24" fill="none" {...s} strokeWidth={2.5} />
        <circle cx="16" cy="22" r="4" fill={f('#d7f5f4')} {...s} strokeWidth={2} />
        <circle cx="24" cy="12" r="2.5" fill={f('#d7f5f4')} {...s} strokeWidth={2} />
      </g>
    ),
    bird: (
      <g>
        <path d="M18 58 Q22 30 52 34 Q76 36 82 56 Q66 78 40 74 Q24 70 18 58Z" fill={f('#ef4f5c')} {...s} />
        <path d="M44 48 Q56 24 72 30 Q66 50 44 48Z" fill={f('#ff9aa3')} {...s} />
        <path d="M18 52 L6 48 L16 60Z" fill={f('#ffb320')} {...s} />
        <circle cx="28" cy="48" r="3" fill={INK} />
        <path d="M80 54 L94 46 L92 62Z" fill={f('#ef4f5c')} {...s} />
        <path d="M44 74 v10 M54 74 v10" fill="none" {...s} />
      </g>
    ),
    tree: (
      <g>
        <path d="M44 92 L46 56 L54 56 L56 92Z" fill={f('#c27a3a')} {...s} />
        <circle cx="50" cy="38" r="26" fill={f('#4daa57')} {...s} />
        <circle cx="28" cy="52" r="14" fill={f('#4daa57')} {...s} />
        <circle cx="72" cy="52" r="14" fill={f('#4daa57')} {...s} />
        <circle cx="40" cy="32" r="4" fill={f('#ef4f5c')} {...s} strokeWidth={2} />
        <circle cx="60" cy="42" r="4" fill={f('#ef4f5c')} {...s} strokeWidth={2} />
        <circle cx="30" cy="54" r="4" fill={f('#ef4f5c')} {...s} strokeWidth={2} />
      </g>
    ),
    flower: (
      <g>
        <path d="M50 92 V54" fill="none" {...s} />
        <path d="M50 76 Q34 74 30 62 Q44 62 50 76Z M50 70 Q64 66 70 56 Q56 56 50 70Z" fill={f('#4daa57')} {...s} />
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse key={i} cx="50" cy="20" rx="9" ry="14" fill={f('#ff9aa3')} {...s} transform={`rotate(${i * 60} 50 34)`} />
        ))}
        <circle cx="50" cy="34" r="9" fill={f('#ffc53d')} {...s} />
      </g>
    ),
    sheep: (
      <g>
        {[[34, 46], [50, 40], [66, 46], [72, 60], [60, 70], [40, 70], [28, 60]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="13" fill={f('#ffffff')} {...s} />
        ))}
        <circle cx="50" cy="56" r="20" fill={f('#ffffff')} stroke="none" />
        <path d="M38 78 v12 M62 78 v12" fill="none" {...s} strokeWidth={4} />
        <ellipse cx="22" cy="50" rx="11" ry="13" fill={f('#35236f')} {...s} />
        <circle cx="19" cy="48" r="2.2" fill={mode === 'line' ? INK : '#fff'} />
        <path d="M12 42 q-6-2-6 4" fill="none" {...s} />
      </g>
    ),
    cloud: (
      <g>
        <path d="M22 70 h56 a16 16 0 0 0 0-32 a20 20 0 0 0-38-6 a16 16 0 0 0-18 38Z" fill={f('#ffffff')} {...s} />
        <path d="M30 84 l-4 8 M50 84 l-4 8 M70 84 l-4 8" fill="none" stroke={mode === 'line' ? INK : '#3aa9de'} strokeWidth={3} strokeLinecap="round" />
      </g>
    ),
    waves: (
      <g>
        <path d="M6 44 q11-12 22 0 t22 0 t22 0 t22 0 V92 H6Z" fill={f('#8ad4f5')} {...s} />
        <path d="M6 64 q11-12 22 0 t22 0 t22 0 t22 0" fill="none" {...s} />
        <path d="M6 80 q11-10 22 0 t22 0 t22 0 t22 0" fill="none" {...s} />
        <circle cx="72" cy="20" r="10" fill={f('#ffffff')} {...s} />
      </g>
    ),
    light: (
      <g>
        <path d="M50 10 A40 40 0 0 1 50 90Z" fill={f('#ffc53d')} {...s} />
        <path d="M50 10 A40 40 0 0 0 50 90Z" fill={f('#35236f')} {...s} />
        <path d="M30 34 l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill={f('#ffffff')} stroke={INK} strokeWidth={1.5} />
        <circle cx="70" cy="50" r="10" fill={f('#ffffff')} {...s} strokeWidth={2.5} />
      </g>
    ),
    rest: (
      <g>
        <path d="M30 88 h40 l-4-30 h-32Z" fill={f('#ffffff')} {...s} />
        <rect x="44" y="40" width="12" height="18" rx="3" fill={f('#fff3d1')} {...s} />
        <path d="M50 12 q14 14 0 26 q-14-12 0-26Z" fill={f('#ffb320')} {...s} />
        <path d="M50 24 q5 6 0 11 q-5-5 0-11Z" fill={f('#ef4f5c')} stroke="none" />
        <path d="M18 30 q-6 6 0 12 M82 30 q6 6 0 12" fill="none" {...s} />
      </g>
    ),
    person: (
      <g>
        <circle cx="50" cy="30" r="16" fill={f('#8a5330')} {...s} />
        <circle cx="38" cy="16" r="9" fill={f('#1d1124')} {...s} />
        <circle cx="62" cy="16" r="9" fill={f('#1d1124')} {...s} />
        <path d="M28 92 Q30 52 50 52 Q70 52 72 92Z" fill={f('#ffb320')} {...s} />
        <path d="M44 34 q6 5 12 0" fill="none" stroke={mode === 'line' ? INK : '#fff'} strokeWidth={2.5} strokeLinecap="round" />
      </g>
    ),
  }
  return (
    <svg viewBox="0 0 100 100" className={className} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      {art[piece]}
    </svg>
  )
}

export const creationDays: { day: number; title: string; reference: string; pieces: CreationPiece[] }[] = [
  { day: 1, title: 'Light — day and night', reference: 'Genesis 1:3–5', pieces: ['light'] },
  { day: 2, title: 'The sky and the waters', reference: 'Genesis 1:6–8', pieces: ['cloud', 'waves'] },
  { day: 3, title: 'Land, seas and plants', reference: 'Genesis 1:9–13', pieces: ['tree', 'flower'] },
  { day: 4, title: 'Sun, moon and stars', reference: 'Genesis 1:14–19', pieces: ['sun', 'moon', 'star'] },
  { day: 5, title: 'Fish and birds', reference: 'Genesis 1:20–23', pieces: ['fish', 'bird'] },
  { day: 6, title: 'Animals and people', reference: 'Genesis 1:24–31', pieces: ['sheep', 'person'] },
  { day: 7, title: 'Yahuah rested and blessed the day', reference: 'Genesis 2:2–3', pieces: ['rest'] },
]
