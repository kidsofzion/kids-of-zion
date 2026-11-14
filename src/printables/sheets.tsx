import { CreationIcon, creationDays, type CreationPiece } from '../components/art/CreationArt'
import { PrintSheet, SheetFooter, SHEET_W } from './PrintSheet'

const INK = '#24154f'
const line = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const, fill: '#fff' }

/** Outlined "bubble" title text for coloring. */
function OutlineTitle({ text, y = 70, size = 64 }: { text: string; y?: number; size?: number }) {
  return (
    <svg viewBox={`0 0 ${SHEET_W} ${y + 24}`} className="block w-full" aria-hidden="true">
      <text
        x={SHEET_W / 2}
        y={y}
        textAnchor="middle"
        fontFamily="'Fredoka Variable', Fredoka, sans-serif"
        fontWeight={700}
        fontSize={size}
        fill="#fff"
        stroke={INK}
        strokeWidth={3}
        paintOrder="stroke"
      >
        {text}
      </text>
    </svg>
  )
}

function VerseStrip({ text, reference }: { text: string; reference: string }) {
  return (
    <div className="rounded-2xl border-[3px] border-ink-900 px-6 py-3 text-center">
      <p className="font-display text-[20px] leading-snug">“{text}”</p>
      <p className="mt-1 text-[14px] font-bold">— {reference}</p>
    </div>
  )
}

function NameLine() {
  return (
    <p className="flex items-end gap-2 text-[15px] font-bold">
      My name: <span className="mb-1 inline-block w-56 border-b-2 border-ink-900" />
    </p>
  )
}

// ───────────────────────────────────────────── Salt & Light coloring page
export function SaltAndLightColoring() {
  return (
    <PrintSheet label="I'm Salt and Light coloring page">
      <div className="flex justify-between">
        <NameLine />
      </div>
      <OutlineTitle text="I’m Salt & Light!" size={68} />
      <svg viewBox="0 0 720 620" className="mt-1 block w-full" aria-hidden="true">
        {/* sky details */}
        {[[90, 70], [620, 60], [560, 150], [140, 190], [360, 40]].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y - 16} L${x + 5} ${y - 5} L${x + 16} ${y} L${x + 5} ${y + 5} L${x} ${y + 16} L${x - 5} ${y + 5} L${x - 16} ${y} L${x - 5} ${y - 5}Z`} {...line} />
        ))}
        {/* hill & city */}
        <path d="M0 330 Q180 170 380 220 Q560 260 720 200 V620 H0Z" fill="#fff" />
        <path d="M0 330 Q180 170 380 220 Q560 260 720 200" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        {[
          [150, 236, 48, 50], [202, 212, 44, 70], [250, 214, 54, 56], [308, 218, 40, 46], [354, 224, 50, 44],
        ].map(([x, y, w, h], i) => (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} {...line} />
            <path d={`M${x - 6} ${y} L${x + w / 2} ${y - 26} L${x + w + 6} ${y}Z`} {...line} />
            <rect x={x + w / 2 - 7} y={y + h - 20} width={14} height={20} {...line} />
            <rect x={x + 8} y={y + 10} width={10} height={10} {...line} />
          </g>
        ))}
        <path d="M0 600 H720" stroke={INK} strokeWidth={3} />
        {/* lamp on a stand, scaled up around the base of the stand */}
        <g transform="translate(400 598) scale(1.3) translate(-360 -590)">
          {Array.from({ length: 11 }).map((_, i) => {
            const a = (-200 + i * 22) * (Math.PI / 180)
            const cx = 505, cy = 335
            return <path key={i} d={`M${cx + Math.cos(a) * 58} ${cy + Math.sin(a) * 58} L${cx + Math.cos(a) * (i % 2 ? 80 : 95)} ${cy + Math.sin(a) * (i % 2 ? 80 : 95)}`} stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
          })}
          <path d="M300 590 h120 l-14 -26 h-92z" {...line} />
          <rect x="344" y="470" width="32" height="94" rx="8" {...line} />
          <ellipse cx="360" cy="470" rx="70" ry="14" {...line} />
          <path d="M262 440 Q262 404 330 404 L420 404 Q470 404 490 382 Q486 440 420 456 L330 456 Q262 456 262 440Z" {...line} />
          <path d="M480 386 L506 372" {...line} />
          <ellipse cx="350" cy="404" rx="30" ry="8" {...line} />
          <path d="M262 432 q-28 -6 -26 -30 q20 4 26 14" {...line} />
          <path d="M498 372 Q470 330 504 286 Q540 334 514 372 Q506 380 498 372Z" {...line} />
          <path d="M504 360 Q494 340 506 318 Q520 342 512 360Z" {...line} />
        </g>
        {/* salt shaker */}
        <path d="M110 590 L118 470 H178 L186 590Z" {...line} />
        <path d="M118 470 Q118 432 148 432 Q178 432 178 470Z" {...line} />
        {[[138, 448], [150, 444], [162, 450]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={3} fill={INK} />
        ))}
        <text x="148" y="545" textAnchor="middle" fontFamily="'Fredoka Variable', sans-serif" fontWeight={700} fontSize={30} fill="#fff" stroke={INK} strokeWidth={2}>
          SALT
        </text>
        {/* heart */}
        <path d="M660 560 c-26-18-44-35-44-55 a22 22 0 0 1 44-7 a22 22 0 0 1 44 7 c0 20-18 37-44 55z" {...line} />
      </svg>
      <div className="mt-3">
        <VerseStrip text="Let your light shine before men, that they may see your good works and glorify your Father who is in heaven." reference="Matthew 5:16" />
      </div>
      <SheetFooter />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── Creation coloring page
export function CreationColoring() {
  const pieces: CreationPiece[] = ['sun', 'moon', 'star', 'cloud', 'tree', 'flower', 'fish', 'bird', 'sheep']
  return (
    <PrintSheet label="Yahuah Made It All coloring page">
      <NameLine />
      <OutlineTitle text="Yahuah Made It All!" size={62} />
      <div className="mt-2 grid grid-cols-3 gap-4">
        {pieces.map((p) => (
          <div key={p} className="flex h-[168px] items-center justify-center rounded-3xl border-[3px] border-ink-900 p-3">
            <CreationIcon piece={p} mode="line" className="h-[140px] w-[140px]" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-[140px] items-start justify-between rounded-3xl border-[3px] border-dashed border-ink-900 p-4">
        <p className="font-display text-[22px] font-semibold">…and Yahuah made ME! Draw yourself here.</p>
      </div>
      <div className="mt-3">
        <VerseStrip text="In the beginning, Elohim created the heavens and the earth." reference="Genesis 1:1" />
      </div>
      <SheetFooter />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── Memory verse cards
const verseCards: { reference: string; text: string; piece: CreationPiece }[] = [
  { reference: 'Matthew 5:16', text: 'Let your light shine before men, that they may see your good works and glorify your Father who is in heaven.', piece: 'star' },
  { reference: 'Psalm 100:3', text: 'Know that Yahuah, he is Elohim. It is he who has made us, and we are his.', piece: 'sheep' },
  { reference: 'Exodus 20:8', text: 'Remember the Sabbath day, to keep it holy.', piece: 'rest' },
  { reference: 'Genesis 1:1', text: 'In the beginning, Elohim created the heavens and the earth.', piece: 'sun' },
  { reference: 'Psalm 119:105', text: 'Your word is a lamp to my feet, and a light for my path.', piece: 'light' },
  { reference: 'Deuteronomy 6:5', text: 'You shall love Yahuah your Elohim with all your heart, with all your soul, and with all your might.', piece: 'flower' },
]

export function MemoryVerseCards() {
  return (
    <PrintSheet label="Memory verse Scripture cards">
      <p className="mb-3 text-center font-display text-[26px] font-bold">Memory Verse Cards ✂</p>
      <div className="grid grid-cols-2 gap-0 border-2 border-dashed border-ink-300">
        {verseCards.map((c) => (
          <div key={c.reference} className="relative flex h-[268px] flex-col border-2 border-dashed border-ink-300 p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border-2 border-ink-900 px-3 py-0.5 text-[14px] font-bold">{c.reference}</span>
              <CreationIcon piece={c.piece} mode="line" className="h-14 w-14" />
            </div>
            <p className="mt-4 flex-1 font-display text-[21px] leading-snug">“{c.text}”</p>
            <p className="text-[11px] text-ink-500">Kids of Zion · WEB, Names restored</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[13px] text-ink-700">Cut along the dashed lines. Tip: print on cardstock and color the pictures.</p>
      <SheetFooter />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── Creation match cards
export const matchPieces: CreationPiece[] = ['sun', 'moon', 'fish', 'bird', 'tree', 'sheep']
const matchLabels: Record<string, string> = { sun: 'Sun', moon: 'Moon', fish: 'Fish', bird: 'Bird', tree: 'Tree', sheep: 'Sheep' }

export function CreationMatchCards() {
  const cards = [...matchPieces, ...matchPieces]
  return (
    <PrintSheet label="Creation matching game cards">
      <p className="mb-1 text-center font-display text-[26px] font-bold">Creation Memory Match ✂</p>
      <p className="mb-3 text-center text-[14px]">Each picture appears twice. Cut out, mix up face down, and find the pairs!</p>
      <div className="grid grid-cols-3 border-2 border-dashed border-ink-300">
        {cards.map((p, i) => (
          <div key={i} className="flex h-[200px] flex-col items-center justify-center border-2 border-dashed border-ink-300 p-3">
            <CreationIcon piece={p} className="h-[130px] w-[130px]" />
            <p className="font-display text-[20px] font-semibold">{matchLabels[p]}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-display text-[17px]">When you find a pair, say: “Yahuah made the ____!”</p>
      <SheetFooter />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── Lamp craft
export function LampCraft() {
  return (
    <PrintSheet label="Shine Your Light lamp craft template">
      <p className="text-center font-display text-[28px] font-bold">Shine Your Light! Lamp Craft ✂</p>
      <p className="text-center text-[14px]">1. Color · 2. Cut on the solid lines · 3. Glue the flame onto the lamp tab · 4. Write a good work!</p>
      <svg viewBox="0 0 720 760" className="mt-2 block w-full" aria-hidden="true">
        {/* flame */}
        <g>
          <path d="M520 250 Q440 150 530 30 Q630 150 560 250 Q540 270 520 250Z" {...line} strokeWidth={4} />
          <path d="M530 222 Q500 170 535 110 Q575 170 552 222Z" {...line} />
          <rect x="515" y="250" width="50" height="34" rx="6" {...line} strokeDasharray="8 6" />
          <text x="540" y="273" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fill={INK}>
            glue
          </text>
        </g>
        {/* lamp body */}
        <g>
          <path d="M60 520 Q60 400 230 390 L470 390 Q590 388 640 310 Q660 470 470 530 L240 540 Q60 560 60 520Z" {...line} strokeWidth={4} />
          <rect x="590" y="300" width="70" height="40" rx="8" transform="rotate(-30 625 320)" {...line} strokeDasharray="8 6" />
          <ellipse cx="300" cy="390" rx="80" ry="18" {...line} />
          <path d="M60 500 q-50-10-44-70 q40 8 50 40" {...line} />
          <path d="M160 470 h300 M160 500 h280" stroke={INK} strokeWidth={2} strokeDasharray="4 6" />
          <text x="160" y="456" fontSize="20" fontFamily="'Fredoka Variable', sans-serif" fontWeight={600} fill={INK}>
            My good work:
          </text>
        </g>
        {/* stand */}
        <g>
          <path d="M250 740 h220 l-30 -50 h-160z" {...line} />
          <rect x="330" y="600" width="60" height="90" rx="10" {...line} />
          <ellipse cx="360" cy="600" rx="120" ry="20" {...line} />
          <text x="360" y="725" textAnchor="middle" fontSize="18" fontFamily="'Fredoka Variable', sans-serif" fontWeight={600} fill={INK}>
            Put it on a stand!
          </text>
        </g>
      </svg>
      <p className="mt-1 text-center font-display text-[17px]">“Neither do you light a lamp and put it under a measuring basket, but on a stand.” — Matthew 5:15</p>
      <SheetFooter note="Adult help needed for cutting" />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── Salt taste test guide
function Face({ mood }: { mood: 'happy' | 'okay' | 'yuck' }) {
  const mouth = { happy: 'M32 58 Q50 76 68 58', okay: 'M34 62 H66', yuck: 'M32 68 Q50 52 68 68' }[mood]
  return (
    <svg viewBox="0 0 100 100" className="h-[70px] w-[70px]" aria-hidden="true">
      <circle cx="50" cy="50" r="44" {...line} />
      <circle cx="36" cy="40" r="5" fill={INK} />
      <circle cx="64" cy="40" r="5" fill={INK} />
      <path d={mouth} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
    </svg>
  )
}

export function SaltTasteTestGuide() {
  return (
    <PrintSheet label="Salt taste test activity guide">
      <OutlineTitle text="The Salt Taste Test" size={56} />
      <div className="mt-2 grid grid-cols-[1.1fr_1fr] gap-6">
        <div className="rounded-3xl border-[3px] border-ink-900 p-5">
          <p className="font-display text-[22px] font-bold">For grown-ups</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[15px]">
            <li>Put the same snack (plain popcorn, crackers or cucumber) in two bowls.</li>
            <li>Add a tiny pinch of salt to one bowl only.</li>
            <li>Taste the plain one first, then the salted one.</li>
            <li>Ask: “What did a little salt do?”</li>
            <li>Read Matthew 5:13 together.</li>
          </ol>
          <p className="mt-3 text-[13px] text-ink-700">Safety: use only a tiny pinch of salt for little ones.</p>
        </div>
        <div className="rounded-3xl border-[3px] border-dashed border-ink-900 p-5">
          <p className="font-display text-[22px] font-bold">Talk about it</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px]">
            <li>Which bowl tasted better?</li>
            <li>Did we need a lot of salt, or just a little?</li>
            <li>How can you bring “good flavor” to your family today?</li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-center font-display text-[24px] font-bold">Circle how each one tasted!</p>
      <div className="mt-3 grid grid-cols-2 gap-6">
        {['Plain', 'With salt'].map((label) => (
          <div key={label} className="rounded-3xl border-[3px] border-ink-900 p-5 text-center">
            <p className="font-display text-[26px] font-bold">{label}</p>
            <div className="mt-3 flex justify-center gap-4">
              <Face mood="happy" />
              <Face mood="okay" />
              <Face mood="yuck" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border-[3px] border-ink-900 p-5">
        <p className="font-display text-[20px] font-bold">One way I can be salt this week:</p>
        <div className="mt-6 border-b-2 border-ink-900" />
        <div className="mt-8 border-b-2 border-ink-900" />
      </div>
      <div className="mt-6">
        <VerseStrip text="You are the salt of the earth…" reference="Matthew 5:13" />
      </div>
      <SheetFooter />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── My Sabbath Plan
export function SabbathPlan() {
  const jobs = ['Tidy up my toys', 'Help set the table', 'Take a bath & get ready', 'Help in the kitchen', 'Choose a Sabbath book', 'Pick a song to sing', 'Make a card for someone', 'Help a brother or sister']
  return (
    <PrintSheet label="My Sabbath Plan worksheet">
      <NameLine />
      <OutlineTitle text="My Sabbath Plan" size={60} />
      <p className="text-center text-[16px]">The seventh day is a holy day of rest. Check the ways you will help your family get ready!</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {jobs.map((j) => (
          <div key={j} className="flex items-center gap-3 rounded-2xl border-[3px] border-ink-900 px-4 py-3">
            <span className="h-8 w-8 shrink-0 rounded-lg border-[3px] border-ink-900" />
            <span className="font-display text-[19px] font-semibold">{j}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border-[3px] border-dashed border-ink-900 px-4 py-3">
        <span className="h-8 w-8 shrink-0 rounded-lg border-[3px] border-ink-900" />
        <span className="font-display text-[19px] font-semibold">My own idea:</span>
        <span className="mb-1 flex-1 self-end border-b-2 border-ink-900" />
      </div>
      <div className="relative mt-5 h-[280px] rounded-3xl border-[3px] border-ink-900 p-4">
        <p className="font-display text-[20px] font-bold">My favorite thing to do on the Sabbath:</p>
        <CreationIcon piece="rest" mode="line" className="absolute right-4 bottom-4 h-20 w-20" />
      </div>
      <div className="mt-4">
        <VerseStrip text="Remember the Sabbath day, to keep it holy." reference="Exodus 20:8" />
      </div>
      <SheetFooter />
    </PrintSheet>
  )
}

// ───────────────────────────────────────────── Creation week chart
export function CreationWeek() {
  return (
    <PrintSheet label="Creation week chart">
      <OutlineTitle text="The Creation Week" size={56} />
      <div className="mt-1 grid grid-cols-2 gap-3">
        {creationDays.map((d) => (
          <div key={d.day} className={`flex flex-col rounded-3xl border-[3px] border-ink-900 p-3 ${d.day === 7 ? 'col-span-2 border-dashed' : ''}`} style={{ height: d.day === 7 ? 150 : 172 }}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-ink-900 font-display text-[22px] font-bold">{d.day}</div>
              <div className="min-w-0">
                <p className="font-display text-[18px] leading-tight font-semibold">{d.title}</p>
                <p className="text-[12px] text-ink-700">{d.reference}</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4">
              {d.pieces.map((p) => (
                <CreationIcon key={p} piece={p} mode="line" className="h-[96px] w-[96px]" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <VerseStrip text="Elohim blessed the seventh day, and made it holy, because he rested in it from all his work of creation which he had done." reference="Genesis 2:3" />
      </div>
      <SheetFooter />
    </PrintSheet>
  )
}
