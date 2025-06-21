"use client";

import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const buttonRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<number>(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    console.log("Component rerenders");
    console.log("countrefVal:", countRef.current);
  });
  return (
    <div className="flex flex-col items-center gap-8 py-10">
      <h1 className="text-2xl font-bold">useRef useCases</h1>
      <div className="flex gap-3 ">
        <label>Focus input onload</label>
        <input className="border border-slate-700 rounded-md" ref={inputRef} />
      </div>
      <div className="flex gap-3 ">
        <div
          onClick={() => buttonRef.current?.click()}
          className=" p-1.5 text-center bg-red-200 cursor-pointer active:scale-95 transition-all rounded-md max-w-xs"
        >
          trigger input file
        </div>
        <input ref={buttonRef} type="file"></input>
      </div>
      <div className="flex gap-3 ">
        <div
          onClick={() => setCount((prev) => prev + 1)}
          className=" p-1.5 text-center bg-red-200 cursor-pointer active:scale-95 transition-all rounded-md max-w-xs"
        >
          Add Count{" "}
        </div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {countRef.current}</p>{" "}
      </div>
    </div>
  );
};

export default Page;
