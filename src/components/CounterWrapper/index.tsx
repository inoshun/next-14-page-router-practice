import { ReactNode, useState } from 'react'

type Props = {
  withTitle: boolean
  children: ReactNode
}

export default function CounterWrapper({ withTitle, children }: Props) {
  const [withDesc, setWithDesc] = useState(true)
  console.log('CounterWrapper, children: ', children)

  return (
    <div>
      {withTitle && (
        <h2
          style={{
            marginBottom: '5px',
          }}
        >
          Counter
        </h2>
      )}
      {withDesc ? (
        <>
          <p>This is a counter.</p>
          {children}
          {children}
        </>
      ) : (
        <>
          {children}
          {children}
        </>
      )}
      <button type='button' onClick={() => setWithDesc((prevState) => !prevState)}>
        Toggle desc.
      </button>
    </div>
  )
}
