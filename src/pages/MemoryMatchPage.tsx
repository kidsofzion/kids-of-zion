import { useCallback, useEffect, useState } from 'react'
import { CreationIcon, type CreationPiece } from '../components/art/CreationArt'
import { Icon } from '../components/ui/Icon'
import { Breadcrumbs, Button } from '../components/ui/primitives'
import { cx } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const allPieces: CreationPiece[] = ['sun', 'moon', 'fish', 'bird', 'tree', 'sheep', 'flower', 'star']
const names: Partial<Record<CreationPiece, string>> = { sun: 'sun', moon: 'moon', fish: 'fish', bird: 'birds', tree: 'trees', sheep: 'sheep', flower: 'flowers', star: 'stars' }

interface Card {
  id: number
  piece: CreationPiece
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const deal = (pairs: number): Card[] => shuffle(shuffle(allPieces).slice(0, pairs).flatMap((p) => [p, p])).map((piece, id) => ({ id, piece }))

export default function MemoryMatchPage() {
  useDocumentMeta('Creation Memory Match', 'A gentle memory matching game for children featuring the things Yahuah made.')
  const [pairs, setPairs] = useState(6)
  const [cards, setCards] = useState<Card[]>(() => deal(6))
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<Set<CreationPiece>>(new Set())
  const [moves, setMoves] = useState(0)
  const [message, setMessage] = useState('Tap a card to begin!')

  const restart = useCallback((n = pairs) => {
    setPairs(n)
    setCards(deal(n))
    setFlipped([])
    setMatched(new Set())
    setMoves(0)
    setMessage('Tap a card to begin!')
  }, [pairs])

  useEffect(() => {
    if (flipped.length !== 2) return
    const [a, b] = flipped.map((i) => cards[i])
    setMoves((m) => m + 1)
    if (a.piece === b.piece) {
      const next = new Set(matched).add(a.piece)
      setMatched(next)
      setFlipped([])
      setMessage(next.size === pairs ? `You found them all! Yahuah made everything!` : `Yahuah made the ${names[a.piece]}!`)
    } else {
      const t = setTimeout(() => setFlipped([]), 900)
      setMessage('Not a match — try again!')
      return () => clearTimeout(t)
    }
  }, [flipped])

  const flip = (i: number) => {
    if (flipped.length === 2 || flipped.includes(i) || matched.has(cards[i].piece)) return
    setFlipped((f) => [...f, i])
  }

  const won = matched.size === pairs

  return (
    <div className="container-koz py-10">
      <Breadcrumbs items={[{ label: 'Kids Play', to: '/play' }, { label: 'Creation Memory Match' }]} />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl">Creation Memory Match</h1>
          <p className="mt-2 text-lg text-ink-700">Find the pairs of things Yahuah made.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="Number of pairs" className="inline-flex rounded-full bg-ink-50 p-1">
            {[4, 6, 8].map((n) => (
              <button key={n} type="button" aria-pressed={pairs === n} onClick={() => restart(n)} className={cx('rounded-full px-4 py-1.5 font-display font-semibold', pairs === n ? 'bg-ink-900 text-white' : 'text-ink-700')}>
                {n} pairs
              </button>
            ))}
          </div>
          <Button variant="secondary" size="sm" onClick={() => restart()}>
            New game
          </Button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-jordan-100 px-5 py-3">
        <p className="font-display text-xl font-semibold" aria-live="polite" data-testid="match-message">
          {message}
        </p>
        <p className="text-sm font-bold text-jordan-700">
          Moves: <span data-testid="match-moves">{moves}</span> · Pairs: {matched.size}/{pairs}
        </p>
      </div>

      <div className={cx('mx-auto mt-6 grid max-w-3xl gap-3 sm:gap-4', pairs === 4 ? 'grid-cols-4' : 'grid-cols-4')}>
        {cards.map((c, i) => {
          const isUp = flipped.includes(i) || matched.has(c.piece)
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => flip(i)}
              aria-label={isUp ? names[c.piece] : `Card ${i + 1}, face down`}
              data-piece={c.piece}
              className={cx(
                'relative aspect-square rounded-2xl border-2 border-ink-900 transition-all duration-300 sm:rounded-3xl',
                isUp ? 'bg-white shadow-pop-sm' : 'bg-jordan-500 shadow-pop-sm hover:-translate-y-1',
                matched.has(c.piece) && 'bg-olive-100',
              )}
            >
              {isUp ? (
                <CreationIcon piece={c.piece} className="absolute inset-[12%] motion-safe:animate-pop-in" />
              ) : (
                <Icon name="star" className="absolute inset-[30%] h-auto w-auto text-sun-400" />
              )}
            </button>
          )
        })}
      </div>

      {won && (
        <div className="mx-auto mt-8 max-w-xl rounded-[2rem] border-2 border-ink-900 bg-sun-100 p-8 text-center shadow-pop motion-safe:animate-pop-in">
          <p className="font-display text-3xl font-bold">Hooray! 🎉</p>
          <p className="mt-2 text-lg">You matched them all in {moves} moves.</p>
          <p className="mt-2 font-display text-xl">“In the beginning, Elohim created the heavens and the earth.” — Genesis 1:1</p>
          <Button className="mt-5" onClick={() => restart()}>
            Play again
          </Button>
        </div>
      )}
    </div>
  )
}
