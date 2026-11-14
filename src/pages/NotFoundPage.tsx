import { Star } from '../components/art/Scenery'
import { ButtonLink } from '../components/ui/primitives'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function NotFoundPage() {
  useDocumentMeta('Page not found')
  return (
    <section className="container-koz flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="relative">
        <p className="font-display text-[8rem] leading-none font-bold text-sun-500">404</p>
        <Star className="absolute -top-2 -right-8 h-10 w-10 motion-safe:animate-twinkle" />
      </div>
      <h1 className="mt-4 text-4xl font-bold">Oops! This page wandered off.</h1>
      <p className="mt-3 max-w-md text-lg text-ink-700">Let’s find our way back. Try the home page or the learning library.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/" icon="arrow-left">
          Go home
        </ButtonLink>
        <ButtonLink to="/learn" variant="secondary">
          Learning library
        </ButtonLink>
      </div>
    </section>
  )
}
