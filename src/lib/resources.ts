import { activities } from '../content/activities'
import { lessons } from '../content/lessons'
import { songs } from '../content/songs'
import { durationBands, type DurationBandId } from '../content/taxonomy'
import type { AgeGroupId, ResourceType, ThemeColor, TopicId } from '../content/types'

/** A single searchable item in the Learning Library (lesson, song or activity). */
export interface Resource {
  id: string
  kind: 'lesson' | 'song' | 'activity'
  type: ResourceType
  title: string
  summary: string
  topic: TopicId
  ageGroups: AgeGroupId[]
  durationMinutes: number
  href: string
  theme: ThemeColor
  scriptureReferences: string[]
  tags: string[]
  isDraft: boolean
  comingSoon: boolean
}

export function buildResources(): Resource[] {
  const fromLessons: Resource[] = lessons.map((l) => ({
    id: `lesson:${l.slug}`,
    kind: 'lesson',
    type: 'lesson',
    title: l.title,
    summary: l.summary,
    topic: l.topic,
    ageGroups: l.ageGroups,
    durationMinutes: l.durationMinutes,
    href: `/learn/${l.slug}`,
    theme: l.theme,
    scriptureReferences: [l.keyScripture.reference, ...l.scriptureSays.map((s) => s.reference)],
    tags: l.tags,
    isDraft: l.status === 'draft-awaiting-review',
    comingSoon: false,
  }))
  const fromSongs: Resource[] = songs.map((s) => ({
    id: `song:${s.slug}`,
    kind: 'song',
    type: 'song',
    title: s.subtitle ? `${s.title} – ${s.subtitle}` : s.title,
    summary: s.description,
    topic: s.topic,
    ageGroups: s.ageGroups,
    durationMinutes: s.durationMinutes ?? 4,
    href: `/music/${s.slug}`,
    theme: s.theme,
    scriptureReferences: s.scriptureReferences,
    tags: s.themes,
    isDraft: false,
    comingSoon: s.status === 'coming-soon',
  }))
  const fromActivities: Resource[] = activities.map((a) => ({
    id: `activity:${a.slug}`,
    kind: 'activity',
    type: a.type,
    title: a.title,
    summary: a.summary,
    topic: a.topic,
    ageGroups: a.ageGroups,
    durationMinutes: a.durationMinutes,
    href: `/activities/${a.slug}`,
    theme: a.theme,
    scriptureReferences: a.scriptureReferences,
    tags: a.tags,
    isDraft: false,
    comingSoon: false,
  }))
  return [...fromLessons, ...fromSongs, ...fromActivities]
}

export const allResources = buildResources()

export interface ResourceFilters {
  query?: string
  topics?: TopicId[]
  ageGroups?: AgeGroupId[]
  types?: ResourceType[]
  durations?: DurationBandId[]
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[–—]/g, '-')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9:\- ]/g, ' ')

export function matchesQuery(resource: Resource, query: string): boolean {
  const words = normalize(query).split(/\s+/).filter(Boolean)
  if (words.length === 0) return true
  const haystack = normalize(
    [resource.title, resource.summary, ...resource.tags, ...resource.scriptureReferences, resource.type, resource.topic].join(' '),
  )
  return words.every((w) => haystack.includes(w))
}

export function inDurationBand(minutes: number, band: DurationBandId): boolean {
  const b = durationBands.find((d) => d.id === band)!
  return minutes >= b.min && minutes <= b.max
}

/** Filters combine with AND between groups and OR within a group. */
export function filterResources(resources: Resource[], f: ResourceFilters): Resource[] {
  return resources.filter((r) => {
    if (f.query && !matchesQuery(r, f.query)) return false
    if (f.topics?.length && !f.topics.includes(r.topic)) return false
    if (f.ageGroups?.length && !r.ageGroups.some((a) => f.ageGroups!.includes(a))) return false
    if (f.types?.length && !f.types.includes(r.type)) return false
    if (f.durations?.length && !f.durations.some((d) => inDurationBand(r.durationMinutes, d))) return false
    return true
  })
}

// ─── Find a Lesson ──────────────────────────────────────────────────────────

export interface FinderInput {
  ageGroup: AgeGroupId
  /** Minutes available. */
  minutes: number
  /** Optional preferred topic. */
  topic?: TopicId
}

export interface FinderResult {
  resource: Resource
  score: number
  /** Plain-English reasons shown to parents. */
  reasons: string[]
  /** When a lesson's full plan is too long, suggest the quick version. */
  useQuickVersion: boolean
}

export function findResources(input: FinderInput, resources: Resource[] = allResources): FinderResult[] {
  const results: FinderResult[] = []
  for (const r of resources) {
    if (r.comingSoon) continue
    if (!r.ageGroups.includes(input.ageGroup)) continue

    const reasons: string[] = ['Right for your child’s age']
    let score = 10
    let useQuickVersion = false

    let fitsTime = r.durationMinutes <= input.minutes
    if (!fitsTime && r.kind === 'lesson') {
      const lesson = lessons.find((l) => `lesson:${l.slug}` === r.id)
      if (lesson && lesson.quickVersionMinutes <= input.minutes) {
        fitsTime = true
        useQuickVersion = true
        reasons.push(`Use the ${lesson.quickVersionMinutes}-minute quick version`)
        score += 2
      }
    }
    if (!fitsTime) continue
    if (!useQuickVersion) {
      reasons.push(`Fits in ${input.minutes} minutes`)
      // Prefer resources that use most of the available time well.
      score += Math.round((r.durationMinutes / input.minutes) * 4)
    }

    if (input.topic) {
      if (r.topic === input.topic) {
        score += 20
        reasons.push('Matches your topic')
      } else {
        score -= 5
      }
    }
    if (r.kind === 'lesson') score += 6

    results.push({ resource: r, score, reasons, useQuickVersion })
  }
  return results.sort((a, b) => b.score - a.score || a.resource.title.localeCompare(b.resource.title))
}
