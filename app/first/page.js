import cocoa from "../../img/cocoa.jpg";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://catfact.ninja/fact");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h2>first</h2>
      <p>{data.fact}</p>
      <Image src={cocoa} alt="cocoa" width={300} height={300} />
    </div>
  );
}
