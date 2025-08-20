// import React, { memo } from 'react'
import { useRef, memo } from 'react'

const MemoComponent = () => {
    const count=useRef(0)
    console.log(count);
    
  return (
    <div>
      <p>nothing to change</p>
      <span>{count.current++} time(s)</span>
    </div>
  )
}

export default memo(MemoComponent)
