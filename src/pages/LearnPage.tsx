import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { ResourceCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { Button } from '../components/ui/primitives'
import { ageGroups, durationBands, resourceTypes, topics, type DurationBandId } from '../content/taxonomy'
import type { AgeGroupId, ResourceType, TopicId } from '../content/types'
import { allResources, filterResources, type Resource } from '../lib/resources'
import { cx } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

type FilterKey = 'topic' | 'age' | 'type' | 'time'

function FilterGroup({
  legend,
  options,
  selected,
  onToggle,
}: {
  legend: string
  options: { id: string; label: string; count: number }[]
  selected: string[]
  onToggle: (id: string) => void
}) {
  return (
    <fieldset>
      <legend className="mb-2 font-display text-base font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = selected.includes(o.id)
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => onToggle(o.id)}
              className={cx(
                'rounded-full border-2 px-3.5 py-1.5 text-sm font-bold transition',
                on ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-100 bg-white text-ink-900 hover:border-ink-900',
              )}
            >
              {o.label}
              <span className={cx('ml-1.5 text-xs', on ? 'text-sun-400' : 'text-ink-500')}>{o.count}</span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export default function LearnPage() {
  useDocumentMeta('Learning Library', 'Search Scripture lessons, songs, printables and activities for children by topic, age, activity type and time.')
  const [params, setParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)

  const get = (k: FilterKey) => params.getAll(k)
  const query = params.get('q') ?? ''
  const selected = {
    topics: get('topic') as TopicId[],
    ageGroups: get('age') as AgeGroupId[],
    types: get('type') as ResourceType[],
    durations: get('time') as DurationBandId[],
  }

  const results = filterResources(allResources, { query, ...selected })

  const toggle = (key: FilterKey, id: string) => {
    const next = new URLSearchParams(params)
    const current = next.getAll(key)
    next.delete(key)
    const updated = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    updated.forEach((v) => next.append(key, v))
    setParams(next, { replace: true })
  }
  const setQuery = (q: string) => {
    const next = new URLSearchParams(params)
    if (q) next.set('q', q)
    else next.delete('q')
    setParams(next, { replace: true })
  }
  const clearAll = () => setParams(new URLSearchParams(), { replace: true })

  const activeCount = selected.topics.length + selected.ageGroups.length + selected.types.length + selected.durations.length
  const countFor = (pred: (r: Resource) => boolean) => allResources.filter(pred).length

  const filters = (
    <div className="space-y-6">
      <FilterGroup
        legend="Topic"
        options={topics.map((t) => ({ id: t.id, label: t.name, count: countFor((r) => r.topic === t.id) }))}
        selected={selected.topics}
        onToggle={(id) => toggle('topic', id)}
      />
      <FilterGroup
        legend="Age group"
        options={ageGroups.map((a) => ({ id: a.id, label: `${a.name} (${a.ages.replace('Ages ', '')})`, count: countFor((r) => r.ageGroups.includes(a.id)) }))}
        selected={selected.ageGroups}
        onToggle={(id) => toggle('age', id)}
      />
      <FilterGroup
        legend="Activity type"
        options={resourceTypes.map((t) => ({ id: t.id, label: t.name, count: countFor((r) => r.type === t.id) }))}
        selected={selected.types}
        onToggle={(id) => toggle('type', id)}
      />
      <FilterGroup
        legend="Time needed"
        options={durationBands.map((d) => ({ id: d.id, label: d.name, count: countFor((r) => r.durationMinutes >= d.min && r.durationMinutes <= d.max) }))}
        selected={selected.durations}
        onToggle={(id) => toggle('time', id)}
      />
    </div>
  )

  return (
    <>
      <PageHero
        eyebrow="Learning library"
        theme="jordan"
        title="Find something wonderful to learn today"
        description="Lessons, songs, printables and activities — searchable by topic, age, activity type and time."
      >
        <form role="search" className="relative mt-8 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="library-search" className="sr-only">
            Search the library
          </label>
          <Icon name="search" className="pointer-events-none absolute top-1/2 left-5 h-6 w-6 -translate-y-1/2 text-ink-500" />
          <input
            id="library-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “Sabbath”, “light” or “Psalm 100”"
            className="w-full rounded-full border-2 border-ink-900 bg-white py-4 pr-5 pl-14 text-lg shadow-pop-sm outline-none placeholder:text-ink-300 focus:shadow-pop"
          />
        </form>
      </PageHero>

      <div className="container-koz grid gap-10 py-10 lg:grid-cols-[19rem_1fr]">
        <aside aria-label="Filters" className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between lg:hidden">
            <Button variant="secondary" icon="puzzle" onClick={() => setShowFilters((s) => !s)} aria-expanded={showFilters} aria-controls="filter-panel">
              Filters{activeCount > 0 && ` (${activeCount})`}
            </Button>
            {activeCount > 0 && (
              <button type="button" onClick={clearAll} className="font-bold text-pom-700 underline">
                Clear all
              </button>
            )}
          </div>
          <div id="filter-panel" className={cx('mt-5 rounded-[1.75rem] bg-white p-5 ring-1 ring-ink-100 lg:mt-0 lg:block', showFilters ? 'block' : 'hidden')}>
            <div className="mb-4 hidden items-center justify-between lg:flex">
              <h2 className="text-xl font-semibold">Filters</h2>
              {activeCount > 0 && (
                <button type="button" onClick={clearAll} className="text-sm font-bold text-pom-700 underline">
                  Clear all
                </button>
              )}
            </div>
            {filters}
          </div>
        </aside>

        <section aria-labelledby="results-heading">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="results-heading" className="text-2xl font-semibold" aria-live="polite">
              {results.length} {results.length === 1 ? 'resource' : 'resources'}
              {query && <span className="text-ink-500"> for “{query}”</span>}
            </h2>
          </div>
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border-2 border-dashed border-ink-300 p-10 text-center">
              <p className="font-display text-2xl font-semibold">Nothing here yet</p>
              <p className="mx-auto mt-2 max-w-md text-ink-700">
                We’re adding new lessons and activities all the time. Try removing a filter, or search for something else.
              </p>
              <Button className="mt-6" onClick={clearAll}>
                Show everything
              </Button>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
