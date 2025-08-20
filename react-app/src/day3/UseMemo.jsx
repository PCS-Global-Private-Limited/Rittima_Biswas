import { useMemo, useState } from "react"

const ExpensiveComputation = () => {
    const sum =() => {
        console.log('Computing...')
        let i=0;
        for (i = 0; i <= 1000000000; i++) {i=i+1} 
        return i;
    }
    // const result =  sum()
    const result = useMemo(() => sum(), []);
    return <p>sum : {result}</p>;
}

const UseMemo = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <ExpensiveComputation />
      <button onClick={() => setCount(count + 1)}>
        re-render
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default UseMemo
