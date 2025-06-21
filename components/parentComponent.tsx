// ParentComponent.tsx
import React, { useState, useCallback } from "react";
import ChildComponent from "./childComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  /* const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("Button clicked");
  }, []);  */ // 🔁 This function is memoized and won't re-create unless dependencies change

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      {/* Passing memoized function to child */}
      <ChildComponent name={"joven"} />
    </div>
  );
}
