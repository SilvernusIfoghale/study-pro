import Link from "next/link";
import React from "react";
import vector from "@/public/assets/Vector.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center py-3">
        <div className="flex items-center gap-3 justify-between w-[85%] font-semibold">
          <div className="flex gap-10 items-center">
            <div className="">
              <h2 className="font-bold text-lg">BrandName</h2>
            </div>
            <div className="flex gap-4 text-xs text-faded-secondary-text-color">
              <Link href="/" className="hover:text-primary-color">
                Home
              </Link>
              <Link href="/" className="hover:text-primary-color">
                Product
              </Link>
              <Link href="/" className="hover:text-primary-color">
                Pricing
              </Link>
              <Link href="/" className="hover:text-primary-color">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-10 text-xs">
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
