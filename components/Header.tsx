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
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="px-5 py-[1.12rem] border border-solid border-[#e5eaef] bg-[#fafafa] flex justify-between items-center gap-[1.125rem]">
      <section
        className={`flex justify-between items-center md:w-[60%] ${
          showSearchBar ? "w-[50%]" : "w-[41%]"
        }`}
      >
        {toggleSideBar ? (
          <button onClick={() => setToggleSideBar(!toggleSideBar)}>
            <Logo />
          </button>
        ) : (
          <h2 className="text-analytics-dark text-xl font-semibold md:block hidden">
            Dashboard
          </h2>
        )}

        <div
          className={`flex justify-between ${
            showSearchBar
              ? " border border-solid border-analytics-grey-1 rounded-[1.5rem] h-12 pl-4 w-[10rem] "
              : " "
          } gap-2 items-center`}
        >
          <button
            className="md:hidden"
            onClick={() => setShowSearchBar(!showSearchBar)}
          >
            <Search />
          </button>
          <input
            type="search"
            placeholder="Search..."
            className={`outline-none rounded-r-[1.5rem] h-10 border-analytics-grey-1 pr-1 w-[6.875rem] ${
              showSearchBar ? " block" : " hidden"
            }`}
          />
        </div>

        <div className="md:flex hidden justify-between border border-solid border-analytics-grey-1 rounded-[1.5rem] h-12 bg-white pl-4 gap-2 items-center">
          <div className="">
            <Search />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="outline-none rounded-r-[1.5rem] h-10 border-analytics-grey-1 pr-1
            "
          />
        </div>
      </section>
      <section
        className={`flex items-center ${
          showSearchBar ? " justify-end w-[30%] " : " justify-between w-[50%] "
        } gap-5 md:w-[40%]`}
      >
        <div
          className={`${
            showSearchBar ? "hidden " : "flex "
          } items-center gap-5 justify-end`}
        >
          <div className="flex justify-center items-center gap-2">
            <div>
              <Calendar />
            </div>
            <div className="text-sm text-analytics-dark font-medium md:block hidden">
              November 15, 2023
            </div>
          </div>
          <div className="flex justify-center items-center gap-[0.375rem] h-10 w-10 p-[0.6875rem] border-[0.0480625rem] border-solid border-analytics-grey-1 rounded-[1.6875rem]">
            <Bell />
          </div>
        </div>
        {/* <div> */}
        <button
          className="flex items-center justify-center gap-3 py-1.5 px-2 border border-solid border-analytics-grey-1 rounded-[1.75rem] relative"
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          <div className="rounded-[1.1875rem] overflow-hidden relative w-[2.1875rem] h-[2.1875rem]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/5c6e/40a4/337c46cfe4ecd1dc345b49beaa4279e3?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9VFkPdOEriOAxMveQNF8anFpZ4O4KjeEz~vs9hRZvQEFIo3uRzo2eI7aHPQiFQ5rBSo7H9ChMaCIeGcI1VDe~AsDo4pkKXslQ4a0dTJVmFbKPvHg8jFvbCzmqkgvrmVAuMRYez9hsqV3YKtRj0Njt~ccl5wu0ofNaIs5ilTROpPY6R6T3PuiAS6oJ7JVcOw065yL5mSLjSPR-GRfnFM61R~9RkGiuc5QJ0FDRygdzvUMWoeAA8fRyI2hsXHtPfDqEDl3iaBZS7lyQgnt-G50Ndwhqe7Vky4qHv2dGjbpqpIrIhVM1NDyMkHtgeeBE0RDio9HINzB7-IYAMMOiSXFw"
              alt="profile image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-analytics-dark">Justin Bergson</p>
            <p className="text-sm text-[#787486]">Justin@gmail.com</p>
          </div>
          <div>
            <ArrowDown2 />
          </div>
          <div
            className={`bg-white rounded-[0.5rem] absolute px-4 py-2 shadow-md md:top-12 md:left-28 top-14 -left-14 z-50 ${
              showProfileDropdown ? " " : " hidden"
            }`}
          >
            <ul className="">
              <li className="text-analytics-dark md:hidden">Justin Bergson</li>
              <li className="text-sm text-[#787486] md:hidden">
                Justin@gmail.com
              </li>
              <li className="md:mt-0 mt-2">
                <button
                  className="hover:text-red-400 text-analytics-dark"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </button>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Header;
