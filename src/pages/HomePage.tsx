import { Link } from 'react-router'
import { CreationIcon } from '../components/art/CreationArt'
import { KidCharacter, TemporaryArtLabel } from '../components/art/temporary/KidCharacter'
import { Cloud, Hills, OliveBranch, Star, SunBurst, Wave } from '../components/art/Scenery'
import { AgePathCard, ResourceCard, SongCard, TopicCard } from '../components/ui/cards'
import { Icon } from '../components/ui/Icon'
import { ButtonLink, SectionHeading } from '../components/ui/primitives'
import { lessons } from '../content/lessons'
import { songs } from '../content/songs'
import { ageGroups, topics } from '../content/taxonomy'
import { allResources } from '../lib/resources'
import { site } from '../lib/site'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const pillars = [
  { title: 'Know Yahuah', text: 'His Name, His character and His great love — introduced with wonder.', icon: 'sun', color: 'bg-sun-500' },
  { title: 'Love His Word', text: 'Scripture songs, memory verses and stories that stay for a lifetime.', icon: 'book', color: 'bg-pom-500' },
  { title: 'Walk in His Ways', text: 'Torah, Sabbath and righteousness practised joyfully at home.', icon: 'path', color: 'bg-olive-500' },
]

export function HomePage() {
  useDocumentMeta(undefined)
  const featuredActivities = allResources.filter((r) => r.kind === 'activity').slice(0, 4)

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section
        className="relative isolate overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #24154f 0%, #3d2a85 34%, #b65f9a 66%, #ffb06a 88%, #ffc53d 100%)' }}
      >
        {[
          'top-[3%] left-[6%] h-5 w-5', 'top-[12%] left-[46%] hidden h-3 w-3 lg:block', 'top-[4%] right-[30%] h-4 w-4', 'top-[22%] right-[6%] h-6 w-6', 'top-[2%] left-[64%] h-2.5 w-2.5',
        ].map((c, i) => (
          <Star key={i} className={`absolute ${c} motion-safe:animate-twinkle`} fill={i % 2 ? '#ffffff' : '#ffc53d'} />
        ))}
        <Cloud className="absolute top-[78%] -left-16 hidden w-40 opacity-30 motion-safe:animate-float lg:block" />
        <Cloud className="absolute top-[30%] right-[4%] hidden w-28 opacity-25 motion-safe:animate-float [animation-delay:2s] lg:block" />

        <div className="container-koz relative grid items-center gap-6 pt-12 pb-40 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:pt-20 lg:pb-52">
          <div className="relative z-10 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm font-semibold tracking-wide text-sun-200 ring-1 ring-white/20 backdrop-blur">
              <Icon name="sparkle" className="h-4 w-4" /> {site.tagline}
            </p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-bold text-white sm:text-6xl lg:text-[4.4rem]">
              Where little hearts{' '}
              <span className="relative inline-block text-sun-400">
                learn to love
                <svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                  <path d="M4 14 Q80 2 150 10 T296 8" stroke="#ef4f5c" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Yahuah.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-50 sm:text-xl lg:mx-0">
              Original Scripture songs, joyful lessons and hands-on activities that help your family know the Most High, love His Word and
              walk in His ways — together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink to="/find-a-lesson" size="lg" icon="search">
                Find a lesson
              </ButtonLink>
              <ButtonLink to="/music" size="lg" variant="secondary" icon="music">
                Set Apart Sound
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <SunBurst className="absolute top-1/2 left-1/2 w-[110%] -translate-x-1/2 -translate-y-[58%] opacity-95" />
            <div className="relative flex items-end justify-center">
              <KidCharacter variant="braids" wave={false} className="relative z-0 -mr-6 w-[30%] translate-y-2 motion-safe:animate-float [animation-delay:1s]" />
              <KidCharacter variant="puffs" className="relative z-10 w-[38%] motion-safe:animate-float" />
              <KidCharacter variant="coils" wave={false} className="relative z-0 -ml-6 w-[32%] translate-y-3 motion-safe:animate-float [animation-delay:2s]" />
            </div>
            <div className="relative mt-3 flex justify-center">
              <TemporaryArtLabel />
            </div>
          </div>
        </div>
        <Hills className="absolute inset-x-0 bottom-0 h-28 w-full sm:h-40 lg:h-48" />
      </section>

      {/* ───────────── PILLARS ───────────── */}
      <section aria-labelledby="pillars-heading" className="container-koz -mt-2 pb-8">
        <h2 id="pillars-heading" className="sr-only">
          What Kids of Zion helps you do
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex gap-4 rounded-[1.75rem] bg-white p-5 shadow-soft ring-1 ring-ink-100 motion-safe:animate-pop-in" style={{ animationDelay: `${i * 80}ms` }}>
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white ${p.color}`}>
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-[0.97rem] text-ink-700">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── SET APART SOUND ───────────── */}
      <section aria-labelledby="music-heading" className="relative mt-16 bg-ink-900 py-20 text-white">
        <Wave className="absolute -top-px left-0 h-12 w-full" flip />
        <Star className="absolute top-20 left-[6%] h-6 w-6 motion-safe:animate-twinkle" />
        <Star className="absolute right-[10%] bottom-24 h-4 w-4 motion-safe:animate-twinkle [animation-delay:1.5s]" fill="#fff" />
        <div className="container-koz grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow text-sun-400">Music & videos</p>
            <h2 id="music-heading" className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
              Set Apart <span className="text-sun-400">Sound</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-100">
              Original songs that put Scripture on little lips — with lyric videos, lyrics, Scripture references and activities for every
              song.
            </p>
            <ul className="mt-6 grid gap-2 text-ink-50">
              {['Sing-along lyric videos', 'Every song linked to Scripture', 'Lessons & printables to go deeper'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sun-500 text-ink-900">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink to="/music" className="mt-8" iconRight="arrow">
              Explore the music
            </ButtonLink>
          </div>
          <div className="grid gap-6 text-ink-900 sm:grid-cols-2">
            {songs.map((s) => (
              <SongCard key={s.slug} song={s} />
            ))}
          </div>
        </div>
        <Wave className="absolute -bottom-px left-0 h-12 w-full" />
      </section>

      {/* ───────────── TOPICS ───────────── */}
      <section aria-labelledby="topics-heading" className="container-koz py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Learning library"
            title={<span id="topics-heading">Explore by topic</span>}
            description="Six pathways through the Scriptures, from who Yahuah is to the big questions little hearts ask."
          />
          <ButtonLink to="/learn" variant="secondary" iconRight="arrow" className="shrink-0 self-start md:self-auto">
            All resources
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <TopicCard key={t.id} topic={t} count={allResources.filter((r) => r.topic === t.id).length} />
          ))}
        </div>
      </section>

      {/* ───────────── AGE PATHS ───────────── */}
      <section aria-labelledby="ages-heading" className="bg-paper-2 py-20">
        <div className="container-koz">
          <SectionHeading
            align="center"
            eyebrow="Learning paths"
            eyebrowClass="text-olive-700"
            title={<span id="ages-heading">Growing at every age</span>}
            description="Every lesson includes ideas for each stage, so siblings can learn together."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ageGroups.map((g, i) => (
              <AgePathCard key={g.id} group={g} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SAMPLE LESSONS ───────────── */}
      <section aria-labelledby="lessons-heading" className="container-koz py-20">
        <SectionHeading
          eyebrow="Start here"
          title={<span id="lessons-heading">Ready-to-teach lessons</span>}
          description="Scripture, a child-friendly explanation, activities, questions and a memory verse — everything you need in one place."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {lessons.map((l) => (
            <ResourceCard key={l.slug} resource={allResources.find((r) => r.id === `lesson:${l.slug}`)!} />
          ))}
        </div>
      </section>

      {/* ───────────── ACTIVITIES + PLAY ───────────── */}
      <section aria-labelledby="activities-heading" className="container-koz pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Activities & printables"
                eyebrowClass="text-jordan-700"
                title={<span id="activities-heading">Hands-on faith</span>}
                description="Coloring pages, crafts, games and Scripture cards — free to print at home."
              />
              <ButtonLink to="/activities" variant="secondary" iconRight="arrow" className="shrink-0 self-start md:self-auto">
                All activities
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {featuredActivities.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          </div>
          <Link
            to="/play"
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-ink-900 bg-pom-600 p-7 text-white shadow-pop transition hover:-translate-y-1"
          >
            <Star className="absolute top-6 right-6 h-8 w-8 motion-safe:animate-twinkle" />
            <Star className="absolute top-20 right-16 h-4 w-4 motion-safe:animate-twinkle [animation-delay:1s]" fill="#fff" />
            <p className="eyebrow text-sun-200">For kids</p>
            <h3 className="mt-2 text-4xl font-bold text-white">Kids Play</h3>
            <p className="mt-3 text-lg text-white">Flip, match and sort your way through creation with games made for little hands.</p>
            <div className="relative mt-8 flex flex-1 items-center justify-center">
              <div className="grid w-full max-w-xs grid-cols-3 gap-3">
                {(['sun', 'moon', 'fish', 'tree', 'bird', 'star'] as const).map((piece, i) => (
                  <span
                    key={piece}
                    className="flex aspect-square items-center justify-center rounded-2xl border-2 border-ink-900 bg-white p-2.5 shadow-pop-sm transition group-hover:rotate-3 even:-rotate-3"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <CreationIcon piece={piece} className="h-full w-full" />
                  </span>
                ))}
              </div>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 font-display font-semibold text-ink-900">
              Let’s play! <Icon name="arrow" className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ───────────── FIND A LESSON STRIP ───────────── */}
      <section aria-labelledby="finder-heading" className="container-koz">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-jordan-700 p-8 text-white sm:p-12">
          <OliveBranch className="absolute -top-2 -right-4 w-56 opacity-40" color="#9fdc98" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 id="finder-heading" className="text-3xl font-semibold text-white sm:text-4xl">
                Only have ten minutes? We’ve got you.
              </h2>
              <p className="mt-3 max-w-lg text-lg text-jordan-100">
                Tell us your child’s age and how much time you have. We’ll suggest the right lesson, song or activity — including quick
                versions for busy days.
              </p>
            </div>
            <div className="grid gap-3">
              {ageGroups.map((g) => (
                <Link
                  key={g.id}
                  to={`/find-a-lesson?age=${g.id}`}
                  className="flex items-center justify-between rounded-2xl border-2 border-ink-900 bg-white px-5 py-3.5 font-display text-lg font-semibold text-ink-900 shadow-pop-sm transition hover:-translate-y-0.5"
                >
                  <span>
                    {g.name} <span className="text-base font-medium text-ink-500">· {g.ages}</span>
                  </span>
                  <Icon name="arrow" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PARENT ENCOURAGEMENT ───────────── */}
      <section aria-labelledby="parents-heading" className="container-koz py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative rounded-[2.5rem] bg-sun-100 p-8 sm:p-12">
            <span className="absolute -top-6 left-8 font-display text-8xl leading-none text-sun-500" aria-hidden="true">
              “
            </span>
            <blockquote className="relative font-display text-2xl leading-snug text-ink-900 sm:text-3xl">
              These words, which I command you today, shall be on your heart; and you shall teach them diligently to your children, and
              shall talk of them when you sit in your house, and when you walk by the way…
            </blockquote>
            <p className="mt-4 font-bold text-sun-700">— Deuteronomy 6:6–7</p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Parent corner"
              title={<span id="parents-heading">You don’t have to be an expert to teach your child.</span>}
              description="Faith grows in ordinary moments — at breakfast, on car rides and at bedtime. We’re here with simple, practical tools and encouragement for the journey."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/parents" iconRight="arrow">
                Visit the Parent Corner
              </ButtonLink>
              <ButtonLink to="/about" variant="ghost">
                Our story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
