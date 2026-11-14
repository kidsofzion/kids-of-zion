import { Link } from 'react-router'
import { ageGroupById, ageGroups, resourceTypeById, topicById, type AgeGroup, type Topic } from '../../content/taxonomy'
import type { Song } from '../../content/types'
import type { Resource } from '../../lib/resources'
import { cx, themeClasses } from '../../lib/theme'
import { Blob, PlaceholderCover, Sprout } from '../art/Scenery'
import { Icon } from './Icon'
import { ComingSoonBadge, DraftBadge, Pill } from './primitives'

const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

export function SongCover({ song, className = '' }: { song: Song; className?: string }) {
  if (song.coverArt) {
    return <img src={asset(song.coverArt)} alt={`Cover art for ${song.title}`} className={cx('object-cover', className)} loading="lazy" />
  }
  return <PlaceholderCover title={song.title} subtitle={song.subtitle} theme={song.theme} className={className} />
}

export function SongCard({ song }: { song: Song }) {
  return (
    <Link
      to={`/music/${song.slug}`}
      className="group block rounded-[2rem] border-2 border-ink-900 bg-white p-3 shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
    >
      <div className="relative">
        <SongCover song={song} className="aspect-square w-full rounded-[1.5rem] text-[22px] sm:text-[26px]" />
        <span className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-900 bg-sun-500 text-ink-900 transition group-hover:scale-110">
          <Icon name="play" className="ml-0.5 h-5 w-5" />
        </span>
      </div>
      <div className="px-2 pt-7 pb-2">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {song.status === 'coming-soon' ? <ComingSoonBadge>Song coming soon</ComingSoonBadge> : <Pill theme="olive">Listen now</Pill>}
        </div>
        <h3 className="text-2xl font-semibold">
          {song.title}
          {song.subtitle && <span className="block text-lg text-ink-500">{song.subtitle}</span>}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.95rem] text-ink-700">{song.description}</p>
        <p className="mt-3 text-sm font-bold text-jordan-700">{song.scriptureReferences.join(' · ')}</p>
      </div>
    </Link>
  )
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const t = themeClasses[resource.theme]
  const type = resourceTypeById(resource.type)
  const topic = topicById(resource.topic)
  return (
    <Link
      to={resource.href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink-900 bg-white shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
    >
      <div className={cx('relative flex h-28 items-center gap-3 px-5', t.soft)}>
        <span className={cx('relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink-900 bg-white', t.text)}>
          <Icon name={type.icon} className="h-7 w-7" />
        </span>
        <div className="relative z-10">
          <p className={cx('text-xs font-bold tracking-wider uppercase', t.text)}>{type.name}</p>
          <p className="text-sm font-semibold text-ink-700">{topic.name}</p>
        </div>
        <Blob className="absolute -top-10 -right-10 h-28 w-28 opacity-50" color="#ffffff" shape={1} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {resource.isDraft && <DraftBadge />}
          {resource.comingSoon && <ComingSoonBadge />}
        </div>
        <h3 className="text-xl font-semibold group-hover:underline">{resource.title}</h3>
        <div className="flex-1">
          <p className="mt-2 line-clamp-3 text-[0.95rem] text-ink-700">{resource.summary}</p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <Pill theme="ink" icon="clock">
            {resource.durationMinutes} min
          </Pill>
          {resource.ageGroups.length === ageGroups.length ? (
            <Pill theme="olive">All ages</Pill>
          ) : (
            resource.ageGroups.map((a) => (
              <Pill key={a} theme={ageGroupById(a).theme}>
                {ageGroupById(a).ages}
              </Pill>
            ))
          )}
        </div>
      </div>
    </Link>
  )
}

export function TopicCard({ topic, count }: { topic: Topic; count: number }) {
  const t = themeClasses[topic.theme]
  return (
    <Link
      to={`/learn?topic=${topic.id}`}
      className={cx('group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-1', t.soft)}
    >
      <Blob className="absolute -right-10 -bottom-12 h-40 w-40 opacity-70 transition group-hover:scale-110" color="#ffffff" shape={2} />
      <span className={cx('relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-soft', t.solid)}>
        <Icon name={topic.icon} className="h-7 w-7" />
      </span>
      <h3 className="relative mt-5 text-2xl font-semibold">{topic.name}</h3>
      <p className="relative mt-2 flex-1 text-ink-700">{topic.description}</p>
      <p className={cx('relative mt-4 flex items-center gap-1.5 font-display font-semibold', t.text)}>
        {count > 0 ? `${count} resource${count === 1 ? '' : 's'}` : 'Lessons coming soon'}
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </p>
    </Link>
  )
}

export function AgePathCard({ group, index }: { group: AgeGroup; index: number }) {
  const t = themeClasses[group.theme]
  return (
    <Link
      to={`/learn?age=${group.id}`}
      className="group relative flex h-full flex-col rounded-[2rem] border-2 border-ink-900 bg-white p-6 shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
    >
      <div className={cx('relative mb-5 flex h-36 items-end justify-center overflow-hidden rounded-[1.5rem]', t.soft)}>
        <Blob className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2" color="#ffffff" shape={(index % 3) as 0 | 1 | 2} />
        <Sprout stage={(index + 1) as 1 | 2 | 3} className="relative h-28 w-28 transition group-hover:scale-110" />
      </div>
      <p className={cx('eyebrow', t.text)}>{group.ages}</p>
      <h3 className="mt-1 text-2xl font-semibold">{group.name}</h3>
      <p className="mt-2 flex-1 text-ink-700">{group.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {group.focus.map((f) => (
          <li key={f}>
            <Pill theme={group.theme}>{f}</Pill>
          </li>
        ))}
      </ul>
    </Link>
  )
}
