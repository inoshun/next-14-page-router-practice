import Head from 'next/head'
import CounterWrapper from '@/components/CounterWrapper'
import Counter from '@/components/Counter'
import { useState } from 'react'

export default function Home() {
  const [withTitle, setWithTitle] = useState(true)
  console.log(Counter)
  console.log(<Counter />)

  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <main
        style={{
          padding: '50px',
        }}
      >
        <button
          type='button'
          onClick={() => setWithTitle((prevState) => !prevState)}
          style={{
            marginBottom: '5px',
          }}
        >
          Toggle title
        </button>
        <CounterWrapper withTitle={withTitle}>
          <Counter />
        </CounterWrapper>
      </main>
    </>
  )
}
