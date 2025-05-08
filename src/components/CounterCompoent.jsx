import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }