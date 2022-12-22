import Image from "next/image";
import latte from "../../img/latte.jpg";

export default function Page() {
  return (
    <div>
      <p>second</p>
      <Image src={latte} alt="latte" width={300} height={300} />
    </div>
  );
}
