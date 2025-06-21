import React from "react";
// This function generates static paths for all posts during build time.
export const generateStaticParams = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/")
  ).json();
  // Return an array of route params for each post
  return res.map((item: { id: string }) => ({ id: item.id.toString() }));
};

// Server Component for dynamic route rendering a single post by ID (App Router SSR)
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      next: { revalidate: 60 }, // this applies ISR to this specific request
    })
  ).json();

  return <div>{data.body}</div>;
}

export const revalidate = 60; // this applies ISR to the whole page.
