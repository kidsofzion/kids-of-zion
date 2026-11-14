import { PageHero } from '../components/layout/PageHero'
import { SunBurst } from '../components/art/Scenery'
import { SongCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { SectionHeading } from '../components/ui/primitives'
import { songs } from '../content/songs'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function MusicPage() {
  useDocumentMeta('Set Apart Sound — Music & Videos', 'Original Kids of Zion Scripture songs for children, with lyric videos, lyrics, Scripture references and related lessons.')
  return (
    <>
      <PageHero
        eyebrow="Music & videos"
        theme="lilac"
        title={
          <>
            Set Apart <span className="text-lilac-700">Sound</span>
          </>
        }
        description="Original songs that hide the Word in little hearts. Every song comes with Scripture references, lyrics, a lyric video and activities to go deeper."
        art={<SunBurst className="mx-auto w-72" />}
      />

      <section className="container-koz py-14" aria-labelledby="songs-heading">
        <h2 id="songs-heading" className="sr-only">
          Songs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {songs.map((s) => (
            <SongCard key={s.slug} song={s} />
          ))}
          <div className="flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-ink-300 p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lilac-100 text-lilac-700">
              <Icon name="music" className="h-8 w-8" />
            </span>
            <p className="mt-4 font-display text-xl font-semibold">More songs on the way</p>
            <p className="mt-1 max-w-xs text-ink-700">New Set Apart Sound songs will appear here as they are released.</p>
          </div>
        </div>
      </section>

      <section className="container-koz" aria-labelledby="how-heading">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-soft ring-1 ring-ink-100 sm:p-12">
          <SectionHeading eyebrow="Singing together" title={<span id="how-heading">Ways to use the songs at home</span>} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'music', title: 'Repeat it', text: 'Play one song all week. Repetition is how little ones learn.' },
              { icon: 'hands', title: 'Move to it', text: 'Add motions — bodies remember what they move.' },
              { icon: 'book', title: 'Open the Word', text: 'Read the Scripture reference listed for each song.' },
              { icon: 'crayon', title: 'Go deeper', text: 'Use the linked lesson and printables to keep learning.' },
            ].map((x) => (
              <div key={x.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac-100 text-lilac-700">
                  <Icon name={x.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-3 text-xl font-semibold">{x.title}</h3>
                <p className="mt-1 text-ink-700">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
