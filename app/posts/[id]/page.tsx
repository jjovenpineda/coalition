import React from "react";
/* 
export const generateStaticParams = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/")
  ).json();

  return res.map((post: { id: string }) => ({ id: String(post.id) }));
}; */

/* export default async function Page({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return <div>{id.join("/")}</div>;
} */

export const generateStaticParams = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/")
  ).json();

  return res.map((post: { id: string }) => ({ id: String(post.id) }));
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return <div>{data.title}</div>;
}
