// ParentComponent.tsx
import React, { useState, useCallback } from "react";
import ChildComponent from "./childComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  let num = 0; //primitive
  const person = { name: "" }; //nonprimitive
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("Button clicked");
  }, []);
  const handclick = () => {};
  {
    /* This handleClick() is memoized and being passed as a prop the the child. without usecallback. React.memo will treat this as  new function on every render, and that will cause the child te re-rendered */
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      {/* Passing memoized function to child */}
      <ChildComponent onClick={() => handleClick()} />
    </div>
  );
}

// onClick={handleClick} || ❌ No  ||Same function reference
// onClick={() => handleClick()} || ✅ Yes || New function created every render

//useCallback memoizes a function, meaning:
//	•	It returns the same function instance unless its dependencies change.
//	•	This is useful to prevent unnecessary re-renders, especially when passing functions to child components.
