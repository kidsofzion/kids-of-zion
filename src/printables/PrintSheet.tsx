import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

/**
 * A US-Letter printable page.
 * The printable area is 7.5in × 10in (720 × 960 CSS px) — Letter paper with
 * 0.5in margins. On screen the sheet is scaled to fit; in print it is 1:1.
 * (Also fits A4 paper when "Fit to page" is selected.)
 */
export const SHEET_W = 720
export const SHEET_H = 960

export function PrintSheet({ children, label }: { children: ReactNode; label: string }) {
  const outer = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const el = outer.current
    if (!el) return
    const update = () => setScale(Math.min(1, el.clientWidth / (SHEET_W + 96)))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={outer} className="print-page-break w-full" role="group" aria-label={label}>
      <div className="print-sheet-frame mx-auto overflow-hidden" style={{ width: (SHEET_W + 96) * scale, height: (SHEET_H + 96) * scale }}>
        <div
          className="print-sheet origin-top-left rounded-md bg-white p-12 shadow-soft ring-1 ring-ink-100"
          style={{ width: SHEET_W + 96, height: SHEET_H + 96, transform: `scale(${scale})` }}
        >
          <div className="relative overflow-hidden text-ink-900" style={{ width: SHEET_W, height: SHEET_H }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Small footer printed on every sheet. */
export function SheetFooter({ note }: { note?: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-ink-100 pt-2 text-[11px] text-ink-500">
      <span className="font-display font-semibold">Kids of Zion · Little Hearts. Deep Roots. Set-Apart Lives.</span>
      <span>{note ?? 'Free for family & classroom use'}</span>
    </div>
  )
}
