"use client";

import { useRouter } from "next/navigation";
import leaf from "../../img/leaf.jpg";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  console.log("🚀 ~ file: page.js:9 ~ Page ~ router", router);

  return (
    <div>
      <p>client component</p>
      <div>
        <button type="button" onClick={() => router.push("/useRouter")}>
          go to page by router push
        </button>
      </div>
      <Image src={leaf} alt="leaf" width={300} height={400} />
    </div>
  );
}
