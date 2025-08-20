import { memo, useCallback, useState } from "react";

const Button = memo(({onClick, children})=> {
  console.log("Rendering button : ",children);
  return <button onClick={onClick}>{children}</button>;
})

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        console.log("icrement inside");
        setCount(count+1)   
    }, [])

    const decrement = useCallback(() => {
        console.log("decrement inside");
        setCount(count - 1);
    }, []);


  return (
    <div>
        <h1>{count}</h1>
        <div>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    </div>
  )
}


export default UseCallback
