import { useState } from 'react'
import { Icon } from '../ui/Icon'

/**
 * Privacy-friendly YouTube embed: nothing loads from YouTube until a parent
 * presses play, and it uses the youtube-nocookie.com domain.
 */
export function LyricVideo({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [active, setActive] = useState(false)
  if (active) {
    return (
      <div className="aspect-video overflow-hidden rounded-[1.75rem] border-2 border-ink-900 bg-ink-900">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0&modestbranding=1`}
          title={`${title} — lyric video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    )
  }
  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[1.75rem] border-2 border-ink-900 bg-ink-900 bg-cover bg-center"
      style={{ backgroundImage: `url(https://i.ytimg.com/vi/${encodeURIComponent(youtubeId)}/hqdefault.jpg)` }}
      aria-label={`Play the ${title} lyric video`}
    >
      <span className="absolute inset-0 bg-ink-900/40" />
      <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink-900 bg-sun-500 shadow-pop transition group-hover:scale-110">
        <Icon name="play" className="ml-1 h-9 w-9" />
      </span>
      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-900">Plays from YouTube when you press play</span>
    </button>
  )
}

export function MediaPlaceholder({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[1.75rem] border-2 border-dashed border-ink-300 bg-white/70 p-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-50 text-ink-500">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <p className="mt-3 font-display text-lg font-semibold">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-ink-700">{text}</p>
    </div>
  )
}
