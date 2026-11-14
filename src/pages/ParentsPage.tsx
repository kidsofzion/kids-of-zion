import { Link } from 'react-router'
import { OliveBranch } from '../components/art/Scenery'
import { PageHero } from '../components/layout/PageHero'
import { Icon } from '../components/ui/Icon'
import { ButtonLink, ComingSoonBadge, DraftBadge, SectionHeading } from '../components/ui/primitives'
import { articleCategories, articles } from '../content/articles'
import { cx, themeClasses } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const routine = [
  { time: 'Morning', text: 'Read one verse at breakfast and pray for the day.', icon: 'sun', bg: 'bg-sun-100' },
  { time: 'On the go', text: 'Sing a Set Apart Sound song or practise the memory verse.', icon: 'music', bg: 'bg-jordan-100' },
  { time: 'Afternoon', text: 'A 10-minute lesson or printable activity.', icon: 'crayon', bg: 'bg-pom-100' },
  { time: 'Bedtime', text: 'Ask, “Where did you see Yahuah today?” and pray together.', icon: 'star', bg: 'bg-lilac-100' },
]

export default function ParentsPage() {
  useDocumentMeta('Parent Corner', 'Encouragement, teaching tips and simple family routines for parents raising children to know Yahuah and walk in His ways.')
  const reflections = articles.filter((a) => a.category === 'reflections')
  return (
    <>
      <PageHero
        eyebrow="Parent corner"
        theme="olive"
        title="Encouragement for the parents raising little hearts"
        description="Teaching tips, family rhythms and reflections for the beautiful, ordinary work of teaching our children the ways of the Most High."
        art={<OliveBranch className="w-full" />}
      />

      <section className="container-koz py-14" aria-labelledby="articles-heading">
        <SectionHeading eyebrow="Articles" eyebrowClass="text-olive-700" title={<span id="articles-heading">Read & be refreshed</span>} />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const t = themeClasses[a.theme]
            return (
              <Link key={a.slug} to={`/parents/${a.slug}`} className="group flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink-900 bg-white shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop">
                <div className={cx('h-3', t.solid)} />
                <div className="flex flex-1 flex-col p-6">
                  <p className={cx('eyebrow', t.text)}>{articleCategories.find((c) => c.id === a.category)?.name}</p>
                  <h3 className="mt-2 text-2xl font-semibold group-hover:underline">{a.title}</h3>
                  <p className="mt-2 flex-1 text-ink-700">{a.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold text-ink-500">
                    <Icon name="clock" className="h-4 w-4" /> {a.readingMinutes} min read
                    {a.status === 'draft-awaiting-review' && <DraftBadge />}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="container-koz" aria-labelledby="heart-heading">
        <div className="grid items-center gap-8 rounded-[2.5rem] bg-ink-900 p-8 text-white sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow text-sun-400">From a mother’s heart</p>
            <h2 id="heart-heading" className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Reflections from the journey
            </h2>
            <p className="mt-4 text-lg text-ink-100">
              Kids of Zion began with a mother’s desire to create meaningful, joyful ways to teach her own daughters the ways of the Most High.
              Personal reflections, lessons learned and encouragement from that journey will be shared here.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-white/10 p-6 text-center">
            {reflections.length === 0 ? (
              <>
                <ComingSoonBadge>First reflection coming soon</ComingSoonBadge>
                <p className="mt-3 text-ink-100">Check back soon for the first story.</p>
              </>
            ) : (
              <ul className="space-y-2 text-left">
                {reflections.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/parents/${r.slug}`} className="font-display text-lg font-semibold text-sun-400 hover:underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="container-koz py-16" aria-labelledby="routine-heading">
        <SectionHeading eyebrow="Family rhythm" eyebrowClass="text-jordan-700" title={<span id="routine-heading">A simple day of faith at home</span>} description="Small, faithful moments add up. Start with one and grow from there." />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routine.map((r, i) => (
            <li key={r.time} className={cx('rounded-[1.75rem] p-6', r.bg)}>
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink-900">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-bold text-ink-900/15">{i + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{r.time}</h3>
              <p className="mt-1 text-ink-700">{r.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/find-a-lesson" icon="search">
            Find a lesson for today
          </ButtonLink>
          <ButtonLink to="/activities" variant="secondary">
            Browse printables
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
