/**
 * Shared content types for Kids of Zion.
 *
 * All site content lives in plain TypeScript files in this folder so it can
 * be edited without touching any page or component code. If you add a new
 * song, lesson or activity, copy an existing entry and change the values.
 */

export type AgeGroupId = 'little-sprouts' | 'growing-roots' | 'strong-branches'

export type TopicId =
  | 'knowing-yahuah'
  | 'walking-in-his-ways'
  | 'stories-of-the-scriptures'
  | 'appointed-times'
  | 'prayer-and-worship'
  | 'big-questions'

export type ResourceType =
  | 'lesson'
  | 'song'
  | 'coloring-page'
  | 'craft'
  | 'matching-game'
  | 'scripture-cards'
  | 'worksheet'
  | 'hands-on'

/** Review status shown on content so families know what is final. */
export type ReviewStatus = 'draft-awaiting-review' | 'published'

/** A quoted passage of Scripture. `text` must be an exact quotation. */
export interface ScriptureQuote {
  reference: string
  text: string
}

export interface LessonStep {
  title: string
  minutes: number
  description: string
}

export interface LessonActivity {
  title: string
  minutes: number
  materials: string[]
  steps: string[]
  /** Optional link to a printable or game on this site. */
  activitySlug?: string
}

export interface Lesson {
  slug: string
  title: string
  subtitle: string
  topic: TopicId
  ageGroups: AgeGroupId[]
  /** Length of the full lesson plan, in minutes. */
  durationMinutes: number
  /** A quick version for busy days, in minutes. */
  quickVersionMinutes: number
  status: ReviewStatus
  summary: string
  keyScripture: ScriptureQuote
  /** One-sentence "big idea" a child can repeat. */
  bigIdea: string
  /** Child-friendly explanation, read aloud by a parent. */
  explanation: string[]
  objectives: string[]
  /** What the Scripture directly says — quotation-level statements only. */
  scriptureSays: ScriptureQuote[]
  /** Teaching interpretation, clearly separated from direct quotation. */
  interpretation: string[]
  lessonFlow: LessonStep[]
  quickVersion: string[]
  activities: LessonActivity[]
  discussionQuestions: Record<AgeGroupId, string[]>
  memoryVerse: ScriptureQuote & {
    /** A shortened, labelled phrase for ages 1–3. */
    littleSproutsPhrase: string
  }
  realLifeApplication: string[]
  ageAdaptations: Record<AgeGroupId, string>
  prayer: string
  parentNotes: string[]
  relatedSongSlugs: string[]
  relatedActivitySlugs: string[]
  tags: string[]
  /** Visual theme used for cards and headers. */
  theme: ThemeColor
}

export type ThemeColor = 'sun' | 'pom' | 'olive' | 'jordan' | 'lilac' | 'sky' | 'ink'

export interface Song {
  slug: string
  title: string
  subtitle?: string
  status: 'coming-soon' | 'available'
  description: string
  /** Path inside /public, e.g. "media/songs/set-apart/cover.jpg". Leave empty until official artwork is ready. */
  coverArt?: string
  /** Path inside /public, e.g. "media/songs/set-apart/set-apart.mp3". */
  audioSrc?: string
  /** YouTube video ID for the lyric video (the part after "v=" in the link). */
  lyricVideoYouTubeId?: string
  /** Each item is one section (verse, chorus…). Leave empty until lyrics are added. */
  lyrics?: { label: string; lines: string[] }[]
  scriptureReferences: string[]
  themes: string[]
  ageGroups: AgeGroupId[]
  topic: TopicId
  relatedLessonSlugs: string[]
  relatedActivitySlugs: string[]
  theme: ThemeColor
  durationMinutes?: number
}

export interface Activity {
  slug: string
  title: string
  type: Exclude<ResourceType, 'lesson' | 'song'>
  topic: TopicId
  ageGroups: AgeGroupId[]
  durationMinutes: number
  summary: string
  materials: string[]
  instructions: string[]
  scriptureReferences: string[]
  relatedLessonSlugs: string[]
  /** Key in the printable registry (src/printables). Present = printable page exists. */
  printable?: string
  /** Optional on-screen game route. */
  playRoute?: string
  theme: ThemeColor
  tags: string[]
}
