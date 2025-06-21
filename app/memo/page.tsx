"use client";
import React, { useState, useMemo } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Simulate expensive calculation
  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 5e8; i++) {} // delay
    return num * 2;
  };
  /*   const testMemoize = expensiveCalculation(0);
   */ // useMemo caches the result unless `count` changes
  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg">useMemo Example</h2>
      <div className="mt-4 space-y-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          className="border p-2"
        />
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment Count
        </button>
        <div>Count: {count}</div>
        {/* {testMemoize} */}
        <div>Expensive Calculated Value: {calculatedValue}</div>
      </div>
    </div>
  );
}
