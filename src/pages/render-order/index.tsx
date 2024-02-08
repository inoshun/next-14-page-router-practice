import GeneralWrapper from '@/components/GeneralWrapper'
import GeneralChild from '@/components/GeneralChild'

// 予想
/*
 GeneralWrapper 1
 GeneralWrapper 2
 GeneralChild c
 GeneralWrapper 3
 GeneralChild a
 GeneralChild d
 GeneralWrapper 4
 GeneralChild b
*/

export default function RenderOrder() {
  return (
    <div>
      <GeneralWrapper uniqueId='1'>
        <GeneralWrapper uniqueId='2'>
          <GeneralChild uniqueId='c' />
          <GeneralWrapper uniqueId='3'>
            <GeneralChild uniqueId='a' />
          </GeneralWrapper>
          <GeneralChild uniqueId='d' />
        </GeneralWrapper>
      </GeneralWrapper>
      <GeneralWrapper uniqueId='4'>
        <GeneralChild uniqueId='b' />
      </GeneralWrapper>
    </div>
  )
}
