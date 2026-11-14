import { useParams } from 'react-router'
import { Icon } from '../components/ui/Icon'
import { Breadcrumbs, ButtonLink, DraftBadge, ScriptureBox } from '../components/ui/primitives'
import { articleBySlug, articleCategories } from '../content/articles'
import { cx, themeClasses } from '../lib/theme'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import NotFoundPage from './NotFoundPage'

export default function ArticlePage() {
  const { slug = '' } = useParams()
  const a = articleBySlug(slug)
  useDocumentMeta(a?.title ?? 'Article not found', a?.excerpt)
  if (!a) return <NotFoundPage />
  const t = themeClasses[a.theme]
  return (
    <article>
      <header className={cx(t.soft)}>
        <div className="container-koz max-w-3xl py-12">
          <Breadcrumbs items={[{ label: 'Parent Corner', to: '/parents' }, { label: a.title }]} />
          <p className={cx('eyebrow', t.text)}>{articleCategories.find((c) => c.id === a.category)?.name}</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{a.title}</h1>
          <p className="mt-4 text-xl text-ink-700">{a.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" className="h-4 w-4" /> {a.readingMinutes} min read
            </span>
            {a.status === 'draft-awaiting-review' && <DraftBadge long />}
          </div>
        </div>
      </header>
      <div className="container-koz prose-koz max-w-3xl py-12 text-lg">
        {a.body.map((b, i) => {
          switch (b.type) {
            case 'p':
              return <p key={i}>{b.text}</p>
            case 'h2':
              return <h2 key={i}>{b.text}</h2>
            case 'list':
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )
            case 'tip':
              return (
                <div key={i} className="my-6 flex gap-3 rounded-2xl bg-sun-100 p-5">
                  <Icon name="sparkle" className="mt-1 h-5 w-5 shrink-0 text-sun-700" />
                  <p className="!mb-0">{b.text}</p>
                </div>
              )
            case 'scripture':
              return <ScriptureBox key={i} reference={b.reference} text={b.text} className="my-8" />
          }
        })}
        <div className="mt-12">
          <ButtonLink to="/parents" variant="secondary" icon="arrow-left">
            Back to Parent Corner
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}
