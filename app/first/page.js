"use client";

import Link from "next/link";

async function getData() {
  const res = await fetch("https://catfact.ninja/fact");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <div>first</div>
      <p>{data?.fact}</p>
    </>
  );
}
