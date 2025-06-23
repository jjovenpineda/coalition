"use client";
import { useEffect } from "react";
import React, { useState } from "react";
export default function Page() {
  const [tick, setTick] = useState(0);
  let num = 10;
  let person = { name: "joven" };
  handleClick(num, person);

  function handleClick(numz: any, personz: any) {
    numz = num + 1;
    personz.name = "ventot";
    console.log("numz :", numz);
    console.log("personz :", personz.name);
  }

  console.log("person :", person.name);
  return (
    <>
      {num} <br />
      {person.name}
      <br />
      <button
        className="active:scale-95 bg-red-200 rounded-md p-1 px-3"
        onClick={() => {
          handleClick(num, person);
          setTick(tick + 1);
        }}
      >
        test
      </button>
    </>
  );
}
