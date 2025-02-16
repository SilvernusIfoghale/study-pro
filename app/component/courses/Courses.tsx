import React from "react";
import CoursesCard from "./CoursesCard";
import ladyImage1 from "@/public/assets/product-cover-99.png";
import ladyImage2 from "@/public/assets/product-cover-97.png";
import ladyImage3 from "@/public/assets/product-cover-98.png";
export default function Courses() {
  return (
    <>
      <section className="flex justify-center my-20 font-semibold">
        <div className="w-[80%]">
          <div className="  mb-5">
            <h2 className="text-primary-color text-[1rem]  py-5">
              Practice Advice
            </h2>
            <h3 className="text-3xl md:text-4xl  text-big-text-color font-bold leading-12 pb-4">
              Watch our Courses
            </h3>

            <p className="text-faded-secondary-text-color pb-5 text-sm leading-6">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid gap-[5%] md:grid-cols-2 lg:grid-cols-3 justify-center ">
            {/* card  */}
            <CoursesCard img1={ladyImage1} />
            <CoursesCard img1={ladyImage2} />
            <CoursesCard img1={ladyImage3} />

            {/* card  */}
          </div>
        </div>
      </section>
    </>
  );
}
