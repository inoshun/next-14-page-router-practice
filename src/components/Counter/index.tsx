import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  console.log('Counter: ', count)

  return (
    <div>
      <button
        type='button'
        onClick={() => setCount((prevCount) => prevCount + 1)}
        style={{
          marginBottom: '5px',
        }}
      >
        Increment
      </button>
      <p>count: {count}</p>
    </div>
  )
}
