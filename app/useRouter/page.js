"use client";

import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log("🚀 ~ file: page.js:7 ~ Page ~ pathname", pathname);
  console.log("🚀 ~ file: page.js:9 ~ Page ~ searchParams", searchParams);

  return (
    <div>
      <p>from useRouter</p>
    </div>
  );
}
