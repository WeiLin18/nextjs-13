"use client";

import { useRouter } from "next/navigation";
import leaf from "../../img/leaf.jpg";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <p>client component</p>
      <Image src={leaf} alt="leaf" width={300} height={800} />
      <button type="button" onClick={() => router.push("/useRouter")}>
        go to page by router push
      </button>
    </div>
  );
}
