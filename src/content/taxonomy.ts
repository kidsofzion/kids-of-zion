import type { AgeGroupId, ResourceType, ThemeColor, TopicId } from './types'

export interface Topic {
  id: TopicId
  name: string
  short: string
  description: string
  theme: ThemeColor
  icon: IconName
}

export interface AgeGroup {
  id: AgeGroupId
  name: string
  ages: string
  minAge: number
  maxAge: number
  description: string
  focus: string[]
  theme: ThemeColor
}

export type IconName =
  | 'sun'
  | 'path'
  | 'scroll'
  | 'calendar'
  | 'hands'
  | 'question'
  | 'music'
  | 'crayon'
  | 'scissors'
  | 'cards'
  | 'pencil'
  | 'sparkle'
  | 'book'
  | 'puzzle'

export const topics: Topic[] = [
  {
    id: 'knowing-yahuah',
    name: 'Knowing Yahuah',
    short: 'Who He is',
    description: 'Meet the Creator — His Name, His character, His love and His power.',
    theme: 'sun',
    icon: 'sun',
  },
  {
    id: 'walking-in-his-ways',
    name: 'Walking in His Ways',
    short: 'Torah & obedience',
    description: 'Obedience, kindness and righteousness — living out His instructions every day.',
    theme: 'olive',
    icon: 'path',
  },
  {
    id: 'stories-of-the-scriptures',
    name: 'Stories of the Scriptures',
    short: 'Bible stories',
    description: 'The true stories of His people, from the Garden to the Messiah.',
    theme: 'pom',
    icon: 'scroll',
  },
  {
    id: 'appointed-times',
    name: 'His Appointed Times',
    short: 'Sabbath & feasts',
    description: 'The weekly Sabbath and the feasts of Yahuah — set-apart days for His family.',
    theme: 'jordan',
    icon: 'calendar',
  },
  {
    id: 'prayer-and-worship',
    name: 'Prayer & Worship',
    short: 'Talking with Him',
    description: 'Learning to talk with the Most High, sing to Him and give thanks.',
    theme: 'lilac',
    icon: 'hands',
  },
  {
    id: 'big-questions',
    name: 'Big Questions, Little Hearts',
    short: 'Wonder & why',
    description: 'Honest, gentle answers to the big questions children ask.',
    theme: 'sky',
    icon: 'question',
  },
]

export const ageGroups: AgeGroup[] = [
  {
    id: 'little-sprouts',
    name: 'Little Sprouts',
    ages: 'Ages 1–3',
    minAge: 1,
    maxAge: 3,
    description: 'Short, joyful moments full of songs, movement, pictures and simple repeated phrases.',
    focus: ['Songs & movement', 'One simple truth', 'Pictures & touch'],
    theme: 'olive',
  },
  {
    id: 'growing-roots',
    name: 'Growing Roots',
    ages: 'Ages 4–6',
    minAge: 4,
    maxAge: 6,
    description: 'Stories, crafts, games and memory verses that plant the Word deep.',
    focus: ['Stories & crafts', 'Memory verses', 'Hands-on play'],
    theme: 'sun',
  },
  {
    id: 'strong-branches',
    name: 'Strong Branches',
    ages: 'Ages 7–11',
    minAge: 7,
    maxAge: 11,
    description: 'Reading Scripture together, asking big questions and practising faith in real life.',
    focus: ['Reading Scripture', 'Discussion', 'Real-life practice'],
    theme: 'jordan',
  },
]

export const resourceTypes: { id: ResourceType; name: string; icon: IconName }[] = [
  { id: 'lesson', name: 'Lesson', icon: 'book' },
  { id: 'song', name: 'Song', icon: 'music' },
  { id: 'coloring-page', name: 'Coloring page', icon: 'crayon' },
  { id: 'craft', name: 'Craft', icon: 'scissors' },
  { id: 'matching-game', name: 'Matching game', icon: 'puzzle' },
  { id: 'scripture-cards', name: 'Scripture cards', icon: 'cards' },
  { id: 'worksheet', name: 'Worksheet', icon: 'pencil' },
  { id: 'hands-on', name: 'Hands-on activity', icon: 'sparkle' },
]

export const durationBands = [
  { id: 'under-10', name: 'Under 10 min', min: 0, max: 9 },
  { id: '10-20', name: '10–20 min', min: 10, max: 20 },
  { id: '20-40', name: '20–40 min', min: 21, max: 40 },
  { id: '40-plus', name: '40+ min', min: 41, max: Infinity },
] as const

export type DurationBandId = (typeof durationBands)[number]['id']

export const topicById = (id: TopicId) => topics.find((t) => t.id === id)!
export const ageGroupById = (id: AgeGroupId) => ageGroups.find((a) => a.id === id)!
export const resourceTypeById = (id: ResourceType) => resourceTypes.find((r) => r.id === id)!
