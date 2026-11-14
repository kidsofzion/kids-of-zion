/**
 * ⚠️ TEMPORARY CHARACTER ART
 *
 * These simple vector children are placeholders only. They will be replaced
 * by the official Kids of Zion character artwork. Everything in the
 * `art/temporary` folder is meant to be swapped out — see README.md.
 */

export type KidVariant = 'puffs' | 'coils' | 'braids'

const INK = '#24154f'
const HAIR = '#1d1124'
const HAIR_LIGHT = '#3a2540'

interface Palette {
  skin: string
  skinShade: string
  top: string
  topShade: string
  bottom: string
  shoe: string
  shoeAccent: string
  accent: string
}

const palettes: Record<KidVariant, Palette> = {
  puffs: { skin: '#8a5330', skinShade: '#74432a', top: '#ffb320', topShade: '#f09a00', bottom: '#12a3a8', shoe: '#ffffff', shoeAccent: '#ef4f5c', accent: '#ef4f5c' },
  coils: { skin: '#5e3720', skinShade: '#4c2c19', top: '#12a3a8', topShade: '#0d8a8e', bottom: '#35236f', shoe: '#ffb320', shoeAccent: '#ffffff', accent: '#ffb320' },
  braids: { skin: '#a0663b', skinShade: '#8a5530', top: '#8f6cf0', topShade: '#7a56e0', bottom: '#ef4f5c', shoe: '#35236f', shoeAccent: '#ffb320', accent: '#ffb320' },
}

const labels: Record<KidVariant, string> = {
  puffs: 'A smiling girl with afro puffs in a yellow hoodie, waving',
  coils: 'A smiling boy with curly hair in a teal t-shirt, waving',
  braids: 'A smiling girl with beaded braids in a purple dress, waving',
}

function Hair({ variant }: { variant: KidVariant }) {
  const cap = <path d="M59 108 Q55 60 100 59 Q145 60 141 108 Q134 84 100 83 Q67 84 59 108 Z" fill={HAIR} />
  if (variant === 'puffs') {
    return (
      <g>
        <circle cx="60" cy="66" r="25" fill={HAIR} />
        <circle cx="140" cy="66" r="25" fill={HAIR} />
        <circle cx="52" cy="58" r="5" fill={HAIR_LIGHT} />
        <circle cx="64" cy="52" r="4" fill={HAIR_LIGHT} />
        <circle cx="146" cy="56" r="5" fill={HAIR_LIGHT} />
        <circle cx="134" cy="50" r="4" fill={HAIR_LIGHT} />
        {cap}
        <rect x="70" y="76" width="14" height="9" rx="4.5" fill="#ef4f5c" transform="rotate(-35 77 80)" />
        <rect x="116" y="76" width="14" height="9" rx="4.5" fill="#ef4f5c" transform="rotate(35 123 80)" />
      </g>
    )
  }
  if (variant === 'coils') {
    return (
      <g>
        {cap}
        {[
          [64, 88, 12], [70, 74, 13], [83, 64, 14], [100, 60, 14], [117, 64, 14], [130, 74, 13], [136, 88, 12],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={HAIR} />
        ))}
        {[[78, 66], [96, 58], [114, 61], [128, 72], [68, 80]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3} fill={HAIR_LIGHT} />
        ))}
      </g>
    )
  }
  // braids
  return (
    <g>
      {[54, 63, 137, 146].map((x, i) => (
        <g key={i}>
          <rect x={x - 5} y={92} width={10} height={62} rx={5} fill={HAIR} />
          {[104, 118, 132].map((y) => (
            <path key={y} d={`M${x - 5} ${y} q5 4 10 0`} stroke={HAIR_LIGHT} strokeWidth={2} fill="none" />
          ))}
          <circle cx={x} cy={158} r={5} fill={i % 2 ? '#ffb320' : '#ef4f5c'} />
          <circle cx={x} cy={167} r={4} fill={i % 2 ? '#ef4f5c' : '#12a3a8'} />
        </g>
      ))}
      {cap}
      <path d="M100 60 L100 80" stroke={HAIR_LIGHT} strokeWidth={2.5} strokeLinecap="round" />
    </g>
  )
}

export function KidCharacter({
  variant = 'puffs',
  wave = true,
  className,
  title,
}: {
  variant?: KidVariant
  wave?: boolean
  className?: string
  title?: string
}) {
  const p = palettes[variant]
  const isDress = variant === 'braids'
  return (
    <svg viewBox="0 0 200 310" className={className} role="img" aria-label={`${title ?? labels[variant]} (temporary illustration)`}>
      {/* ground shadow */}
      <ellipse cx="100" cy="300" rx="52" ry="7" fill={INK} opacity="0.15" />

      {/* legs */}
      <rect x="74" y="232" width="21" height="58" rx="10" fill={isDress ? p.bottom : p.bottom} />
      <rect x="105" y="232" width="21" height="58" rx="10" fill={p.bottom} />
      {/* shoes */}
      <rect x="64" y="281" width="35" height="16" rx="8" fill={p.shoe} stroke={INK} strokeWidth="2.5" />
      <rect x="101" y="281" width="35" height="16" rx="8" fill={p.shoe} stroke={INK} strokeWidth="2.5" />
      <path d="M70 289h22M107 289h22" stroke={p.shoeAccent} strokeWidth="3" strokeLinecap="round" />

      {/* back arm */}
      <path d="M70 166 Q52 196 56 224" stroke={p.topShade} strokeWidth="19" strokeLinecap="round" fill="none" />
      <circle cx="56" cy="228" r="9.5" fill={p.skin} />

      {/* body */}
      {isDress ? (
        <path d="M74 150 H126 Q134 150 136 158 L152 238 Q154 246 145 246 H55 Q46 246 48 238 L64 158 Q66 150 74 150 Z" fill={p.top} />
      ) : (
        <path d="M62 162 Q62 149 76 149 H124 Q138 149 138 162 L141 236 Q141 244 133 244 H67 Q59 244 59 236 Z" fill={p.top} />
      )}
      {/* neck */}
      <rect x="91" y="136" width="18" height="18" rx="6" fill={p.skinShade} />
      {/* outfit details */}
      {variant === 'puffs' && (
        <g>
          <path d="M80 149 Q100 166 120 149" fill={p.topShade} />
          <path d="M93 158 v14 M107 158 v14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <rect x="78" y="200" width="44" height="22" rx="9" fill={p.topShade} />
          <path d="M100 178 l3.2 6.4 7 1-5 5 1.2 7-6.4-3.4-6.4 3.4 1.2-7-5-5 7-1z" fill="#fff" />
        </g>
      )}
      {variant === 'coils' && (
        <g>
          <path d="M86 149 Q100 160 114 149" fill="none" stroke={p.topShade} strokeWidth="4" />
          <circle cx="100" cy="192" r="15" fill="#ffb320" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <rect key={a} x="98.5" y="168" width="3" height="6" rx="1.5" fill="#ffb320" transform={`rotate(${a} 100 192)`} />
          ))}
          <path d="M66 230 H134" stroke={p.topShade} strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
      {variant === 'braids' && (
        <g>
          <path d="M84 150 Q100 162 116 150" fill="#fff" opacity="0.9" />
          {[[78, 190], [100, 205], [122, 190], [88, 225], [112, 225], [66, 228], [134, 228]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={4} fill="#fff" opacity="0.85" />
          ))}
        </g>
      )}

      {/* front arm */}
      {wave ? (
        <g className="origin-[132px_164px] motion-safe:animate-[sway_2.4s_ease-in-out_infinite]">
          <path d="M131 166 Q160 146 160 108" stroke={p.top} strokeWidth="19" strokeLinecap="round" fill="none" />
          <circle cx="160" cy="100" r="11" fill={p.skin} />
          <path d="M152 94 q-2-8 3-10 M158 91 q0-8 5-8 M165 92 q2-7 6-6" stroke={p.skin} strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>
      ) : (
        <g>
          <path d="M130 166 Q148 196 144 224" stroke={p.top} strokeWidth="19" strokeLinecap="round" fill="none" />
          <circle cx="144" cy="228" r="9.5" fill={p.skin} />
        </g>
      )}

      {/* head */}
      <circle cx="59" cy="113" r="9" fill={p.skinShade} />
      <circle cx="141" cy="113" r="9" fill={p.skinShade} />
      <circle cx="100" cy="106" r="41" fill={p.skin} />
      <Hair variant={variant} />
      {variant === 'coils' && null}

      {/* face */}
      <path d="M80 98 q6-5 12 0 M108 98 q6-5 12 0" stroke={HAIR} strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="86" cy="110" rx="5" ry="6" fill={INK} />
      <ellipse cx="114" cy="110" rx="5" ry="6" fill={INK} />
      <circle cx="88" cy="107.5" r="1.8" fill="#fff" />
      <circle cx="116" cy="107.5" r="1.8" fill="#fff" />
      <circle cx="76" cy="124" r="6.5" fill="#ff8a95" opacity="0.45" />
      <circle cx="124" cy="124" r="6.5" fill="#ff8a95" opacity="0.45" />
      <path d="M96 118 q4 3 8 0" stroke={p.skinShade} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M88 126 Q100 140 112 126 Z" fill="#6e1f2e" />
      <path d="M93 131 Q100 136 107 131 Q100 128 93 131 Z" fill="#ff8a95" />
    </svg>
  )
}

/** Small corner label so placeholder art is never mistaken for official artwork. */
export function TemporaryArtLabel({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-block rounded-full bg-white/85 px-2.5 py-0.5 text-[0.68rem] font-bold tracking-wide text-ink-700 uppercase ${className}`}>
      Temporary art · official characters coming soon
    </span>
  )
}
