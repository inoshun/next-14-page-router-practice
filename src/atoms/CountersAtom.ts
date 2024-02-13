import { atom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'

export type Counter = {
  uid: string
  title: string
  count: number
}

export const countersAtom = atom<Counter[]>([
  {
    uid: uuidv4(),
    title: 'new',
    count: 0,
  },
])
