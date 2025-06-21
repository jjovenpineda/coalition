import React from "react";

export default async function ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const slug = await params;
  return <>{slug && <div>Not found!</div>}</>;
}
