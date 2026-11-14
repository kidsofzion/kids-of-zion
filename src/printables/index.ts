import type { ComponentType } from 'react'
import {
  CreationColoring,
  CreationMatchCards,
  CreationWeek,
  LampCraft,
  MemoryVerseCards,
  SabbathPlan,
  SaltAndLightColoring,
  SaltTasteTestGuide,
} from './sheets'

/**
 * Registry of printable pages. An activity's `printable` field points to a key here.
 * To add a printable: create a component in sheets.tsx and register it below.
 */
export const printables: Record<string, ComponentType> = {
  'salt-and-light-coloring': SaltAndLightColoring,
  'creation-coloring': CreationColoring,
  'memory-verse-cards': MemoryVerseCards,
  'creation-match-cards': CreationMatchCards,
  'lamp-craft': LampCraft,
  'salt-taste-test-guide': SaltTasteTestGuide,
  'sabbath-plan': SabbathPlan,
  'creation-week': CreationWeek,
}
