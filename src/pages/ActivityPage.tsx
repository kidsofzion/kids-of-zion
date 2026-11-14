import { useParams } from 'react-router'
import { ResourceCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { Breadcrumbs, Button, ButtonLink, Pill } from '../components/ui/primitives'
import { activityBySlug } from '../content/activities'
import { ageGroupById, resourceTypeById, topicById } from '../content/taxonomy'
import { printables } from '../printables'
import { allResources } from '../lib/resources'
import { cx, themeClasses } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import NotFoundPage from './NotFoundPage'

export default function ActivityPage() {
  const { slug = '' } = useParams()
  const activity = activityBySlug(slug)
  useDocumentMeta(activity?.title ?? 'Activity not found', activity?.summary)
  if (!activity) return <NotFoundPage />

  const t = themeClasses[activity.theme]
  const Printable = activity.printable ? printables[activity.printable] : undefined
  const related = allResources.filter((r) => activity.relatedLessonSlugs.some((s) => r.id === `lesson:${s}`))

  return (
    <article>
      <header className={cx('no-print', t.soft)}>
        <div className="container-koz py-10 sm:py-12">
          <Breadcrumbs items={[{ label: 'Activities & Printables', to: '/activities' }, { label: activity.title }]} />
          <div className="flex flex-wrap gap-2">
            <Pill theme={activity.theme} icon={resourceTypeById(activity.type).icon}>
              {resourceTypeById(activity.type).name}
            </Pill>
            <Pill theme="ink" icon="clock">
              {activity.durationMinutes} min
            </Pill>
            {activity.ageGroups.map((a) => (
              <Pill key={a} theme={ageGroupById(a).theme}>
                {ageGroupById(a).name} · {ageGroupById(a).ages.replace('Ages ', '')}
              </Pill>
            ))}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">{activity.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-700">{activity.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {Printable && (
              <Button size="lg" icon="printer" onClick={() => window.print()}>
                Print or save as PDF
              </Button>
            )}
            {activity.playRoute && (
              <ButtonLink to={activity.playRoute} size="lg" variant="secondary" icon="star">
                Play on screen
              </ButtonLink>
            )}
          </div>
        </div>
      </header>

      <div className="container-koz grid gap-10 py-10 lg:grid-cols-[20rem_1fr] print:block print:p-0">
        <aside className="no-print space-y-6">
          <div className="rounded-[1.75rem] bg-white p-6 ring-1 ring-ink-100">
            <h2 className="text-xl font-semibold">You’ll need</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {activity.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <h2 className="mt-6 text-xl font-semibold">How to</h2>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5">
              {activity.instructions.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
            <h2 className="mt-6 text-xl font-semibold">Scripture</h2>
            <p className="mt-1 font-semibold text-jordan-700">{activity.scriptureReferences.join(' · ')}</p>
            <p className="mt-6 text-sm text-ink-500">Topic: {topicById(activity.topic).name}</p>
          </div>
          {related.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Use it with this lesson</h2>
              {related.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          )}
        </aside>

        <section aria-label="Printable preview" className="min-w-0">
          {Printable ? (
            <>
              <p className="no-print mb-4 flex items-center gap-2 text-sm font-semibold text-ink-700">
                <Icon name="printer" className="h-4 w-4" /> Preview — prints on US Letter (choose “Fit to page” for A4).
              </p>
              <div className="print-sheet-stack flex flex-col gap-8">
                <Printable />
              </div>
            </>
          ) : (
            <p>This activity has no printable page.</p>
          )}
        </section>
      </div>
    </article>
  )
}
