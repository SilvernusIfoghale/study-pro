import React from "react";
import accessible from "@/public/assets/accessible.png";
import nextArrow from "@/public/assets/icon arrow-next.png";
import Image from "next/image";

export default function Accessible() {
  return (
    <>
      <section className="flex justify-center mt-28 ">
        <div className="w-[80%]  font-semibold  flex justify-between items-center flex-col sm:flex-row gap-10">
          <div className="sm:min-w-[350px]">
            <h2 className=" py-5">
              <span className="block h-1 w-20 bg-danger-color"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl  text-big-text-color font-bold leading-12 pb-4">
              Make online education <br />
              accessible
            </h3>

            <p className="text-faded-secondary-text-color pb-5 text-sm">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics, <br />
              Newtonian mechanics
            </p>

            <button className=" h-9 rounded-md  text-xs text-primary-color flex gap-3 items-center border-b-transparent hover:border-faded-primary-color border-b-2 cursor-pointer hover:scale-105 duration-500">
              Learn More <Image src={nextArrow} width={7} alt="right arrow" />
            </button>
          </div>

          <div className=" max-w-[350px] md:max-w-[450px]">
            <Image
              src={accessible}
              alt="tech mom and son"
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
