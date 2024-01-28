"use client"

import { useState } from "react";

import Logo from "@/public/assets/icons/Logo";
import ArrowRight from "@/public/assets/icons/ArrowRight";
import Category from "@/public/assets/icons/Category";
import Box from "@/public/assets/icons/Box";
import Brightness from "@/public/assets/icons/Brightness";
import DiscountShape from "@/public/assets/icons/DiscountShape";
import InfoCircle from "@/public/assets/icons/InfoCircle";
import Logout from "@/public/assets/icons/Logout";
import Moon from "@/public/assets/icons/Moon";
import Profile2User from "@/public/assets/icons/Profile2User";
import Settings from "@/public/assets/icons/Settings";
import TrendUp from "@/public/assets/icons/TrendUp";

const SideNav = () => {
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);

  const toggleLightTheme = () => {
    if(light) {
        null
    } else {
        setLight(true);
        setDark(false)
    }
  }

  const toggleDarkTheme = () => {
    if(dark) {
        null
    } else {
        setDark(true);
        setLight(false)
    }
  }

  return (
    <div className="flex py-5 px-0 flex-col items-center gap-[0.625rem] border border-solid border-[#ebecf2] bg-[#f7f8fa] h-screen w-[5%] fixed">
      <section>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col items-center self-stretch gap-4 mt-5">
          <div>
            <Category />
          </div>
          <div>
            <TrendUp />
          </div>
          <div>
            <Profile2User />
          </div>
          <div>
            <Box />
          </div>
          <div>
            <DiscountShape />
          </div>
          <div>
            <InfoCircle />
          </div>
          <div className="mt-4 flex flex-col items-center gap-2 p-2 bg-white rounded-[6.25rem]">
            <div className="bg-analytics-green flex flex-col justify-center items-center gap-[0.58594rem] w-[1.875rem] py-[0.141019rem] px-[0.46875rem] rounded-[5.875rem]">
              <Brightness />
            </div>
            <div>
              <Moon />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[12.62rem] flex flex-col items-center gap-4 w-20">
        <div>
          <ArrowRight />
        </div>
        <div>
          <Settings />
        </div>
        <div>
          <Logout />
        </div>
      </section>
    </div>
  );
};

export default SideNav;
