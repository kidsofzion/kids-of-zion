import { useRef } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Sprout } from '../components/art/Scenery'
import { PageHero } from '../components/layout/PageHero'
import { Icon } from '../components/ui/Icon'
import { Button, ButtonLink, DraftBadge, Pill } from '../components/ui/primitives'
import { ageGroups, resourceTypeById, topics } from '../content/taxonomy'
import type { AgeGroupId, TopicId } from '../content/types'
import { findResources } from '../lib/resources'
import { cx, themeClasses } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const timeOptions = [
  { minutes: 5, label: '5 min', note: 'A quick moment' },
  { minutes: 10, label: '10 min', note: 'Short & sweet' },
  { minutes: 20, label: '20 min', note: 'Room to explore' },
  { minutes: 30, label: '30 min', note: 'A full lesson' },
  { minutes: 60, label: '45+ min', note: 'Lesson + activities' },
]

function Step({ n, title, done, children }: { n: number; title: string; done: boolean; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-[2rem] bg-white p-6 ring-1 ring-ink-100 sm:p-8">
      <legend className="sr-only">{title}</legend>
      <div className="mb-5 flex items-center gap-3" aria-hidden="true">
        <span className={cx('flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink-900 font-display text-lg font-bold', done ? 'bg-olive-500 text-white' : 'bg-sun-500')}>
          {done ? <Icon name="check" className="h-5 w-5" /> : n}
        </span>
        <p className="font-display text-2xl font-semibold">{title}</p>
      </div>
      {children}
    </fieldset>
  )
}

const choice = (on: boolean) =>
  cx(
    'rounded-[1.25rem] border-2 p-4 text-left transition hover:-translate-y-0.5',
    on ? 'border-ink-900 bg-ink-900 text-white shadow-[0_4px_0_0_var(--color-sun-500)]' : 'border-ink-100 bg-paper hover:border-ink-900',
  )

export default function FindLessonPage() {
  useDocumentMeta('Find a Lesson', 'Choose your child’s age, how much time you have and a topic — we’ll suggest the right Kids of Zion lesson, song or activity.')
  const [params, setParams] = useSearchParams()
  const resultsRef = useRef<HTMLDivElement>(null)

  const age = params.get('age') as AgeGroupId | null
  const minutes = params.get('time') ? Number(params.get('time')) : null
  const topic = (params.get('topic') as TopicId | 'any' | null) ?? null

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    next.set(key, value)
    setParams(next, { replace: true })
  }

  const ready = Boolean(age && minutes && topic)
  const results = ready ? findResources({ ageGroup: age!, minutes: minutes!, topic: topic === 'any' ? undefined : (topic as TopicId) }) : []
  const topicMatches = results.filter((r) => topic === 'any' || r.resource.topic === topic)
  const others = results.filter((r) => !(topic === 'any' || r.resource.topic === topic))

  return (
    <>
      <PageHero
        eyebrow="Find a lesson"
        theme="sun"
        title="What will we learn today?"
        description="Answer three quick questions and we’ll suggest lessons, songs and activities that fit your child and your time."
        art={
          <div className="flex items-end justify-center gap-2">
            <Sprout stage={1} className="w-24" />
            <Sprout stage={2} className="w-32" />
            <Sprout stage={3} className="w-40" />
          </div>
        }
      />

      <div className="container-koz grid gap-6 py-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <Step n={1} title="How old is your child?" done={!!age}>
            <div className="grid gap-3 sm:grid-cols-3">
              {ageGroups.map((g) => (
                <button key={g.id} type="button" aria-pressed={age === g.id} onClick={() => set('age', g.id)} className={choice(age === g.id)}>
                  <span className="block font-display text-xl font-semibold">{g.name}</span>
                  <span className={cx('block text-sm font-bold', age === g.id ? 'text-sun-400' : themeClasses[g.theme].text)}>{g.ages}</span>
                </button>
              ))}
            </div>
          </Step>

          <Step n={2} title="How much time do you have?" done={!!minutes}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {timeOptions.map((t) => (
                <button key={t.minutes} type="button" aria-pressed={minutes === t.minutes} onClick={() => set('time', String(t.minutes))} className={choice(minutes === t.minutes)}>
                  <span className="block font-display text-xl font-semibold">{t.label}</span>
                  <span className={cx('block text-xs font-semibold', minutes === t.minutes ? 'text-ink-100' : 'text-ink-500')}>{t.note}</span>
                </button>
              ))}
            </div>
          </Step>

          <Step n={3} title="Choose a topic" done={!!topic}>
            <div className="grid gap-3 sm:grid-cols-2">
              <button type="button" aria-pressed={topic === 'any'} onClick={() => set('topic', 'any')} className={choice(topic === 'any')}>
                <span className="flex items-center gap-2 font-display text-lg font-semibold">
                  <Icon name="sparkle" /> Surprise me — any topic
                </span>
              </button>
              {topics.map((t) => (
                <button key={t.id} type="button" aria-pressed={topic === t.id} onClick={() => set('topic', t.id)} className={choice(topic === t.id)}>
                  <span className="flex items-center gap-2 font-display text-lg font-semibold">
                    <Icon name={t.icon} /> {t.name}
                  </span>
                </button>
              ))}
            </div>
          </Step>
        </div>

        <div ref={resultsRef} className="lg:sticky lg:top-24 lg:self-start" aria-live="polite">
          <div className="rounded-[2rem] border-2 border-ink-900 bg-white p-6 shadow-pop sm:p-8">
            {!ready ? (
              <div className="py-10 text-center">
                <Icon name="search" className="mx-auto h-12 w-12 text-sun-500" />
                <p className="mt-4 font-display text-2xl font-semibold">Your suggestions will appear here</p>
                <p className="mt-2 text-ink-700">Pick an age, a time and a topic.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-semibold" data-testid="finder-results-heading">
                  {topicMatches.length > 0 ? `We found ${topicMatches.length} great ${topicMatches.length === 1 ? 'match' : 'matches'}` : 'No exact matches yet'}
                </h2>
                {topicMatches.length === 0 && (
                  <p className="mt-2 text-ink-700">We’re still growing this topic. Here are other resources that fit your child and your time.</p>
                )}
                <ul className="mt-5 space-y-3">
                  {(topicMatches.length > 0 ? topicMatches : others).slice(0, 6).map(({ resource: r, reasons, useQuickVersion }) => (
                    <li key={r.id}>
                      <Link to={r.href} className="group flex gap-4 rounded-2xl border-2 border-ink-100 p-4 transition hover:border-ink-900">
                        <span className={cx('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl', themeClasses[r.theme].soft, themeClasses[r.theme].text)}>
                          <Icon name={resourceTypeById(r.type).icon} className="h-6 w-6" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="font-display text-lg font-semibold group-hover:underline">{r.title}</span>
                            {r.isDraft && <DraftBadge />}
                          </span>
                          <span className="mt-1 flex flex-wrap gap-1.5">
                            <Pill theme="ink">{resourceTypeById(r.type).name}</Pill>
                            {useQuickVersion ? <Pill theme="jordan" icon="clock">Quick version</Pill> : <Pill theme="ink" icon="clock">{r.durationMinutes} min</Pill>}
                          </span>
                          <span className="mt-2 block text-sm text-ink-700">{reasons.join(' · ')}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {topicMatches.length > 0 && others.length > 0 && (
                  <p className="mt-4 text-sm text-ink-700">
                    + {others.length} more resource{others.length === 1 ? '' : 's'} from other topics fit your time.
                  </p>
                )}
                {results.length === 0 && (
                  <p className="mt-2 text-ink-700">Try choosing a little more time — or browse everything in the library.</p>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink to={`/learn?age=${age}${topic && topic !== 'any' ? `&topic=${topic}` : ''}`} variant="secondary" size="sm" iconRight="arrow">
                    See all in the library
                  </ButtonLink>
                  <Button variant="ghost" size="sm" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
                    Start over
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
