import Image from "next/image";

import Orders from "@/components/Analytics/Orders";
import Platform from "@/components/Analytics/Platform";
import Sales from "@/components/Analytics/Sales";

export default function Home() {
  return (
    <main className="p-5 grid grid-cols-12 gap-5">
      <Sales/>
      <div className="col-span-5"></div>
      <Orders/>
      <Platform/>
    </main>
  );
}
