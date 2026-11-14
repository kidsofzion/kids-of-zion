import { useParams } from 'react-router'
import { AudioPlayer } from '../components/media/AudioPlayer'
import { LyricVideo, MediaPlaceholder } from '../components/media/LyricVideo'
import { ResourceCard, SongCover } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { Breadcrumbs, ComingSoonBadge, Pill } from '../components/ui/primitives'
import { songBySlug } from '../content/songs'
import { topicById } from '../content/taxonomy'
import { allResources } from '../lib/resources'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import NotFoundPage from './NotFoundPage'

const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

export default function SongPage() {
  const { slug = '' } = useParams()
  const song = songBySlug(slug)
  useDocumentMeta(song ? `${song.title}${song.subtitle ? ` – ${song.subtitle}` : ''}` : 'Song not found', song?.description)
  if (!song) return <NotFoundPage />

  const related = allResources.filter(
    (r) => song.relatedLessonSlugs.some((s) => r.id === `lesson:${s}`) || song.relatedActivitySlugs.some((s) => r.id === `activity:${s}`),
  )

  return (
    <article>
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="container-koz py-10 sm:py-14">
          <div className="[&_a]:text-ink-100 [&_nav_span]:text-white [&_ol]:text-ink-300">
            <Breadcrumbs items={[{ label: 'Set Apart Sound', to: '/music' }, { label: song.title }]} />
          </div>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14">
            <SongCover song={song} className="aspect-square w-full max-w-sm rounded-[2rem] border-2 border-white/20 text-[26px] shadow-2xl sm:text-[30px]" />
            <div>
              <div className="flex flex-wrap gap-2">
                {song.status === 'coming-soon' && <ComingSoonBadge>Song coming soon</ComingSoonBadge>}
                <Pill theme={topicById(song.topic).theme}>{topicById(song.topic).name}</Pill>
              </div>
              <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">{song.title}</h1>
              {song.subtitle && <p className="mt-1 font-display text-2xl font-semibold text-sun-400 sm:text-3xl">{song.subtitle}</p>}
              <p className="mt-5 max-w-xl text-lg text-ink-100">{song.description}</p>
              <dl className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <dt className="text-xs font-bold tracking-wider text-sun-400 uppercase">Scripture</dt>
                  <dd className="mt-1 font-semibold">{song.scriptureReferences.join(' · ')}</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <dt className="text-xs font-bold tracking-wider text-sun-400 uppercase">Themes</dt>
                  <dd className="mt-1 font-semibold">{song.themes.join(' · ')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="container-koz grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <section aria-labelledby="listen-heading">
            <h2 id="listen-heading" className="mb-4 flex items-center gap-2 text-2xl font-semibold">
              <Icon name="volume" className="h-6 w-6 text-pom-500" /> Listen
            </h2>
            {song.audioSrc ? (
              <AudioPlayer src={asset(song.audioSrc)} title={song.subtitle ? `${song.title} – ${song.subtitle}` : song.title} />
            ) : (
              <MediaPlaceholder icon="music" title="Audio coming soon" text="The official recording of this song will be available here when it is released." />
            )}
          </section>

          <section aria-labelledby="video-heading">
            <h2 id="video-heading" className="mb-4 flex items-center gap-2 text-2xl font-semibold">
              <Icon name="video" className="h-6 w-6 text-jordan-500" /> Lyric video
            </h2>
            {song.lyricVideoYouTubeId ? (
              <LyricVideo youtubeId={song.lyricVideoYouTubeId} title={song.title} />
            ) : (
              <MediaPlaceholder icon="video" title="Lyric video coming soon" text="A sing-along lyric video will appear here when it is released." />
            )}
          </section>

          <section aria-labelledby="lyrics-heading">
            <h2 id="lyrics-heading" className="mb-4 flex items-center gap-2 text-2xl font-semibold">
              <Icon name="scroll" className="h-6 w-6 text-sun-700" /> Lyrics
            </h2>
            {song.lyrics && song.lyrics.length > 0 ? (
              <div className="grid gap-6 rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-ink-100 sm:grid-cols-2 sm:p-8">
                {song.lyrics.map((sec, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold tracking-wider text-pom-700 uppercase">{sec.label}</p>
                    <p className="mt-2 font-display text-lg leading-relaxed whitespace-pre-line">{sec.lines.join('\n')}</p>
                  </div>
                ))}
              </div>
            ) : (
              <MediaPlaceholder icon="scroll" title="Lyrics coming soon" text="The official lyrics will be shared here alongside the song’s release." />
            )}
          </section>
        </div>

        <aside className="space-y-6" aria-label="Go deeper">
          <div className="rounded-[1.75rem] bg-sun-100 p-6">
            <h2 className="text-2xl font-semibold">Go deeper</h2>
            <p className="mt-1 text-ink-700">Lessons and activities that go with this song.</p>
          </div>
          {related.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </aside>
      </div>
    </article>
  )
}
