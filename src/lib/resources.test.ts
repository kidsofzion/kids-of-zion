import { describe, expect, it } from 'vitest'
import { activities } from '../content/activities'
import { lessons } from '../content/lessons'
import { songs } from '../content/songs'
import { allResources, filterResources, findResources, matchesQuery } from './resources'

describe('content integrity', () => {
  it('every related slug points at real content', () => {
    const lessonSlugs = new Set(lessons.map((l) => l.slug))
    const activitySlugs = new Set(activities.map((a) => a.slug))
    const songSlugs = new Set(songs.map((s) => s.slug))
    for (const l of lessons) {
      l.relatedActivitySlugs.forEach((s) => expect(activitySlugs, `${l.slug} → ${s}`).toContain(s))
      l.relatedSongSlugs.forEach((s) => expect(songSlugs, `${l.slug} → ${s}`).toContain(s))
      l.activities.forEach((a) => a.activitySlug && expect(activitySlugs).toContain(a.activitySlug))
    }
    for (const s of songs) {
      s.relatedLessonSlugs.forEach((x) => expect(lessonSlugs).toContain(x))
      s.relatedActivitySlugs.forEach((x) => expect(activitySlugs).toContain(x))
    }
    for (const a of activities) a.relatedLessonSlugs.forEach((x) => expect(lessonSlugs).toContain(x))
  })

  it('sample lessons are complete and marked as drafts', () => {
    expect(lessons).toHaveLength(3)
    for (const l of lessons) {
      expect(l.status).toBe('draft-awaiting-review')
      expect(l.scriptureSays.length).toBeGreaterThan(0)
      expect(l.explanation.length).toBeGreaterThan(0)
      expect(l.objectives.length).toBeGreaterThan(0)
      expect(l.activities.length).toBeGreaterThan(0)
      expect(l.memoryVerse.text).toBeTruthy()
      expect(l.realLifeApplication.length).toBeGreaterThan(0)
      for (const age of ['little-sprouts', 'growing-roots', 'strong-branches'] as const)
        expect(l.discussionQuestions[age].length).toBeGreaterThan(0)
    }
  })

  it('songs do not ship invented lyrics or media', () => {
    for (const s of songs) {
      expect(s.lyrics ?? []).toHaveLength(0)
      expect(s.audioSrc ?? '').toBe('')
    }
  })
})

describe('library filtering', () => {
  it('searches titles, tags and scripture references', () => {
    const salt = allResources.find((r) => r.id === 'lesson:im-set-apart-salt-and-light')!
    expect(matchesQuery(salt, 'salt light')).toBe(true)
    expect(matchesQuery(salt, 'matthew 5')).toBe(true)
    expect(matchesQuery(salt, 'im set apart')).toBe(true)
    expect(matchesQuery(salt, 'passover')).toBe(false)
  })

  it('combines filter groups with AND and values with OR', () => {
    const r = filterResources(allResources, { topics: ['appointed-times'], types: ['lesson'] })
    expect(r.map((x) => x.id)).toEqual(['lesson:what-is-the-sabbath'])
    const either = filterResources(allResources, { topics: ['appointed-times', 'knowing-yahuah'], types: ['lesson'] })
    expect(either).toHaveLength(2)
    const quick = filterResources(allResources, { durations: ['under-10'] })
    expect(quick.every((x) => x.durationMinutes < 10)).toBe(true)
  })
})

describe('find a lesson', () => {
  it('suggests the quick version when time is short', () => {
    const res = findResources({ ageGroup: 'growing-roots', minutes: 10, topic: 'appointed-times' })
    expect(res[0].resource.id).toBe('lesson:what-is-the-sabbath')
    expect(res[0].useQuickVersion).toBe(true)
  })
  it('respects age groups and excludes coming-soon songs', () => {
    const res = findResources({ ageGroup: 'little-sprouts', minutes: 60 })
    expect(res.every((r) => r.resource.ageGroups.includes('little-sprouts'))).toBe(true)
    expect(res.some((r) => r.resource.comingSoon)).toBe(false)
  })
  it('ranks topic matches first', () => {
    const res = findResources({ ageGroup: 'strong-branches', minutes: 45, topic: 'knowing-yahuah' })
    expect(res[0].resource.topic).toBe('knowing-yahuah')
  })
})
