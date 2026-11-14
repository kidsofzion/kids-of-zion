import type { ReviewStatus, ThemeColor } from './types'

/**
 * PARENT CORNER ARTICLES
 *
 * Article bodies are a list of simple blocks so you can write without HTML:
 *   { type: 'p', text: '...' }            a paragraph
 *   { type: 'h2', text: '...' }           a section heading
 *   { type: 'list', items: ['...'] }      a bulleted list
 *   { type: 'tip', text: '...' }          a highlighted tip box
 *   { type: 'scripture', reference, text } a Scripture quotation
 *
 * Category 'reflections' is reserved for your personal journey as a mother.
 * Nothing has been written in your voice — that space is yours.
 */
export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'tip'; text: string }
  | { type: 'scripture'; reference: string; text: string }

export type ArticleCategory = 'teaching-tips' | 'family-rhythms' | 'reflections'

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: ArticleCategory
  readingMinutes: number
  status: ReviewStatus
  theme: ThemeColor
  body: ArticleBlock[]
}

export const articleCategories: { id: ArticleCategory; name: string; description: string }[] = [
  { id: 'teaching-tips', name: 'Teaching Tips', description: 'Practical ideas for teaching the Word at home.' },
  { id: 'family-rhythms', name: 'Family Rhythms', description: 'Simple routines that make faith part of everyday life.' },
  { id: 'reflections', name: 'From a Mother’s Heart', description: 'Reflections from the journey that started Kids of Zion.' },
]

export const articles: Article[] = [
  {
    slug: 'a-simple-family-scripture-rhythm',
    title: 'A Simple Family Scripture Rhythm (That Actually Lasts)',
    excerpt: 'You don’t need an hour a day. Small, faithful moments woven into ordinary life plant deep roots.',
    category: 'family-rhythms',
    readingMinutes: 5,
    status: 'draft-awaiting-review',
    theme: 'olive',
    body: [
      { type: 'scripture', reference: 'Deuteronomy 6:6–7', text: 'These words, which I command you today, shall be on your heart; and you shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise up.' },
      { type: 'p', text: 'Deuteronomy 6 paints a picture of faith woven through the ordinary moments of a day — sitting, walking, lying down and rising up. That is good news for busy families: teaching our children does not have to look like a classroom.' },
      { type: 'h2', text: 'Anchor to moments you already have' },
      { type: 'p', text: 'Instead of adding a brand-new block of time, attach Scripture to something your family already does every day.' },
      { type: 'list', items: ['Breakfast: read one verse and pray for the day.', 'Car rides: sing a Scripture song or practise a memory verse.', 'Bath time: talk about one thing Yahuah made.', 'Bedtime: ask, “Where did you see Yahuah today?”'] },
      { type: 'tip', text: 'Start with just one anchor. When it feels natural (usually after two or three weeks), add another.' },
      { type: 'h2', text: 'Keep it short and joyful' },
      { type: 'p', text: 'For little ones, three to five minutes of full attention is a success. Stop while they still want more. A short, happy time builds a love for the Word far better than a long, tense one.' },
      { type: 'h2', text: 'Let the week have a shape' },
      { type: 'p', text: 'Many families find it helpful to let the week build toward the Sabbath — one memory verse for the week, practised a little each day and celebrated together on the seventh day.' },
      { type: 'list', items: ['Days 1–2: Read the verse and talk about what it means.', 'Days 3–4: Add motions or a song.', 'Days 5–6: Play a game with it and prepare for Sabbath.', 'Sabbath: Say it together and celebrate!'] },
    ],
  },
  {
    slug: 'teaching-little-ones-through-song',
    title: 'Teaching Little Ones Through Song',
    excerpt: 'Why music is one of the most powerful ways to hide the Word in a young child’s heart — and how to use it well.',
    category: 'teaching-tips',
    readingMinutes: 4,
    status: 'draft-awaiting-review',
    theme: 'sun',
    body: [
      { type: 'scripture', reference: 'Psalm 96:1', text: 'Sing to Yahuah a new song! Sing to Yahuah, all the earth.' },
      { type: 'p', text: 'Songs are one of the earliest ways children learn language, and they can be one of the earliest ways children learn truth. Melody and rhythm help words stick — often for a lifetime.' },
      { type: 'h2', text: 'Ideas for using music at home' },
      { type: 'list', items: ['Play one song on repeat for a week rather than many songs once.', 'Add simple motions — little bodies remember what they move.', 'Pause the song and let your child sing the next word.', 'Talk about one line: “What does this mean?”', 'Connect the song to its Scripture reference and read it together.'] },
      { type: 'tip', text: 'Every song in Set Apart Sound lists its Scripture references and related lessons, so a song can become the doorway into a full lesson.' },
      { type: 'h2', text: 'Worship, not just performance' },
      { type: 'p', text: 'Help children understand that we sing to Yahuah, not just about Him. Before you press play, try a short prayer: “Yahuah, we sing this song for You.”' },
    ],
  },
  {
    slug: 'preparing-for-sabbath-with-children',
    title: 'Preparing for Sabbath with Children',
    excerpt: 'Turning preparation day into a joyful family tradition that helps children look forward to the seventh day.',
    category: 'family-rhythms',
    readingMinutes: 5,
    status: 'draft-awaiting-review',
    theme: 'jordan',
    body: [
      { type: 'scripture', reference: 'Exodus 16:5', text: 'It shall come to pass on the sixth day, that they shall prepare that which they bring in, and it shall be twice as much as they gather daily.' },
      { type: 'p', text: 'In Exodus 16, Yahuah taught His people to prepare on the sixth day so they could rest on the seventh. Preparation is a beautiful way for children to participate — and anticipation is half the joy.' },
      { type: 'h2', text: 'Give every child a real job' },
      { type: 'list', items: ['Little Sprouts (1–3): put napkins on the table, gather toys into a basket.', 'Growing Roots (4–6): help wash vegetables, choose the Sabbath book, set the table.', 'Strong Branches (7–11): help cook, plan a Scripture reading, prepare a song.'] },
      { type: 'tip', text: 'Print the free “My Sabbath Plan” worksheet so children can check off their jobs.' },
      { type: 'h2', text: 'Make the beginning special' },
      { type: 'p', text: 'A consistent, simple opening helps children feel the shift from ordinary days to the set-apart day. Some families light a lamp, sing together, pray, read a psalm, or speak a blessing over each child.' },
      { type: 'h2', text: 'Plan for restful delight' },
      { type: 'p', text: 'Children often ask, “What can we do?” A Sabbath basket of special books, Scripture cards and quiet toys — only brought out on the Sabbath — turns the day into something they look forward to.' },
    ],
  },
]

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug)
