import type { SVGProps } from 'react'

/** A small, hand-tuned rounded icon set. All icons use a 24×24 grid. */
const paths: Record<string, React.ReactNode> = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  path: (
    <>
      <path d="M8.5 3c1.6 0 2.6 1.7 2.4 3.8-.2 2.2-1.2 3.7-2.6 3.7S5.9 9 6 6.8C6.1 4.6 7 3 8.5 3z" />
      <path d="M6.6 12.6h3.6l-.3 1.9a1.5 1.5 0 0 1-3 0z" />
      <path d="M15.5 8c1.5 0 2.4 1.6 2.3 3.7-.1 2.1-1.2 3.6-2.5 3.6s-2.3-1.5-2.2-3.6C13.2 9.6 14.1 8 15.5 8z" />
      <path d="M13.6 17.5h3.6l-.3 1.9a1.5 1.5 0 0 1-3 0z" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 4h11a2 2 0 0 1 2 2v1H9" />
      <path d="M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
      <path d="M9 10h7M9 14h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
      <path d="M12 13.2l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z" />
    </>
  ),
  hands: <path d="M12 21V11.5M12 11.5 9.5 4.5a1.4 1.4 0 0 0-2.6 1l1.8 6.5M12 11.5l2.5-7a1.4 1.4 0 0 1 2.6 1l-1.8 6.5M8.7 12 6 15.5V21M15.3 12l2.7 3.5V21" />,
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.3 9.3a2.8 2.8 0 1 1 3.9 2.6c-.8.3-1.2 1-1.2 1.8v.5M12 17h.01" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5.5l11-2V16" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </>
  ),
  crayon: <path d="M14.5 3.5l6 6L10 20H4v-6zM12.5 5.5l6 6M4 20l3.5-3.5" />,
  scissors: (
    <>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="6" cy="17.5" r="2.5" />
      <path d="M8 8l12 10M8 16 20 6" />
    </>
  ),
  cards: (
    <>
      <rect x="3" y="6" width="12" height="15" rx="2.5" />
      <path d="M9 3h9.5A2.5 2.5 0 0 1 21 5.5V16" />
      <path d="M7 11h4M7 15h3" />
    </>
  ),
  pencil: <path d="M4 20l1-4.5L16 4.5a2.1 2.1 0 0 1 3 3L8 18.5zM14 6.5l3 3" />,
  sparkle: <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7zM19 16c.3 1.5 1 2.2 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.3 2.2-1 2.5-2.5z" />,
  book: <path d="M12 6.5C10 5 7 4.5 3.5 5v13.5c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5V20" />,
  puzzle: <path d="M10 4.5a2 2 0 1 1 4 0V6h4v4h-1.5a2 2 0 1 0 0 4H18v4h-4v-1.5a2 2 0 1 0-4 0V18H6v-4h1.5a2 2 0 1 0 0-4H6V6h4z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  play: <path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z" fill="currentColor" />,
  pause: (
    <>
      <rect x="6.5" y="5" width="3.5" height="14" rx="1.2" fill="currentColor" />
      <rect x="14" y="5" width="3.5" height="14" rx="1.2" fill="currentColor" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-left': <path d="M19 12H5M11 6l-6 6 6 6" />,
  printer: (
    <>
      <path d="M7 9V3.5h10V9" />
      <rect x="3.5" y="9" width="17" height="8" rx="2.5" />
      <path d="M7 14h10v6.5H7z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  volume: <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4zM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />,
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />,
  leaf: <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15M5 19l7-7" />,
  shield: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8 7.5 9.5 4.3-1.5 7.5-4.9 7.5-9.5V6zM8.8 12l2.3 2.3 4.2-4.3" />,
  star: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />,
  video: (
    <>
      <rect x="3" y="5.5" width="13.5" height="13" rx="3" />
      <path d="m16.5 10.5 4.5-3v9l-4.5-3z" />
    </>
  ),
  lamp: <path d="M3 13c3 0 5 2 9 2s7-2 9-2c0 3-4 5-9 5s-9-2-9-5zM12 18v2.5M8 21h8M14 9c1.5-1.5 1.5-3.5 0-5-1 1.5-3 2.5-2 5 .3.8 1.3 1 2 0z" />,
  family: (
    <>
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="16.5" cy="7.5" r="2" />
      <path d="M4 20v-5a4 4 0 0 1 8 0v5M13 20v-4a3.5 3.5 0 0 1 7 0v4" />
    </>
  ),
}

export type IconKey = keyof typeof paths

export function Icon({ name, className = 'h-5 w-5', ...rest }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  )
}
