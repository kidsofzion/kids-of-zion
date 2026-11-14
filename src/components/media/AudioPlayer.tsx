import { useEffect, useRef, useState } from 'react'
import { Icon } from '../ui/Icon'

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

/** A friendly, accessible audio player with large touch targets. */
export function AudioPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => setTime(a.currentTime)
    const onMeta = () => setDuration(a.duration)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onErr = () => setError(true)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('durationchange', onMeta)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('ended', onPause)
    a.addEventListener('error', onErr)
    // The file may have loaded before these listeners were attached.
    if (a.readyState >= 1) onMeta()
    if (a.error) onErr()
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('durationchange', onMeta)
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('ended', onPause)
      a.removeEventListener('error', onErr)
    }
  }, [])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play().catch(() => setError(true))
    else a.pause()
  }

  const seek = (v: number) => {
    const a = audioRef.current
    if (a) a.currentTime = v
    setTime(v)
  }

  return (
    <div className="rounded-[1.75rem] border-2 border-ink-900 bg-white p-4 shadow-pop-sm sm:p-5" data-testid="audio-player">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-ink-900 bg-sun-500 text-ink-900 shadow-pop-sm transition hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        >
          <Icon name={playing ? 'pause' : 'play'} className={playing ? 'h-7 w-7' : 'ml-1 h-7 w-7'} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg font-semibold">{title}</p>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={time}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Song position"
            aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
            className="mt-2 h-2 w-full cursor-pointer accent-pom-500"
          />
          <div className="mt-1 flex justify-between text-xs font-bold text-ink-500 tabular-nums">
            <span>{fmt(time)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>
      {error && <p className="mt-3 text-sm font-semibold text-pom-700">Sorry — this audio file couldn’t be played. Please check the file path in the song data.</p>}
    </div>
  )
}
