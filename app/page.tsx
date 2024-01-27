import Image from "next/image";

import Orders from "@/components/Analytics/Orders";
import Platform from "@/components/Analytics/Platform";
import Sales from "@/components/Analytics/Sales";
import Summary from "@/components/Analytics/Summary";
import Rotate3d from "@/public/assets/icons/3dRotate";
import BoxTick from "@/public/assets/icons/BoxTick";
import Coin from "@/public/assets/icons/Coin";
import GreenReadings from "@/public/assets/icons/GreenReadings";
import RedReadings from "@/public/assets/icons/RedReadings";
import ShoppingCart from "@/public/assets/icons/ShoppingCart";
import SpiralGreenArrow from "@/public/assets/icons/SpiralGreenArrow";
import SpiralRedArrow from "@/public/assets/icons/SpiralRedArrow";

export default function Home() {
  return (
    <main className="p-5 grid grid-cols-12 gap-5">
      <Sales />
      <div className="col-span-5">
        <div className="grid grid-cols-8 gap-4">
          <Summary
            title="Total Order"
            icon={<BoxTick />}
            readings={<GreenReadings />}
            value="350"
            secondIcon={<SpiralGreenArrow />}
            profit={true}
          />
          <Summary
            title="Total Refund"
            icon={<Rotate3d />}
            readings={<RedReadings />}
            value="270"
            secondIcon={<SpiralRedArrow />}
            profit={false}
          />
          <Summary
            title="Average Sales"
            icon={<ShoppingCart />}
            readings={<RedReadings />}
            value="1567"
            secondIcon={<SpiralRedArrow />}
            profit={false}
          />
          <Summary
            title="Total Income"
            icon={<Coin />}
            readings={<GreenReadings />}
            value="$350.000"
            secondIcon={<SpiralGreenArrow />}
            profit={true}
          />
        </div>
      </div>
      <Orders />
      <Platform />
    </main>
  );
}
