import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { CreationIcon, type CreationPiece } from '../components/art/CreationArt'
import { Blob, Star } from '../components/art/Scenery'
import { ResourceCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { Breadcrumbs, Button, DraftBadge, InterpretationNote, Pill, ScriptureBox } from '../components/ui/primitives'
import { lessonBySlug } from '../content/lessons'
import { scriptureNote } from '../content/scripture'
import { ageGroups, topicById } from '../content/taxonomy'
import type { AgeGroupId } from '../content/types'
import { allResources } from '../lib/resources'
import { cx, themeClasses } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import NotFoundPage from './NotFoundPage'

const heroArt: Partial<Record<string, CreationPiece>> = { 'walking-in-his-ways': 'star', 'knowing-yahuah': 'sun', 'appointed-times': 'rest' }

const sections = [
  { id: 'scripture', label: 'Scripture' },
  { id: 'explain', label: 'Read aloud' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'plan', label: 'Lesson plan' },
  { id: 'activities', label: 'Activities' },
  { id: 'discuss', label: 'Discussion' },
  { id: 'memory', label: 'Memory verse' },
  { id: 'apply', label: 'Real life' },
  { id: 'parents', label: 'Parent notes' },
]

function Section({ id, title, icon, children, className }: { id: string; title: string; icon: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={cx('scroll-mt-28 print-avoid-break', className)}>
      <h2 id={`${id}-h`} className="mb-5 flex items-center gap-3 text-3xl font-semibold">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-sun-400 print:hidden">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function LessonPage() {
  const { slug = '' } = useParams()
  const lesson = lessonBySlug(slug)
  const [age, setAge] = useState<AgeGroupId>('growing-roots')
  const [plan, setPlan] = useState<'full' | 'quick'>('full')
  useDocumentMeta(lesson?.title ?? 'Lesson not found', lesson?.summary)
  if (!lesson) return <NotFoundPage />

  const t = themeClasses[lesson.theme]
  const topic = topicById(lesson.topic)
  const related = allResources.filter(
    (r) => lesson.relatedActivitySlugs.some((s) => r.id === `activity:${s}`) || lesson.relatedSongSlugs.some((s) => r.id === `song:${s}`),
  )

  return (
    <article>
      {/* Header */}
      <header className={cx('relative overflow-hidden', t.soft)}>
        <div className="container-koz py-10 sm:py-14">
          <div className="no-print">
            <Breadcrumbs items={[{ label: 'Learning Library', to: '/learn' }, { label: topic.name, to: `/learn?topic=${topic.id}` }, { label: lesson.title }]} />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DraftBadge long />
            <Pill theme={topic.theme}>{topic.name}</Pill>
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">{lesson.title}</h1>
          <p className={cx('mt-2 font-display text-xl font-semibold sm:text-2xl', t.text)}>{lesson.subtitle}</p>
          <p className="mt-4 max-w-3xl text-lg text-ink-700">{lesson.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold">
              <Icon name="clock" className="h-4 w-4" /> {lesson.durationMinutes} min · or {lesson.quickVersionMinutes}-min quick version
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold">
              <Icon name="family" className="h-4 w-4" /> Ages 1–11 with age adaptations
            </span>
            <Button variant="secondary" size="sm" icon="printer" onClick={() => window.print()} className="no-print">
              Print lesson
            </Button>
          </div>

          <div className="mt-8 max-w-3xl rounded-[1.75rem] border-2 border-ink-900 bg-white p-6 shadow-pop-sm">
            <p className="eyebrow text-pom-700">The big idea</p>
            <p className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{lesson.bigIdea}</p>
          </div>
        </div>
        <div className="pointer-events-none absolute top-1/2 right-[4%] hidden w-[26rem] -translate-y-1/2 xl:block" aria-hidden="true">
          <Blob color="#ffffff" shape={1} className="w-full" />
          <CreationIcon piece={heroArt[lesson.topic] ?? 'star'} className="absolute inset-[18%] motion-safe:animate-float" />
          <Star className="absolute top-[8%] left-[12%] h-8 w-8 motion-safe:animate-twinkle" fill={t.hex} />
          <Star className="absolute right-[6%] bottom-[14%] h-5 w-5 motion-safe:animate-twinkle [animation-delay:1s]" fill="#24154f" />
        </div>
      </header>

      <div className="container-koz">
        <div className="mt-8 rounded-2xl border-2 border-dashed border-pom-300 bg-pom-100/60 p-4 text-[0.95rem] text-ink-900 sm:p-5">
          <p className="font-bold text-pom-700">This is a draft sample lesson awaiting theological review.</p>
          <p className="mt-1">
            Scripture quotations appear in “Scripture” boxes. Anything labelled “Our teaching (interpretation)” is explanation and application,
            not a direct quotation. {scriptureNote.long}
          </p>
        </div>
      </div>

      <div className="container-koz grid gap-12 py-10 lg:grid-cols-[14rem_1fr]">
        {/* In-page navigation */}
        <nav aria-label="Lesson sections" className="no-print hidden lg:block">
          <ul className="sticky top-24 space-y-1 border-l-2 border-ink-100">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="-ml-0.5 block border-l-2 border-transparent py-1.5 pl-4 font-semibold text-ink-700 hover:border-ink-900 hover:text-ink-900">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 space-y-16">
          <Section id="scripture" title="What the Scripture says" icon="book">
            <div className="grid gap-6">
              {lesson.scriptureSays.map((q) => (
                <ScriptureBox key={q.reference} reference={q.reference} text={q.text} />
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {lesson.interpretation.map((p, i) => (
                <InterpretationNote key={i}>
                  <p>{p.replace(/^Teaching note:\s*/, '')}</p>
                </InterpretationNote>
              ))}
            </div>
          </Section>

          <Section id="explain" title="Read aloud: a child-friendly explanation" icon="heart">
            <div className="rounded-[2rem] bg-white p-6 text-lg leading-relaxed shadow-soft ring-1 ring-ink-100 sm:p-8">
              {lesson.explanation.map((p, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </Section>

          <Section id="objectives" title="Learning objectives" icon="star">
            <p className="mb-4 text-ink-700">By the end of this lesson, your child will be able to:</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {lesson.objectives.map((o) => (
                <li key={o} className="flex gap-3 rounded-2xl bg-olive-100 p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olive-500 text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="plan" title="Lesson plan" icon="clock">
            <div role="tablist" aria-label="Lesson length" className="no-print mb-6 inline-flex rounded-full bg-ink-50 p-1">
              {(['full', 'quick'] as const).map((p) => (
                <button
                  key={p}
                  role="tab"
                  type="button"
                  aria-selected={plan === p}
                  aria-controls={`plan-${p}`}
                  id={`plan-tab-${p}`}
                  onClick={() => setPlan(p)}
                  className={cx('rounded-full px-5 py-2 font-display font-semibold transition', plan === p ? 'bg-ink-900 text-white' : 'text-ink-700')}
                >
                  {p === 'full' ? `Full lesson · ${lesson.durationMinutes} min` : `Quick version · ${lesson.quickVersionMinutes} min`}
                </button>
              ))}
            </div>
            <div id="plan-full" role="tabpanel" aria-labelledby="plan-tab-full" hidden={plan !== 'full'} className="print:!block">
              <ol className="relative space-y-4 border-l-4 border-dotted border-sun-400 pl-6">
                {lesson.lessonFlow.map((step, i) => (
                  <li key={step.title} className="relative">
                    <span className="absolute top-1 -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink-900 bg-sun-500 font-display text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-ink-100">
                      <p className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-display text-xl font-semibold">{step.title}</span>
                        <span className="text-sm font-bold text-ink-500">{step.minutes} min</span>
                      </p>
                      <p className="mt-1 text-ink-700">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div id="plan-quick" role="tabpanel" aria-labelledby="plan-tab-quick" hidden={plan !== 'quick'} className="print:!block print:mt-6">
              <div className="rounded-[1.75rem] bg-jordan-100 p-6">
                <p className="font-display text-xl font-semibold">Busy day? Try the {lesson.quickVersionMinutes}-minute version.</p>
                <ol className="mt-3 list-decimal space-y-2 pl-6">
                  {lesson.quickVersion.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ol>
              </div>
            </div>

            <h3 className="mt-10 mb-4 text-2xl font-semibold">Adapting for each age</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {ageGroups.map((g) => (
                <div key={g.id} className={cx('rounded-2xl p-5', themeClasses[g.theme].soft)}>
                  <p className={cx('eyebrow', themeClasses[g.theme].text)}>{g.ages}</p>
                  <p className="font-display text-xl font-semibold">{g.name}</p>
                  <p className="mt-2 text-[0.95rem] text-ink-900">{lesson.ageAdaptations[g.id]}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="activities" title="Activities" icon="scissors">
            <div className="grid gap-6 md:grid-cols-2">
              {lesson.activities.map((a) => (
                <div key={a.title} className="flex flex-col rounded-[1.75rem] border-2 border-ink-900 bg-white p-6 shadow-pop-sm">
                  <p className="flex items-center justify-between gap-2">
                    <span className="font-display text-xl font-semibold">{a.title}</span>
                    <Pill icon="clock">{a.minutes} min</Pill>
                  </p>
                  <p className="mt-4 text-sm font-bold tracking-wider text-ink-500 uppercase">You’ll need</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[0.95rem]">
                    {a.materials.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-bold tracking-wider text-ink-500 uppercase">Steps</p>
                  <ol className="mt-1 flex-1 list-decimal space-y-1 pl-5 text-[0.95rem]">
                    {a.steps.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ol>
                  {a.activitySlug && (
                    <Link to={`/activities/${a.activitySlug}`} className="no-print mt-5 inline-flex items-center gap-2 font-display font-semibold text-jordan-700 hover:underline">
                      Open the printable / game <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section id="discuss" title="Discussion questions" icon="question">
            <div role="tablist" aria-label="Choose an age group" className="no-print mb-5 flex flex-wrap gap-2">
              {ageGroups.map((g) => (
                <button
                  key={g.id}
                  role="tab"
                  type="button"
                  id={`dq-tab-${g.id}`}
                  aria-selected={age === g.id}
                  aria-controls={`dq-${g.id}`}
                  onClick={() => setAge(g.id)}
                  className={cx(
                    'rounded-full border-2 px-4 py-2 font-display font-semibold transition',
                    age === g.id ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-100 bg-white hover:border-ink-900',
                  )}
                >
                  {g.name} <span className="text-sm opacity-75">({g.ages.replace('Ages ', '')})</span>
                </button>
              ))}
            </div>
            {ageGroups.map((g) => (
              <div key={g.id} id={`dq-${g.id}`} role="tabpanel" aria-labelledby={`dq-tab-${g.id}`} hidden={age !== g.id} className="print:!block print:mb-4">
                <p className="mb-2 hidden font-bold print:block">{g.name}</p>
                <ul className="space-y-3">
                  {lesson.discussionQuestions[g.id].map((q) => (
                    <li key={q} className="flex gap-3 rounded-2xl bg-white p-4 text-lg ring-1 ring-ink-100">
                      <span className="font-display text-2xl leading-none text-pom-500" aria-hidden="true">
                        ?
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section id="memory" title="Memory verse" icon="sparkle">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-white sm:p-10">
              <p className="eyebrow text-sun-400">{lesson.memoryVerse.reference}</p>
              <p className="mt-3 font-display text-3xl leading-snug font-semibold text-white sm:text-4xl">“{lesson.memoryVerse.text}”</p>
              <div className="mt-6 inline-block rounded-2xl bg-white/10 px-5 py-3">
                <p className="text-xs font-bold tracking-wider text-olive-300 uppercase">For Little Sprouts (a simple phrase, not a quotation)</p>
                <p className="font-display text-xl">{lesson.memoryVerse.littleSproutsPhrase}</p>
              </div>
            </div>
          </Section>

          <Section id="apply" title="Real-life application" icon="path">
            <ul className="grid gap-4 sm:grid-cols-2">
              {lesson.realLifeApplication.map((a, i) => (
                <li key={a} className={cx('rounded-2xl p-5 text-[1.02rem]', ['bg-sun-100', 'bg-jordan-100', 'bg-pom-100', 'bg-lilac-100'][i % 4])}>
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[1.75rem] border-2 border-ink-900 bg-white p-6 sm:p-8">
              <p className="eyebrow text-lilac-700">Let’s pray</p>
              <p className="mt-2 font-display text-xl leading-relaxed">{lesson.prayer}</p>
            </div>
          </Section>

          <Section id="parents" title="Notes for parents" icon="family">
            <ul className="space-y-3">
              {lesson.parentNotes.map((n) => (
                <li key={n} className="flex gap-3">
                  <Icon name="leaf" className="mt-1 h-5 w-5 shrink-0 text-olive-500" />
                  {n}
                </li>
              ))}
            </ul>
          </Section>

          {related.length > 0 && (
            <section aria-labelledby="related-h" className="no-print">
              <h2 id="related-h" className="mb-5 text-3xl font-semibold">
                Songs & printables for this lesson
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {related.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}
