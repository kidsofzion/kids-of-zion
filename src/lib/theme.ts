import type { ThemeColor } from '../content/types'

/** Literal class names per theme colour (Tailwind needs to see them in full). */
export const themeClasses: Record<
  ThemeColor,
  { soft: string; solid: string; text: string; ring: string; border: string; hex: string; softHex: string }
> = {
  sun: { soft: 'bg-sun-100', solid: 'bg-sun-500', text: 'text-sun-700', ring: 'ring-sun-400', border: 'border-sun-400', hex: '#ffb320', softHex: '#fff3d1' },
  pom: { soft: 'bg-pom-100', solid: 'bg-pom-500', text: 'text-pom-700', ring: 'ring-pom-300', border: 'border-pom-300', hex: '#ef4f5c', softHex: '#ffe1e3' },
  olive: { soft: 'bg-olive-100', solid: 'bg-olive-500', text: 'text-olive-700', ring: 'ring-olive-300', border: 'border-olive-300', hex: '#4daa57', softHex: '#e1f5df' },
  jordan: { soft: 'bg-jordan-100', solid: 'bg-jordan-500', text: 'text-jordan-700', ring: 'ring-jordan-300', border: 'border-jordan-300', hex: '#12a3a8', softHex: '#d7f5f4' },
  lilac: { soft: 'bg-lilac-100', solid: 'bg-lilac-500', text: 'text-lilac-700', ring: 'ring-lilac-300', border: 'border-lilac-300', hex: '#8f6cf0', softHex: '#efe8ff' },
  sky: { soft: 'bg-sky-100', solid: 'bg-sky-500', text: 'text-sky-700', ring: 'ring-sky-300', border: 'border-sky-300', hex: '#3aa9de', softHex: '#e3f5fd' },
  ink: { soft: 'bg-ink-100', solid: 'bg-ink-700', text: 'text-ink-700', ring: 'ring-ink-300', border: 'border-ink-300', hex: '#35236f', softHex: '#e4ddf6' },
}

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ')
