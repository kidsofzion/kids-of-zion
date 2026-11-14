import { useState } from 'react'
import { CreationIcon } from '../components/art/CreationArt'
import { PageHero } from '../components/layout/PageHero'
import { ResourceCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { activities } from '../content/activities'
import { resourceTypes } from '../content/taxonomy'
import type { ResourceType } from '../content/types'
import { allResources } from '../lib/resources'
import { cx } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function ActivitiesPage() {
  useDocumentMeta('Activities & Printables', 'Free printable Bible coloring pages, crafts, matching games, Scripture cards and worksheets for children.')
  const [type, setType] = useState<ResourceType | 'all'>('all')
  const activityResources = allResources.filter((r) => r.kind === 'activity')
  const shown = type === 'all' ? activityResources : activityResources.filter((r) => r.type === type)
  const typesPresent = resourceTypes.filter((t) => activities.some((a) => a.type === t.id))

  return (
    <>
      <PageHero
        eyebrow="Activities & printables"
        theme="pom"
        title="Hands-on faith for little hands"
        description="Coloring pages, crafts, games, Scripture cards and worksheets. Open any printable and press “Print” — or choose “Save as PDF” in the print window."
        art={
          <div className="grid grid-cols-3 gap-3">
            {(['flower', 'star', 'fish', 'sun', 'tree', 'bird'] as const).map((p, i) => (
              <div key={p} className={cx('flex aspect-square items-center justify-center rounded-3xl border-2 border-ink-900 bg-white p-3 shadow-pop-sm', i % 2 ? 'rotate-3' : '-rotate-3')}>
                <CreationIcon piece={p} className="h-full w-full" />
              </div>
            ))}
          </div>
        }
      />
      <div className="container-koz py-10">
        <div role="group" aria-label="Filter by activity type" className="mb-8 flex flex-wrap gap-2">
          {[{ id: 'all' as const, name: 'Everything', icon: 'sparkle' }, ...typesPresent].map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={type === t.id}
              onClick={() => setType(t.id)}
              className={cx(
                'inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 font-display font-semibold transition',
                type === t.id ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-100 bg-white hover:border-ink-900',
              )}
            >
              <Icon name={t.icon} className="h-4 w-4" />
              {t.name}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </div>
    </>
  )
}
