import { useState } from 'react'
import { Link } from 'react-router'
import { PageHero } from '../components/layout/PageHero'
import { Icon } from '../components/ui/Icon'
import { ComingSoonBadge, Pill, ScriptureBox } from '../components/ui/primitives'
import { appointedTimes } from '../content/appointedTimes'
import { cx, themeClasses } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function AppointedTimesPage() {
  useDocumentMeta('His Appointed Times', 'Teach children about the Sabbath and the biblical feasts of Yahuah from Leviticus 23 — Passover, Shavuot, Yom Teruah, Sukkot and more.')
  const [open, setOpen] = useState<string | null>('sabbath')

  return (
    <>
      <PageHero
        eyebrow="His appointed times"
        theme="jordan"
        title="The Sabbath & the feasts of Yahuah"
        description="Set-apart days that tell the story of redemption — celebrated joyfully with children, week by week and season by season."
        art={
          <div className="grid grid-cols-3 gap-3 text-center text-6xl">
            {appointedTimes.slice(0, 9).map((a, i) => (
              <span key={a.slug} className={cx('flex aspect-square items-center justify-center rounded-3xl border-2 border-ink-900 shadow-pop-sm', themeClasses[a.theme].soft, i % 2 ? 'rotate-2' : '-rotate-2')} aria-hidden="true">
                {a.emoji}
              </span>
            ))}
          </div>
        }
      />

      <div className="container-koz py-12">
        <ScriptureBox
          className="mx-auto max-w-3xl"
          size="lg"
          reference="Leviticus 23:2"
          text="Speak to the children of Israel, and tell them, ‘The set feasts of Yahuah, which you shall proclaim to be holy convocations, even these are my set feasts.’"
        />

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-sun-100 p-4 text-[0.95rem]">
          <p>
            <strong>A note on dates:</strong> families reckon the biblical calendar in different ways, so we don’t list calendar dates here.
            Each appointed time shows its Scripture references and season so you can follow your family’s understanding.
          </p>
        </div>

        <ul className="mx-auto mt-12 max-w-4xl space-y-4">
          {appointedTimes.map((a) => {
            const t = themeClasses[a.theme]
            const isOpen = open === a.slug
            return (
              <li key={a.slug} className={cx('overflow-hidden rounded-[1.75rem] border-2 border-ink-900 bg-white transition', isOpen && 'shadow-pop')}>
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`feast-${a.slug}`}
                    onClick={() => setOpen(isOpen ? null : a.slug)}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <span className={cx('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl', t.soft)} aria-hidden="true">
                      {a.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-2xl font-semibold">{a.name}</span>
                      <span className="block text-sm font-semibold text-ink-500">
                        {a.hebrewName} · “{a.meaning}” · {a.season}
                      </span>
                    </span>
                    <Icon name="chevron" className={cx('h-6 w-6 shrink-0 transition', isOpen && 'rotate-180')} />
                  </button>
                </h2>
                <div id={`feast-${a.slug}`} hidden={!isOpen} className="border-t-2 border-ink-100 p-5 sm:p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="eyebrow text-jordan-700">What Scripture says</p>
                      <p className="mt-1">{a.scriptureSummary}</p>
                      <p className="mt-2 text-sm font-bold text-jordan-700">{a.references.join(' · ')}</p>
                    </div>
                    <div>
                      <p className="eyebrow text-pom-700">For children</p>
                      <p className="mt-1">{a.forChildren}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {a.lessonSlugs.length > 0 ? <Pill theme="olive">Lesson available</Pill> : <ComingSoonBadge>Lessons coming soon</ComingSoonBadge>}
                  </div>
                  <Link to={`/appointed-times/${a.slug}`} className="mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold text-jordan-700 hover:underline">
                    Family ideas & resources <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
