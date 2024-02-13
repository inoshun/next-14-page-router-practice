import { splitAtom } from 'jotai/utils'
import { countersAtom } from '@/atoms/CountersAtom'

export const counterAtomsAtom = splitAtom(countersAtom)
