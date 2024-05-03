"use client";

import { useState, FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import Search from "@/public/assets/icons/search";
import Calendar from "@/public/assets/icons/calendar";
import Bell from "@/public/assets/icons/bell";
import ArrowDown2 from "@/public/assets/icons/ArrowDown2";
import Logo from "@/public/assets/icons/Logo";

interface HeaderProps {
  toggleSideBar: boolean;
  setToggleSideBar: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ toggleSideBar, setToggleSideBar }) => {
  return (
    <div className="px-5 py-[1.12rem] border border-solid border-[#e5eaef] bg-[#fafafa] flex justify-between items-center gap-[1.125rem]">
      <section className="flex justify-between items-center w-[60%]">
        {toggleSideBar ? (
          <button onClick={() => setToggleSideBar(!toggleSideBar)}>
            <Logo />
          </button>
        ) : (
          <h2 className="text-analytics-dark text-xl font-semibold">
            Dashboard
          </h2>
        )}
        <div className="flex justify-between border border-solid border-analytics-grey-1 rounded-[1.5rem] h-12 bg-white pl-4 gap-2 items-center">
          <div>
            <Search />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="outline-none rounded-r-[1.5rem] h-10 border-analytics-grey-1 pr-1"
          />
        </div>
      </section>
      <section className="flex items-center justify-between gap-5 w-[40%]">
        <div className="flex items-center gap-5 justify-end">
          <div className="flex justify-center items-center gap-2">
            <div>
              <Calendar />
            </div>
            <div className="text-sm text-analytics-dark font-medium">
              November 15, 2023
            </div>
          </div>
          <div className="flex justify-center items-center gap-[0.375rem] h-10 w-10 p-[0.6875rem] border-[0.0480625rem] border-solid border-analytics-grey-1 rounded-[1.6875rem]">
            <Bell />
          </div>
        </div>
        {/* <div> */}
        <div className="flex items-center justify-center gap-3 py-1.5 px-2 border border-solid border-analytics-grey-1 rounded-[1.75rem]">
          <div className="rounded-[1.1875rem] overflow-hidden relative w-[2.1875rem] h-[2.1875rem]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/5c6e/40a4/337c46cfe4ecd1dc345b49beaa4279e3?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9VFkPdOEriOAxMveQNF8anFpZ4O4KjeEz~vs9hRZvQEFIo3uRzo2eI7aHPQiFQ5rBSo7H9ChMaCIeGcI1VDe~AsDo4pkKXslQ4a0dTJVmFbKPvHg8jFvbCzmqkgvrmVAuMRYez9hsqV3YKtRj0Njt~ccl5wu0ofNaIs5ilTROpPY6R6T3PuiAS6oJ7JVcOw065yL5mSLjSPR-GRfnFM61R~9RkGiuc5QJ0FDRygdzvUMWoeAA8fRyI2hsXHtPfDqEDl3iaBZS7lyQgnt-G50Ndwhqe7Vky4qHv2dGjbpqpIrIhVM1NDyMkHtgeeBE0RDio9HINzB7-IYAMMOiSXFw"
              alt="profile image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="text-analytics-dark">Justin Bergson</p>
            <p className="text-sm text-[#787486]">Justin@gmail.com</p>
          </div>
          <div>
            <ArrowDown2 />
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Header;
