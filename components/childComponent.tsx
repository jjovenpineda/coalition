// ChildComponent.tsx
import React from "react";

type Props = {
  onClick: () => void;
};

export default React.memo(function ChildComponent({ onClick }: Props) {
  console.log("ChildComponent rendered");
  return (
    <div>
      <button onClick={onClick}>Click me</button>{" "}
    </div>
  );
});

//React.memo -- “Hey React, if the props of this component are the same as last time, don’t bother re-rendering it — just reuse the last result.”

//	✅ When to Use React.memo
// For functional components that:
// •	Receive props
// •	Are expensive to render
// •	Don’t need to update unless props change

//<Child name="Joven" />
//If name stays "Joven" across renders, the child won’t re-render. If the parent renders again but the name prop hasn’t changed — React skips rendering Child.

//Important Note:
// •	React.memo only does a shallow comparison of props.
// •	If you pass objects, arrays, or functions as props — and they’re recreated every render — it may still trigger re-renders unless you also memoize them (e.g., with useCallback, useMemo).
