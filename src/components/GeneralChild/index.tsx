type Props = {
  uniqueId: string
}

export default function GeneralChild({ uniqueId }: Props) {
  console.log('GeneralChild: ', uniqueId)

  return <p>General Child</p>
}
