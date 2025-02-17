import React from "react";
import ReviewCard from "./ReviewCard";
import profile1 from "@/public/assets/circle1.png";
import profile2 from "@/public/assets/circle2.png";
import profile3 from "@/public/assets/circle.png";

export default function Reviews() {
  return (
    <>
      <div className="bg-faded-secondary-color-1 h-[1600px] sm:h-[1100px] md:h-[800px] font-semibold flex justify-center mt-32">
        <div className="w-[80%]">
          <div className="pt-10 mb-14">
            <h2 className="text-primary-color text-[1rem] mt-20 py-5 ">
              Practice Advice
            </h2>
            <h3 className="text-3xl md:text-4xl  text-big-text-color font-bold leading-12 pb-4">
              Each and every client is important
            </h3>

            <p className="text-faded-secondary-text-color pb-5 text-sm leading-6">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-[3%] ">
            <ReviewCard img={profile1} />
            <ReviewCard img={profile2} />
            <ReviewCard img={profile3} />
          </div>
        </div>
      </div>
    </>
  );
}
