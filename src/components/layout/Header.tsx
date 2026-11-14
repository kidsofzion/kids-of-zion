import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navItems } from '../../lib/site'
import { cx } from '../../lib/theme'
import { Logo } from '../art/Scenery'
import { Icon } from '../ui/Icon'
import { ButtonLink } from '../ui/primitives'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cx(
        'no-print sticky top-0 z-50 transition-all duration-200',
        scrolled || open ? 'bg-paper shadow-[0_2px_0_0_rgb(36_21_79_/_0.08)]' : 'bg-paper',
      )}
    >
      <div className="container-koz flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="group rounded-xl" aria-label="Kids of Zion home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cx(
                      'relative rounded-full px-3 py-2 font-display text-[0.98rem] font-semibold transition-colors xl:px-3.5',
                      isActive ? 'bg-ink-900 text-white' : 'text-ink-900 hover:bg-sun-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/play"
            className="hidden items-center gap-1.5 rounded-full bg-pom-100 px-3.5 py-2 font-display text-[0.98rem] font-semibold text-pom-700 transition hover:bg-pom-300/60 sm:inline-flex"
          >
            <Icon name="star" className="h-4 w-4" /> Kids Play
          </Link>
          <span className="hidden sm:block">
            <ButtonLink to="/find-a-lesson" size="sm" icon="search">
              Find a Lesson
            </ButtonLink>
          </span>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink-900 bg-white shadow-pop-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-paper lg:hidden">
          <nav
            aria-label="Mobile"
            className="container-koz pt-4 pb-10"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('a')) setOpen(false)
            }}
          >
            <ul className="grid gap-2">
              <li>
                <NavLink to="/" end className={({ isActive }) => mobileLink(isActive, 'bg-sun-100')}>
                  Home
                </NavLink>
              </li>
              {navItems.map((item, i) => (
                <li key={item.to} className="animate-pop-in" style={{ animationDelay: `${i * 30}ms` }}>
                  <NavLink to={item.to} className={({ isActive }) => mobileLink(isActive, ['bg-sun-100', 'bg-jordan-100', 'bg-pom-100', 'bg-olive-100', 'bg-lilac-100', 'bg-sky-100'][i])}>
                    {item.long}
                    <Icon name="arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <ButtonLink to="/find-a-lesson" icon="search" className="w-full">
                Find a Lesson
              </ButtonLink>
              <ButtonLink to="/play" variant="secondary" icon="star" className="w-full">
                Kids Play
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

const mobileLink = (active: boolean, bg: string) =>
  cx(
    'flex items-center justify-between rounded-2xl px-5 py-4 font-display text-xl font-semibold',
    active ? 'bg-ink-900 text-white' : `${bg} text-ink-900`,
  )
