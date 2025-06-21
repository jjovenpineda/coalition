// ChildComponent.tsx
import React from "react";

type Props = {
  /*   onClick: () => void;
   */ name: string;
};

export default function ChildComponent({ name }: Props) {
  console.log("ChildComponent rendered");
  return (
    <div>
      {name}
      {/*       <button onClick={onClick}>Click me</button>
       */}{" "}
    </div>
  );
}

//React.memo -- “Hey React, if the props of this component are the same as last time, don’t bother re-rendering it — just reuse the last result.”

//	✅ When to Use React.memo
// For functional components that:
// •	Receive props
// •	Are expensive to render
// •	Don’t need to update unless props change
