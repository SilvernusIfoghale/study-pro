"use client";
import Link from "next/link";
import React, { useState } from "react";
import vector from "@/public/assets/Vector.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="flex justify-center py-3">
        <div className="flex items-center gap-3 justify-between w-[85%] font-semibold">
          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-3">
              {!toggle && (
                <FaBars
                  className="sm:hidden cursor-pointer w-5 z-10"
                  onClick={() => setToggle(true)}
                />
              )}

              {toggle && (
                <IoClose
                  className="text-[1.3rem] cursor-pointer w-5 z-10"
                  onClick={() => setToggle(false)}
                />
              )}

              <h2 className="font-bold text-lg ">BrandName</h2>
            </div>
            <div
              className={`${
                toggle
                  ? "absolute flex-col gap-20 left-0 top-0  min-h-[100vh] bg-slate-50 w-36 pt-14 pl-10 "
                  : "hidden"
              }  gap-4 text-xs text-faded-secondary-text-color  sm:flex`}
            >
              <Link
                href="/"
                className="hover:text-primary-color pb-3 sm:pb-0 block sm:inline"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-primary-color  pb-3 sm:pb-0 block sm:inline"
              >
                Product
              </Link>
              <Link
                href="/"
                className="hover:text-primary-color  pb-3 sm:pb-0 block sm:inline"
              >
                Pricing
              </Link>
              <Link
                href="/"
                className="hover:text-primary-color  pb-3 sm:pb-0 block sm:inline"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-10 text-xs">
            <Link href="/" className="text-primary-color">
              Login
            </Link>
            <button className="bg-primary-color w-24 h-8  text-white rounded-md flex justify-center items-center gap-2 text-[0.65rem] cursor-pointer">
              <span> JOIN US</span>
              <span className="">
                <Image src={vector} alt="right arrow" className="w-2.5" />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
