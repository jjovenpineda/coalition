"use client";

import React, { useCallback, useEffect } from "react";
export default function page() {
  const [value, setValue] = React.useState<string>("");
  const [debouncedValue, setDebouncedValue] = React.useState<string>("");
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>
      <label htmlFor="textInput">Write here:</label>
      <input
        id="textInput"
        value={value}
        className="border rounded-md"
        onChange={(e: any) => setValue(e.target.value)}
      />

      <div className=""> Value:{value}</div>
      <div> Debounce:{debouncedValue}</div>
    </div>
  );
}
