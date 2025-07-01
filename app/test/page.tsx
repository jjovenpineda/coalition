"use client";
import { useEffect } from "react";
import React, { useState } from "react";
export default function Page() {
  const [tick, setTick] = useState(0);

  let num = 10; // primitive values
  let person = { name: "joven" }; //non primitive

  handleClick(num, person);

  function handleClick(numz: any, personz: any) {
    numz = num + 1;
    personz.name = "ventot";
    /*  console.log("NUMZ :", numz);
    console.log("PERSONZ :", personz.name); */
  }
  /* console.log("num :", num);

  console.log("person :", person.name); */

  console.log(" RERENDER:");

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
