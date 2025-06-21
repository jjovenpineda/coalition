import React from "react";

export const generateStaticParams = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/")
  ).json();

  return res.map((item: { id: string }) => ({ id: item.id.toString() }));
};

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
  ).json();

  return <div>{data.body}</div>;
}
