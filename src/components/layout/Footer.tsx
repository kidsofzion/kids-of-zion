import { Link } from 'react-router'
import { scriptureNote } from '../../content/scripture'
import { navItems, site } from '../../lib/site'
import { Logo, Star } from '../art/Scenery'
import { Icon } from '../ui/Icon'

export function Footer() {
  return (
    <footer className="no-print relative mt-24 bg-ink-900 text-ink-100">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute -top-[59px] h-[60px] w-full" aria-hidden="true">
        <path d="M0 60 C240 0 480 50 720 30 C960 10 1200 50 1440 20 V60Z" fill="#24154f" />
      </svg>
      <Star className="absolute top-4 right-[4%] h-6 w-6 motion-safe:animate-twinkle" />
      <Star className="absolute top-24 right-[18%] h-3 w-3 motion-safe:animate-twinkle [animation-delay:1.2s]" fill="#fff" />

      <div className="container-koz grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm font-display text-xl text-white">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-ink-100">{site.mission}</p>
        </div>

        <div>
          <h2 className="eyebrow mb-4 text-sun-400">Explore</h2>
          <ul className="grid gap-2">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white hover:underline">
                  {n.long}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/find-a-lesson" className="hover:text-white hover:underline">
                Find a Lesson
              </Link>
            </li>
            <li>
              <Link to="/play" className="hover:text-white hover:underline">
                Kids Play
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-4 text-sun-400">Our promise to families</h2>
          <ul className="grid gap-3 text-[0.95rem]">
            {['No child accounts or sign-ups', 'No tracking or advertising cookies', 'No public comments', 'Videos load only when you press play'].map((t) => (
              <li key={t} className="flex gap-2">
                <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-olive-300" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-koz flex flex-col gap-2 py-6 text-sm text-ink-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kids of Zion. All rights reserved.</p>
          <p className="max-w-xl md:text-right">{scriptureNote.short}</p>
        </div>
      </div>
    </footer>
  )
}
