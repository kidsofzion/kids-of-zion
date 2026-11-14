/**
 * Runs after `vite build`.
 *
 * GitHub Pages only serves real files, so for every page of the site we write
 * a copy of index.html at   dist/<route>/index.html   with that page's title
 * and description already filled in. This means:
 *   • direct links and page refreshes work (and return HTTP 200),
 *   • search engines and link previews see the right title for each page.
 * Unknown addresses fall back to 404.html, which loads the app's "not found" page.
 * It also writes sitemap.xml and robots.txt.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { activities } from '../src/content/activities'
import { appointedTimes } from '../src/content/appointedTimes'
import { articles } from '../src/content/articles'
import { lessons } from '../src/content/lessons'
import { songs } from '../src/content/songs'
import { site } from '../src/lib/site'

const dist = join(import.meta.dirname, '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

interface Page {
  path: string
  title?: string
  description?: string
}

const pages: Page[] = [
  { path: '/' },
  { path: '/music', title: 'Set Apart Sound — Music & Videos', description: 'Original Kids of Zion Scripture songs for children, with lyric videos, lyrics, Scripture references and related lessons.' },
  { path: '/learn', title: 'Learning Library', description: 'Search Scripture lessons, songs, printables and activities for children by topic, age, activity type and time.' },
  { path: '/activities', title: 'Activities & Printables', description: 'Free printable Bible coloring pages, crafts, matching games, Scripture cards and worksheets for children.' },
  { path: '/appointed-times', title: 'His Appointed Times', description: 'Teach children about the Sabbath and the biblical feasts of Yahuah from Leviticus 23.' },
  { path: '/parents', title: 'Parent Corner', description: 'Encouragement, teaching tips and simple family routines for parents.' },
  { path: '/about', title: 'About Kids of Zion', description: site.mission },
  { path: '/find-a-lesson', title: 'Find a Lesson', description: 'Choose your child’s age, your time and a topic — we’ll suggest the right lesson, song or activity.' },
  { path: '/play', title: 'Kids Play', description: 'Gentle, ad-free Bible learning games for children.' },
  { path: '/play/memory-match', title: 'Creation Memory Match', description: 'A gentle memory matching game featuring the things Yahuah made.' },
  { path: '/play/creation-order', title: 'Creation Week Game', description: 'Tap the days of creation in order, from day one to the seventh-day rest.' },
  ...songs.map((s) => ({ path: `/music/${s.slug}`, title: s.subtitle ? `${s.title} – ${s.subtitle}` : s.title, description: s.description })),
  ...lessons.map((l) => ({ path: `/learn/${l.slug}`, title: l.title, description: l.summary })),
  ...activities.map((a) => ({ path: `/activities/${a.slug}`, title: a.title, description: a.summary })),
  ...appointedTimes.map((a) => ({ path: `/appointed-times/${a.slug}`, title: `${a.name} (${a.hebrewName})`, description: a.forChildren })),
  ...articles.map((a) => ({ path: `/parents/${a.slug}`, title: a.title, description: a.excerpt })),
]

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function render(page: Page): string {
  const title = page.title ? `${page.title} · ${site.name}` : `${site.name} — ${site.tagline}`
  const description = page.description ?? site.description
  const url = `${site.siteUrl}${page.path === '/' ? '/' : page.path}`
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escape(description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escape(description)}$2`)
    .replace('</head>', `    <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`)
}

for (const page of pages) {
  const file = page.path === '/' ? join(dist, 'index.html') : join(dist, page.path, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(page))
}

writeFileSync(join(dist, '404.html'), render({ path: '/404', title: 'Page not found' }).replace(/\s*<link rel="canonical"[^>]*>\n?/, '\n'))

const today = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${site.siteUrl}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.siteUrl}/sitemap.xml\n`)

console.log(`postbuild: wrote ${pages.length} pages, 404.html, sitemap.xml and robots.txt`)
