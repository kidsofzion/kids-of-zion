import { useState } from 'react'
import { CreationIcon, creationDays } from '../components/art/CreationArt'
import { Breadcrumbs, Button } from '../components/ui/primitives'
import { cx } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const shuffled = () => [...creationDays].sort(() => Math.random() - 0.5)

export default function CreationOrderPage() {
  useDocumentMeta('Creation Week Game', 'Tap the days of creation in order, from day one to the seventh-day rest.')
  const [pool, setPool] = useState(shuffled)
  const [placed, setPlaced] = useState<number[]>([])
  const [wrong, setWrong] = useState<number | null>(null)
  const next = placed.length + 1
  const done = placed.length === 7

  const tap = (day: number) => {
    if (placed.includes(day)) return
    if (day === next) {
      setPlaced((p) => [...p, day])
      setWrong(null)
    } else {
      setWrong(day)
      setTimeout(() => setWrong(null), 600)
    }
  }
  const restart = () => {
    setPool(shuffled())
    setPlaced([])
  }
  const current = creationDays.find((d) => d.day === placed[placed.length - 1])

  return (
    <div className="container-koz py-10">
      <Breadcrumbs items={[{ label: 'Kids Play', to: '/play' }, { label: 'Creation Week' }]} />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl">Creation Week</h1>
          <p className="mt-2 text-lg text-ink-700">What did Yahuah make first? Tap the days in order!</p>
        </div>
        <Button variant="secondary" size="sm" onClick={restart}>
          Start over
        </Button>
      </div>

      <div className="mt-6 rounded-2xl bg-lilac-100 px-5 py-3" aria-live="polite">
        <p className="font-display text-xl font-semibold" data-testid="order-message">
          {done ? 'You did it! On the seventh day, Yahuah rested and blessed it.' : current ? `Day ${current.day}: ${current.title}! Now find day ${next}.` : 'Find day 1!'}
        </p>
      </div>

      <ol className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-7 sm:gap-3" aria-label="Your creation week">
        {creationDays.map((d) => {
          const isPlaced = placed.includes(d.day)
          return (
            <li key={d.day} className={cx('flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border-2 p-2 text-center', isPlaced ? 'border-ink-900 bg-white shadow-pop-sm' : 'border-dashed border-ink-300')}>
              <span className="font-display text-sm font-bold text-ink-500">Day {d.day}</span>
              {isPlaced && <CreationIcon piece={d.pieces[0]} className="mt-1 h-3/5 w-full motion-safe:animate-pop-in" />}
            </li>
          )
        })}
      </ol>

      {!done && (
        <div className="mt-10">
          <p className="mb-3 font-display text-lg font-semibold">Tap the next day:</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {pool.filter((d) => !placed.includes(d.day)).map((d) => (
              <button
                key={d.day}
                type="button"
                onClick={() => tap(d.day)}
                aria-label={`${d.title}`}
                className={cx(
                  'flex flex-col items-center rounded-3xl border-2 border-ink-900 bg-white p-3 shadow-pop-sm transition hover:-translate-y-1',
                  wrong === d.day && 'animate-[sway_0.2s_ease-in-out_3] bg-pom-100',
                )}
              >
                <span className="flex h-20 w-full items-center justify-center gap-1">
                  {d.pieces.slice(0, 2).map((p) => (
                    <CreationIcon key={p} piece={p} className="h-full max-w-[4.5rem]" />
                  ))}
                </span>
                <span className="mt-2 text-sm leading-tight font-bold">{d.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {done && (
        <div className="mx-auto mt-8 max-w-xl rounded-[2rem] border-2 border-ink-900 bg-sun-100 p-8 text-center shadow-pop motion-safe:animate-pop-in">
          <p className="font-display text-3xl font-bold">Wonderful! 🌟</p>
          <p className="mt-2 font-display text-xl">“Elohim blessed the seventh day, and made it holy.” — Genesis 2:3</p>
          <Button className="mt-5" onClick={restart}>
            Play again
          </Button>
        </div>
      )}
    </div>
  )
}
