import React from "react";
import { getUser, updateUser } from "../../data-access/shopper";
import updateNameFunction from "./action";
//https://www.youtube.com/watch?v=LkDelp5WWYU
export default async function ShoppersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div>
      <div className="text-2xl">user: {user.name}</div>

      <form action={updateNameFunction.bind(null, user.id)}>
        <input
          type="text"
          name="name"
          className="text-black border border-gray-500"
        />

        <button type="submit" className="bg-red-200">
          Submit
        </button>
      </form>
    </div>
  );
}
