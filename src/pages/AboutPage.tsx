import { KidCharacter, TemporaryArtLabel } from '../components/art/temporary/KidCharacter'
import { PageHero } from '../components/layout/PageHero'
import { Icon } from '../components/ui/Icon'
import { ButtonLink, SectionHeading } from '../components/ui/primitives'
import { scriptureNote } from '../content/scripture'
import { site } from '../lib/site'
import { cx } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const values = [
  { title: 'Knowing Yahuah', text: 'We teach children the Name of the Creator — Yahuah — and introduce Yahusha the Messiah and the Ruach HaQodesh with reverence and joy.', icon: 'sun', bg: 'bg-sun-100' },
  { title: 'Loving His Word', text: 'Scripture is at the center of everything we make. We quote it carefully and keep our own teaching clearly labelled.', icon: 'book', bg: 'bg-pom-100' },
  { title: 'Torah & obedience', text: 'We believe His instructions are good, and we help children see obedience as a joyful response to His love.', icon: 'path', bg: 'bg-olive-100' },
  { title: 'Sabbath & appointed times', text: 'The weekly Sabbath and His feasts shape the rhythm of our family life — and our teaching.', icon: 'calendar', bg: 'bg-jordan-100' },
  { title: 'Righteousness', text: 'We want children to be salt and light: kind, honest, set apart and full of good works.', icon: 'heart', bg: 'bg-lilac-100' },
  { title: 'A personal relationship', text: 'More than information, we pray children come to know and love the Most High for themselves.', icon: 'hands', bg: 'bg-sky-100' },
]

export default function AboutPage() {
  useDocumentMeta('About Kids of Zion', site.mission)
  return (
    <>
      <PageHero
        eyebrow="About Kids of Zion"
        theme="sun"
        title={site.tagline}
        description={site.mission}
        art={
          <div className="flex flex-col items-center">
            <div className="flex items-end">
              <KidCharacter variant="coils" wave={false} className="-mr-4 w-40" />
              <KidCharacter variant="puffs" className="w-44" />
            </div>
            <TemporaryArtLabel className="mt-2" />
          </div>
        }
      />

      <section className="container-koz grid gap-10 py-16 lg:grid-cols-2" aria-labelledby="story-heading">
        <div>
          <SectionHeading eyebrow="How it began" title={<span id="story-heading">A mother, her daughters and a song</span>} />
        </div>
        <div className="space-y-4 text-lg text-ink-900">
          <p>
            Kids of Zion began with a simple desire: to create meaningful, joyful ways to teach my own daughters the ways of the Most High.
          </p>
          <p>
            What started at home — songs, lessons and activities made for our own family — is now being shared with other families who want
            their children to know Yahuah, love His Word and walk in His ways.
          </p>
          <p>
            Here you’ll find original children’s music, animated educational videos, Scripture lessons, printable activities and practical
            teaching resources — all made with care for little hearts.
          </p>
        </div>
      </section>

      <section className="bg-paper-2 py-16" aria-labelledby="values-heading">
        <div className="container-koz">
          <SectionHeading align="center" eyebrow="What we believe & value" eyebrowClass="text-olive-700" title={<span id="values-heading">Followers of the Way</span>} description="Our teaching uses the names Yahuah, Yahusha and Ruach HaQodesh, and celebrates Torah, obedience, the Sabbath and the biblical appointed times." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className={cx('rounded-[1.75rem] p-6', v.bg)}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-1 text-ink-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-koz grid gap-6 py-16 md:grid-cols-2" aria-label="Our commitments">
        <div className="rounded-[2rem] border-2 border-ink-900 bg-white p-8 shadow-pop-sm">
          <Icon name="shield" className="h-10 w-10 text-olive-500" />
          <h2 className="mt-4 text-2xl font-semibold">Our privacy promise</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>We never ask for information about your children.</li>
            <li>There are no child accounts, sign-ups or public comments.</li>
            <li>We don’t use tracking or advertising cookies.</li>
            <li>Videos come from YouTube only after you press play, using its privacy-enhanced mode.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border-2 border-ink-900 bg-white p-8 shadow-pop-sm">
          <Icon name="book" className="h-10 w-10 text-jordan-500" />
          <h2 className="mt-4 text-2xl font-semibold">How we handle Scripture</h2>
          <p className="mt-3">{scriptureNote.long}</p>
          <p className="mt-3">New lessons are labelled as drafts until they have been carefully reviewed.</p>
        </div>
      </section>

      <section className="container-koz text-center">
        <h2 className="text-3xl font-semibold">Start learning together today</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/find-a-lesson" icon="search" size="lg">
            Find a lesson
          </ButtonLink>
          <ButtonLink to="/music" variant="secondary" icon="music" size="lg">
            Listen to the music
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
