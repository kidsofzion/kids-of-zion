# Kids of Zion

**Little Hearts. Deep Roots. Set-Apart Lives.**

A Scripture-based music and learning website for children and families walking in the Way. It helps parents raise children who know Yahuah, love His Word and walk in His ways.

**Live site (once GitHub Pages is on):** https://kidsofzion.github.io/kids-of-zion/

---

## What's on the site

| Page | Address | What it does |
| --- | --- | --- |
| Home | `/` | Hero, featured songs, topics, age paths, lessons, activities, parent encouragement |
| Set Apart Sound | `/music` | Song library. Each song page has audio, a lyric video, lyrics, Scripture and related activities |
| Learning Library | `/learn` | Search plus filters for topic, age group, activity type and time |
| Lessons | `/learn/<lesson>` | Full lesson: Scripture, a read-aloud explanation, objectives, a lesson plan (full and quick), activities, questions by age, memory verse, real-life application, prayer |
| Activities & Printables | `/activities` | Coloring pages, crafts, games, Scripture cards and worksheets that really print |
| His Appointed Times | `/appointed-times` | Sabbath and the feasts of Leviticus 23, with room for future lessons |
| Parent Corner | `/parents` | Articles, family rhythms, and a space for your reflections |
| About | `/about` | Mission, values, privacy promise |
| Find a Lesson | `/find-a-lesson` | Pick an age, a time and a topic to get suggestions |
| Kids Play | `/play` | Creation Memory Match and Creation Week games |

**Privacy:** the site has no accounts, no comments, no tracking, no cookies and no analytics. YouTube videos only load after a parent presses play, and they use YouTube's privacy-enhanced mode.

---

## Editing content (no coding needed)

All content lives in plain files in **`src/content/`**. To add something new, copy an existing entry, paste it below, and change the words. Keep the quote marks and commas.

### Add your song media: `src/content/songs.ts`

1. Put your files in `public/media/songs/<song-name>/`, for example `public/media/songs/set-apart-salt-and-light/set-apart.mp3` and `cover.jpg`.
2. In `songs.ts`, fill in:
   - `coverArt: 'media/songs/set-apart-salt-and-light/cover.jpg'`
   - `audioSrc: 'media/songs/set-apart-salt-and-light/set-apart.mp3'`
   - `lyricVideoYouTubeId: 'abc123XYZ'`. This is the part after `v=` in a YouTube link.
   - `lyrics: [{ label: 'Verse 1', lines: ['first line', 'second line'] }, { label: 'Chorus', lines: [...] }]`
3. Change `status: 'coming-soon'` to `status: 'available'`.

Until you add them, the site shows friendly "coming soon" spaces and a clearly labelled placeholder cover. No lyrics or media have been invented.

### Lessons: `src/content/lessons.ts`

Each lesson keeps **Scripture** (`scriptureSays`: exact quotations only) separate from **teaching** (`interpretation`: our explanation). When a lesson has been reviewed, change `status: 'draft-awaiting-review'` to `status: 'published'` and the draft badges disappear.

### Activities: `src/content/activities.ts`

The printable pages themselves are drawn in `src/printables/sheets.tsx` and listed in `src/printables/index.ts`.

### Other content files

- **Feast days:** `src/content/appointedTimes.ts`. Add lesson or activity names to `lessonSlugs` or `activitySlugs` to connect them.
- **Articles:** `src/content/articles.ts`. The `reflections` category is reserved for your own story as a mother.
- **Topics and age groups:** `src/content/taxonomy.ts`.
- **Scripture translation note:** `src/content/scripture.ts`.

### Replace the temporary character art

Every file in `src/components/art/temporary/` is placeholder art. On the site it is labelled "Temporary art · official characters coming soon". When your official characters are ready, put the image files in `public/media/characters/` and swap them in where `KidCharacter` is used (Home and About pages).

---

## Design system

- **Colors** (defined in `src/styles/index.css`):
  - Night Sky (indigo, `ink`)
  - Sunrise (marigold, `sun`)
  - Pomegranate (coral, `pom`)
  - Olive Leaf (green, `olive`)
  - Jordan (teal, `jordan`)
  - Lilac and Sky accents
  - Warm white "paper" background
- **Fonts:** Fredoka for headings and Nunito for body text. Both are bundled with the site, so no Google tracking.
- **Components:**
  - `src/components/ui/`: buttons, badges, Scripture boxes, cards and icons
  - `src/components/art/`: brand illustrations
  - `src/components/layout/`: header, footer, page heroes

---

## For developers

```bash
npm install
npm run dev      # local preview at http://localhost:5173/kids-of-zion/
npm test         # content-integrity and search/filter tests
npm run build    # type-check, build, then write a page file per route (scripts/postbuild.ts)
npm run preview  # serve the production build
```

Built with React 19, Vite, TypeScript, Tailwind CSS v4 and React Router.

**GitHub Pages routing:** after the build, `scripts/postbuild.ts` writes a real `index.html` for every route, each with its own page title and description. That lets direct links and refreshes work with a normal 200 response. The same script writes `404.html`, `sitemap.xml` and `robots.txt`. The base path `/kids-of-zion/` is set in `vite.config.ts`. If you move to a custom domain, change `base` there and `siteUrl` in `src/lib/site.ts`.

**Deployment:** `.github/workflows/deploy.yml` builds and tests every pull request. It publishes to GitHub Pages whenever changes land on `main`.
