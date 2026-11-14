/**
 * Decorative brand illustrations (sun, hills, stars, olive branches…).
 * These are part of the design system, not character art.
 */
import type { ThemeColor } from '../../content/types'
import { themeClasses } from '../../lib/theme'

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="31" fill="#24154f" />
      <circle cx="32" cy="30" r="13" fill="#ffb320" />
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a) => (
        <rect key={a} x="30.5" y="8" width="3" height="6" rx="1.5" fill="#ffc53d" transform={`rotate(${a} 32 30)`} />
      ))}
      <path d="M1.5 42 Q16 30 32 40 Q48 30 62.5 42 A31 31 0 0 1 1.5 42Z" fill="#4daa57" />
      <path d="M6 50 Q22 40 38 48 Q50 42 59 49 A31 31 0 0 1 6 50Z" fill="#276b32" />
      <path d="M32 40 V30" stroke="#24154f" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M32 33 Q25 32 24 25 Q31 25 32 33Z M32 31 Q38 29 40 23 Q33 23 32 31Z" fill="#9fdc98" stroke="#24154f" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-11 w-11 shrink-0 transition-transform group-hover:rotate-[-8deg]" />
      <span className={`flex flex-col leading-none ${light ? 'text-white' : 'text-ink-900'}`}>
        <span className="font-display text-[1.45rem] font-bold tracking-tight">
          Kids <span className={light ? 'text-sun-400' : 'text-pom-500'}>of</span> Zion
        </span>
        <span className={`mt-0.5 text-[0.62rem] font-bold tracking-[0.18em] whitespace-nowrap uppercase ${light ? 'text-ink-100' : 'text-ink-500'}`}>
          Little hearts · Deep roots
        </span>
      </span>
    </span>
  )
}

export function Star({ className = '', fill = '#ffc53d' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 1.5c.9 5.6 3.9 8.6 9.5 9.5-5.6.9-8.6 3.9-9.5 9.5-.9-5.6-3.9-8.6-9.5-9.5 5.6-.9 8.6-3.9 9.5-9.5z" fill={fill} />
    </svg>
  )
}

export function Cloud({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <path d="M22 54h76a20 20 0 0 0 0-40 26 26 0 0 0-49-4A20 20 0 0 0 22 54z" fill="#fff" />
    </svg>
  )
}

export function OliveBranch({ className = '', color = '#4daa57' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <path d="M6 50 Q60 40 114 10" stroke="#276b32" strokeWidth="3" fill="none" strokeLinecap="round" />
      {[
        [24, 46, -20], [38, 43, 200], [52, 37, -30], [66, 32, 190], [80, 25, -40], [94, 19, 180],
      ].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="4.2" fill={color} transform={`rotate(${r} ${x} ${y}) translate(0 ${i % 2 ? 6 : -6})`} />
      ))}
      <circle cx="44" cy="51" r="4.5" fill="#35236f" />
      <circle cx="86" cy="34" r="4.5" fill="#35236f" />
    </svg>
  )
}

export function Sprout({ className = '', stage = 1 }: { className?: string; stage?: 1 | 2 | 3 }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <ellipse cx="40" cy="70" rx="26" ry="7" fill="#9a5a00" opacity="0.25" />
      {stage === 1 && (
        <g>
          <path d="M40 70 V46" stroke="#276b32" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 52 Q26 50 24 36 Q38 37 40 52Z" fill="#4daa57" />
          <path d="M40 48 Q52 44 56 32 Q42 33 40 48Z" fill="#9fdc98" />
        </g>
      )}
      {stage === 2 && (
        <g>
          <path d="M40 70 V30" stroke="#276b32" strokeWidth="5" strokeLinecap="round" />
          <path d="M40 70 q-8 2-12 0 M40 70 q8 2 12 0" stroke="#9a5a00" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 50 Q22 50 18 34 Q36 34 40 50Z" fill="#4daa57" />
          <path d="M40 42 Q58 40 62 24 Q44 24 40 42Z" fill="#4daa57" />
          <path d="M40 32 Q32 22 40 10 Q48 22 40 32Z" fill="#9fdc98" />
        </g>
      )}
      {stage === 3 && (
        <g>
          <path d="M40 72 V36 M40 50 L26 38 M40 44 L56 32" stroke="#9a5a00" strokeWidth="5" strokeLinecap="round" />
          <circle cx="40" cy="26" r="20" fill="#4daa57" />
          <circle cx="24" cy="34" r="13" fill="#276b32" />
          <circle cx="57" cy="32" r="13" fill="#4daa57" />
          <circle cx="46" cy="18" r="10" fill="#9fdc98" />
          <circle cx="30" cy="22" r="3.5" fill="#ef4f5c" />
          <circle cx="52" cy="36" r="3.5" fill="#ef4f5c" />
          <circle cx="44" cy="28" r="3.5" fill="#ffb320" />
        </g>
      )}
    </svg>
  )
}

/** Rolling hills used at the bottom of hero sections. `fill` should match the next section's background. */
export function Hills({ className = '', fill = '#fffaf2' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 120 C220 40 380 60 560 110 C760 166 900 50 1110 60 C1260 68 1360 110 1440 100 V220 H0Z" fill="#276b32" />
      <path d="M0 160 C200 100 420 110 620 150 C820 190 1010 110 1220 120 C1320 125 1400 140 1440 150 V220 H0Z" fill="#4daa57" />
      <path d="M0 196 C260 160 520 170 760 190 C1000 210 1220 170 1440 186 V220 H0Z" fill={fill} />
    </svg>
  )
}

export function Wave({ className = '', fill = '#fffaf2', flip = false }: { className?: string; fill?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={className} style={flip ? { transform: 'scaleY(-1)' } : undefined} aria-hidden="true">
      <path d="M0 40 C240 80 480 0 720 30 C960 60 1200 10 1440 40 V80 H0Z" fill={fill} />
    </svg>
  )
}

export function SunBurst({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g className="origin-center motion-safe:animate-[spin_60s_linear_infinite]">
        {Array.from({ length: 16 }).map((_, i) => (
          <path
            key={i}
            d={i % 2 ? 'M100 100 L96 22 Q100 17 104 22Z' : 'M100 100 L95 6 Q100 1 105 6Z'}
            fill={i % 2 ? '#ffe39a' : '#ffc53d'}
            transform={`rotate(${i * 22.5} 100 100)`}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="60" fill="#fff3d1" opacity="0.35" />
      <circle cx="100" cy="100" r="54" fill="#ffd36b" />
      <circle cx="100" cy="100" r="44" fill="#ffb320" />
    </svg>
  )
}

/** A soft organic blob, used behind illustrations and icons. */
export function Blob({ className = '', color = '#fff3d1', shape = 0 }: { className?: string; color?: string; shape?: 0 | 1 | 2 }) {
  const d = [
    'M44 -58C57 -47 66 -31 70 -13C74 6 72 26 61 41C50 56 30 66 9 69C-12 72-34 67-50 54C-66 41-75 20-74 0C-73-20-62-40-46-51C-30-62-15-64 2-66C19-68 31-69 44-58Z',
    'M51 -63C64 -52 70 -33 70 -15C71 4 66 22 55 37C44 52 27 64 6 69C-15 74-40 72-55 58C-70 44-74 18-69-4C-64-26-50-45-32-57C-14-69 9-73 27-72C39-71 42-70 51-63Z',
    'M40 -66C53 -58 64 -46 68 -31C72 -16 69 1 64 17C59 33 52 49 38 58C24 67 3 70-17 67C-37 64-56 55-66 39C-76 23-77 0-70-19C-63-38-48-53-31-62C-14-71 5-74 21-73C30-72 33-70 40-66Z',
  ][shape]
  return (
    <svg viewBox="-80 -80 160 160" className={className} aria-hidden="true">
      <path d={d} fill={color} />
    </svg>
  )
}

/**
 * Designed placeholder cover used until official song artwork is uploaded.
 * Clearly labelled so it isn't mistaken for final artwork.
 */
export function PlaceholderCover({ title, subtitle, theme, className = '', showLabel = true }: { title: string; subtitle?: string; theme: ThemeColor; className?: string; showLabel?: boolean }) {
  const t = themeClasses[theme]
  return (
    <div className={`relative isolate overflow-hidden ${className}`} style={{ background: `linear-gradient(150deg, #24154f 0%, #35236f 45%, ${t.hex} 140%)` }}>
      <SunBurst className="absolute -right-10 -bottom-10 w-3/4 opacity-90" />
      <Star className="absolute top-[12%] left-[14%] w-[8%] motion-safe:animate-twinkle" />
      <Star className="absolute top-[26%] left-[62%] w-[5%] motion-safe:animate-twinkle [animation-delay:1s]" fill="#fff" />
      <Star className="absolute top-[8%] right-[12%] w-[6%] motion-safe:animate-twinkle [animation-delay:2s]" fill="#c9b5ff" />
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/4 w-full" aria-hidden="true">
        <path d="M0 22 Q25 6 50 18 T100 14 V40 H0Z" fill="#4daa57" />
        <path d="M0 30 Q30 20 60 30 T100 26 V40 H0Z" fill="#276b32" />
      </svg>
      <div className="absolute inset-0 flex flex-col justify-start p-[8%]">
        <p className="font-display text-[0.6em] font-semibold tracking-[0.2em] text-sun-400 uppercase">Set Apart Sound</p>
        <p className="mt-1 font-display text-[1.5em] leading-[1.05] font-bold text-white">{title}</p>
        {subtitle && <p className="font-display text-[1em] font-semibold text-sun-200">{subtitle}</p>}
      </div>
      {showLabel && (
        <span className="absolute right-2 bottom-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-ink-700 uppercase">Placeholder cover</span>
      )}
    </div>
  )
}
