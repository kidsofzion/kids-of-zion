import { useParams } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { MediaPlaceholder } from '../components/media/LyricVideo'
import { ResourceCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { Breadcrumbs } from '../components/ui/primitives'
import { appointedTimeBySlug } from '../content/appointedTimes'
import { allResources } from '../lib/resources'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import NotFoundPage from './NotFoundPage'

export default function AppointedTimePage() {
  const { slug = '' } = useParams()
  const a = appointedTimeBySlug(slug)
  useDocumentMeta(a ? `${a.name} (${a.hebrewName})` : 'Not found', a?.forChildren)
  if (!a) return <NotFoundPage />
  const resources = allResources.filter((r) => a.lessonSlugs.some((s) => r.id === `lesson:${s}`) || a.activitySlugs.some((s) => r.id === `activity:${s}`))

  return (
    <>
      <PageHero eyebrow={`${a.hebrewName} · ${a.season}`} theme={a.theme} title={a.name} description={a.forChildren} art={<span className="block text-center text-[9rem]" aria-hidden="true">{a.emoji}</span>}>
        <div className="mt-6">
          <Breadcrumbs items={[{ label: 'His Appointed Times', to: '/appointed-times' }, { label: a.name }]} />
        </div>
      </PageHero>
      <div className="container-koz grid gap-10 py-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border-2 border-ink-900 bg-white p-6">
            <p className="eyebrow text-jordan-700">What Scripture says</p>
            <p className="mt-2 text-lg">{a.scriptureSummary}</p>
            <p className="mt-3 font-bold text-jordan-700">Read: {a.references.join(' · ')}</p>
          </div>
          <div className="rounded-[1.75rem] bg-sun-100 p-6">
            <p className="eyebrow text-sun-700">Family ideas</p>
            <p className="mt-1 text-sm text-ink-700">Practical suggestions to adapt to your family’s practice.</p>
            <ul className="mt-3 space-y-2">
              {a.familyIdeas.map((i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="sparkle" className="mt-1 h-4 w-4 shrink-0 text-sun-700" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-3xl font-semibold">Lessons & activities</h2>
          {resources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {resources.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          ) : (
            <MediaPlaceholder icon="calendar" title="Lessons coming soon" text={`Lessons, songs and printables for ${a.name} are being prepared and will appear here.`} />
          )}
        </div>
      </div>
    </>
  )
}
