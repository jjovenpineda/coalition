"use client";

import { useAuthContext } from "@/providers/authProvider";
import React, { useContext } from "react";

export default function page() {
  const { data, setData } = useAuthContext();
  return (
    <div>
      {data.username}
      {data.password}
      <button
        className="bg-red-200"
        onClick={() => setData({ username: "test", password: "hehe" })}
      >
        test
      </button>
    </div>
  );
}
