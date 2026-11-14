import { useEffect } from 'react'
import { site } from './site'

/** Sets the page title and description for each page (helps search engines & sharing). */
export function useDocumentMeta(title: string | undefined, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} — ${site.tagline}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description ?? site.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', document.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description ?? site.description)
  }, [title, description])
}
