import { ReactNode } from 'react'

type Props = {
  uniqueId: string
  children: ReactNode
}

export default function GeneralWrapper({ uniqueId, children }: Props) {
  console.log('GeneralWrapper: ', uniqueId)

  return <div>{children}</div>
}
