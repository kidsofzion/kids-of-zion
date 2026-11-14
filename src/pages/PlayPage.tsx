import { Link } from 'react-router'
import { CreationIcon } from '../components/art/CreationArt'
import { Star } from '../components/art/Scenery'
import { Icon } from '../components/ui/Icon'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const games = [
  { to: '/play/memory-match', title: 'Creation Memory Match', text: 'Flip the cards and find the pairs!', pieces: ['fish', 'bird'] as const, bg: 'bg-jordan-500', ages: 'Ages 3+' },
  { to: '/play/creation-order', title: 'Creation Week', text: 'Tap the days of creation in order, 1 to 7.', pieces: ['sun', 'tree'] as const, bg: 'bg-lilac-300', ages: 'Ages 4+' },
]

export default function PlayPage() {
  useDocumentMeta('Kids Play', 'Gentle, ad-free Bible learning games for children — creation memory match and creation week order.')
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-pom-600 text-white">
        <Star className="absolute top-8 left-[8%] h-8 w-8 motion-safe:animate-twinkle" />
        <Star className="absolute top-20 right-[12%] h-5 w-5 motion-safe:animate-twinkle [animation-delay:1s]" fill="#fff" />
        <Star className="absolute right-[30%] bottom-16 h-4 w-4 motion-safe:animate-twinkle [animation-delay:2s]" />
        <div className="container-koz py-14 text-center sm:py-20">
          <p className="eyebrow text-sun-200">Kids play</p>
          <h1 className="mt-2 text-5xl font-bold text-white sm:text-7xl">Let’s play & learn!</h1>
          <p className="mx-auto mt-4 max-w-xl text-xl text-white">Games made for little hands. No ads, no sign-ups — just joyful learning.</p>
        </div>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-8 w-full" aria-hidden="true">
          <path d="M0 40 C360 0 720 40 1080 10 C1260 0 1380 20 1440 24 V40Z" fill="#fffaf2" />
        </svg>
      </section>
      <div className="container-koz grid gap-8 py-14 md:grid-cols-2">
        {games.map((g) => (
          <Link key={g.to} to={g.to} className="group overflow-hidden rounded-[2.5rem] border-2 border-ink-900 bg-white shadow-pop transition hover:-translate-y-1.5">
            <div className={`relative flex h-56 items-center justify-center gap-4 ${g.bg}`}>
              {g.pieces.map((p, i) => (
                <span key={p} className={`flex h-32 w-32 items-center justify-center rounded-3xl border-2 border-ink-900 bg-white p-4 shadow-pop-sm transition group-hover:scale-105 ${i ? 'rotate-6' : '-rotate-6'}`}>
                  <CreationIcon piece={p} className="h-full w-full" />
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 p-7">
              <div>
                <p className="text-sm font-bold text-ink-500">{g.ages}</p>
                <h2 className="text-3xl font-semibold">{g.title}</h2>
                <p className="mt-1 text-lg text-ink-700">{g.text}</p>
              </div>
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-ink-900 bg-sun-500 transition group-hover:scale-110">
                <Icon name="play" className="ml-1 h-7 w-7" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p className="container-koz text-center text-ink-700">Grown-ups: play alongside your child and talk about what Yahuah made!</p>
    </div>
  )
}
