import React from "react";
import laptopBoy from "@/public/assets/boy-on-laptop.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="flex justify-center mt-20">
        <div className="w-[90%] lg:w-[85%] font-semibold  flex justify-between items-center flex-col sm:flex-row gap-10">
          <div className="min-w-[300px]">
            <h2 className="text-primary-color text-[1rem] py-5">
              Online training
            </h2>
            <h3 className="text-3xl md:text-4xl  text-big-text-color font-bold leading-12 pb-4">
              Sell On The Web <br />
              Like A Pro
            </h3>

            <p className="text-faded-secondary-text-color pb-5 text-sm">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <button className="w-32 h-9 rounded-md bg-primary-color text-white text-xs">
              Get Quote Now
            </button>
            <button className="w-32 h-9 rounded-md border-primary-color border-[1.4px] text-xs text-primary-color ml-3">
              Learn More
            </button>
          </div>

          <div className=" max-w-[350px] md:max-w-[450px]">
            <Image
              src={laptopBoy}
              alt="boy on a laptop"
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
