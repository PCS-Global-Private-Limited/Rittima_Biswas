import React, { useState } from 'react'
import MemoComponent from './MemoComponent'

const ReactMemo = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <MemoComponent />
    </div>
  )
}

export default ReactMemo
