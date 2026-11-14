import type { Song } from './types'

/**
 * SET APART SOUND — the Kids of Zion music library.
 *
 * HOW TO ADD YOUR MEDIA (no coding knowledge needed):
 *  1. Put your files in  public/media/songs/<song-slug>/
 *     e.g. public/media/songs/set-apart-salt-and-light/set-apart.mp3
 *  2. Fill in the matching fields below:
 *       coverArt:   'media/songs/set-apart-salt-and-light/cover.jpg'
 *       audioSrc:   'media/songs/set-apart-salt-and-light/set-apart.mp3'
 *       lyricVideoYouTubeId: 'abc123XYZ'  (from https://youtube.com/watch?v=abc123XYZ)
 *       lyrics: [{ label: 'Verse 1', lines: ['first line', 'second line'] }, ...]
 *  3. Change status from 'coming-soon' to 'available'.
 *
 * Lyrics, audio and artwork are intentionally left empty: they are your
 * original work and will be added by you. Descriptions are drafts you can edit.
 */
export const songs: Song[] = [
  {
    slug: 'set-apart-salt-and-light',
    title: 'Set Apart',
    subtitle: 'Salt + Light',
    status: 'coming-soon',
    description:
      'A joyful anthem about being chosen, set apart, and shining for Yahuah — salt that brings flavor and light that cannot be hidden.',
    coverArt: '',
    audioSrc: '',
    lyricVideoYouTubeId: '',
    lyrics: [],
    scriptureReferences: ['Matthew 5:13–16', 'Leviticus 20:26', '1 Peter 2:9'],
    themes: ['Identity', 'Holiness', 'Good works'],
    ageGroups: ['little-sprouts', 'growing-roots', 'strong-branches'],
    topic: 'walking-in-his-ways',
    relatedLessonSlugs: ['im-set-apart-salt-and-light'],
    relatedActivitySlugs: ['salt-and-light-coloring-page', 'shine-your-light-lamp-craft', 'salt-taste-test'],
    theme: 'sun',
    durationMinutes: 4,
  },
  {
    slug: 'who-is-yahuah',
    title: 'Who Is Yahuah?',
    status: 'coming-soon',
    description:
      'A song of wonder that helps little ones learn the Name of the Creator and celebrate who He is — the One who made the heavens, the earth and me.',
    coverArt: '',
    audioSrc: '',
    lyricVideoYouTubeId: '',
    lyrics: [],
    scriptureReferences: ['Genesis 1:1', 'Exodus 3:15', 'Psalm 100:3', 'Deuteronomy 6:4'],
    themes: ['The Name', 'Creation', 'Worship'],
    ageGroups: ['little-sprouts', 'growing-roots', 'strong-branches'],
    topic: 'knowing-yahuah',
    relatedLessonSlugs: ['who-is-yahuah'],
    relatedActivitySlugs: ['yahuah-made-it-all-coloring-page', 'creation-memory-match'],
    theme: 'lilac',
    durationMinutes: 4,
  },
]

export const songBySlug = (slug: string) => songs.find((s) => s.slug === slug)
