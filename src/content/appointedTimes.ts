import type { ThemeColor } from './types'

/**
 * HIS APPOINTED TIMES
 *
 * Each entry has room for future lessons, songs and printables. To connect a
 * new lesson, add its slug to `lessonSlugs`; for activities, `activitySlugs`.
 *
 * Calendar dates are deliberately not listed: families reckon the biblical
 * calendar in different ways. Add a `familyCalendarNote` if you want to share
 * your own approach.
 */
export interface AppointedTime {
  slug: string
  name: string
  hebrewName: string
  meaning: string
  season: string
  references: string[]
  /** What Scripture directly says — summarised closely from the cited verses. */
  scriptureSummary: string
  /** Child-friendly description. */
  forChildren: string
  /** Family ideas — practical suggestions, not commands. */
  familyIdeas: string[]
  lessonSlugs: string[]
  activitySlugs: string[]
  theme: ThemeColor
  emoji: string
}

export const appointedTimes: AppointedTime[] = [
  {
    slug: 'sabbath',
    name: 'The Sabbath',
    hebrewName: 'Shabbat',
    meaning: 'Rest',
    season: 'Every seventh day',
    references: ['Genesis 2:2–3', 'Exodus 20:8–11', 'Leviticus 23:3'],
    scriptureSummary:
      'Leviticus 23 lists the weekly Sabbath first among Yahuah’s appointed times: six days of work, and the seventh day “a Sabbath of solemn rest, a holy convocation.”',
    forChildren: 'Every week, Yahuah gives His family a special day to stop working, rest, worship Him and enjoy being together.',
    familyIdeas: ['Give each child a preparation job', 'Begin with a family blessing and a special meal', 'Keep a Sabbath basket of restful books and Scripture cards', 'Take a slow nature walk and notice what Yahuah made'],
    lessonSlugs: ['what-is-the-sabbath'],
    activitySlugs: ['my-sabbath-plan-worksheet', 'creation-week-chart'],
    theme: 'jordan',
    emoji: '🕯️',
  },
  {
    slug: 'passover',
    name: 'Passover',
    hebrewName: 'Pesach',
    meaning: 'Passing over',
    season: 'Spring — first month, 14th day',
    references: ['Exodus 12', 'Leviticus 23:5'],
    scriptureSummary: 'Leviticus 23:5 says that in the first month, on the fourteenth day of the month at evening, is Yahuah’s Passover.',
    forChildren: 'We remember how Yahuah rescued His people from slavery in Egypt with a mighty hand.',
    familyIdeas: ['Retell the Exodus story with simple props', 'Let children ask the questions at your family meal', 'Talk about the lamb and Yahusha'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'pom',
    emoji: '🐑',
  },
  {
    slug: 'unleavened-bread',
    name: 'Feast of Unleavened Bread',
    hebrewName: 'Chag HaMatzot',
    meaning: 'Unleavened bread',
    season: 'Spring — seven days after Passover',
    references: ['Exodus 12:15–20', 'Leviticus 23:6–8'],
    scriptureSummary: 'Leviticus 23:6–8 describes seven days of eating unleavened bread, with a holy convocation on the first and seventh days.',
    forChildren: 'For seven days we eat bread without yeast and remember that Yahuah’s people left Egypt in a hurry.',
    familyIdeas: ['Search the house for leaven together', 'Bake simple matzah', 'Talk about removing sin from our hearts'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'sun',
    emoji: '🫓',
  },
  {
    slug: 'firstfruits',
    name: 'Firstfruits',
    hebrewName: 'Yom HaBikkurim',
    meaning: 'First of the harvest',
    season: 'Spring — during Unleavened Bread',
    references: ['Leviticus 23:9–14', '1 Corinthians 15:20'],
    scriptureSummary: 'Leviticus 23:10–11 describes bringing the sheaf of the first fruits of the harvest to the priest to wave before Yahuah.',
    forChildren: 'We give Yahuah our very first and very best, and thank Him for the harvest.',
    familyIdeas: ['Plant seeds and watch them sprout', 'Give the first portion of something special', 'Read 1 Corinthians 15:20 together'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'olive',
    emoji: '🌾',
  },
  {
    slug: 'shavuot',
    name: 'Feast of Weeks',
    hebrewName: 'Shavuot',
    meaning: 'Weeks',
    season: 'Late spring — fifty days counted',
    references: ['Leviticus 23:15–22', 'Acts 2:1–4'],
    scriptureSummary: 'Leviticus 23:15–16 commands counting seven Sabbaths — fifty days — and then presenting a new grain offering to Yahuah.',
    forChildren: 'We count fifty days and celebrate Yahuah’s good gifts — His instructions and the Ruach HaQodesh.',
    familyIdeas: ['Make a 50-day counting chain', 'Read Acts 2 together', 'Celebrate His Word with a special treat'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'lilac',
    emoji: '🔥',
  },
  {
    slug: 'yom-teruah',
    name: 'Day of Trumpets',
    hebrewName: 'Yom Teruah',
    meaning: 'Day of shouting / blasting',
    season: 'Autumn — seventh month, 1st day',
    references: ['Leviticus 23:23–25', 'Numbers 29:1'],
    scriptureSummary: 'Leviticus 23:24 calls the first day of the seventh month a solemn rest, a memorial of blowing of trumpets, a holy convocation.',
    forChildren: 'A day of trumpet blasts and joyful shouts — wake up and get ready for Yahuah!',
    familyIdeas: ['Listen to (or blow!) a shofar', 'Make paper trumpets', 'Have a joyful shout of praise'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'sun',
    emoji: '📯',
  },
  {
    slug: 'yom-kippur',
    name: 'Day of Atonement',
    hebrewName: 'Yom Kippur',
    meaning: 'Day of covering',
    season: 'Autumn — seventh month, 10th day',
    references: ['Leviticus 16', 'Leviticus 23:26–32'],
    scriptureSummary: 'Leviticus 23:27–28 calls the tenth day of the seventh month the Day of Atonement, a holy convocation on which no work is done.',
    forChildren: 'A quiet, serious day to say sorry to Yahuah and thank Him for His mercy and forgiveness.',
    familyIdeas: ['Talk about forgiveness in age-appropriate ways', 'Write down sins and “wash them away” in water', 'Spend quiet time in prayer'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'ink',
    emoji: '🤍',
  },
  {
    slug: 'sukkot',
    name: 'Feast of Tabernacles',
    hebrewName: 'Sukkot',
    meaning: 'Booths',
    season: 'Autumn — seventh month, 15th day, for seven days',
    references: ['Leviticus 23:33–43', 'Deuteronomy 16:13–15'],
    scriptureSummary: 'Leviticus 23:42–43 says to dwell in booths seven days, so that generations will know Yahuah made Israel dwell in booths when He brought them out of Egypt.',
    forChildren: 'We build a booth, eat and sleep outside, and remember that Yahuah took care of His people in the wilderness.',
    familyIdeas: ['Build a booth (sukkah) together', 'Decorate with leaves and fruit', 'Eat meals and read stories outside'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'olive',
    emoji: '⛺',
  },
  {
    slug: 'eighth-day',
    name: 'The Eighth Day',
    hebrewName: 'Shemini Atzeret',
    meaning: 'Eighth day of assembly',
    season: 'Autumn — the day after Sukkot',
    references: ['Leviticus 23:36', 'Leviticus 23:39'],
    scriptureSummary: 'Leviticus 23:36 says that on the eighth day there shall be a holy convocation; it is a solemn assembly, and no regular work is done.',
    forChildren: 'One more special day with Yahuah at the end of the feast — like staying a little longer with someone you love.',
    familyIdeas: ['Share favorite memories from the feast', 'Thank Yahuah for the whole year', 'Read a favorite Scripture story together'],
    lessonSlugs: [],
    activitySlugs: [],
    theme: 'sky',
    emoji: '✨',
  },
]

export const appointedTimeBySlug = (slug: string) => appointedTimes.find((a) => a.slug === slug)
