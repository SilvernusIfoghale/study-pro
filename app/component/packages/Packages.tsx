import React from "react";
import AccessIcon from "@/public/assets/lifetime-access-icon.png";
import LibraryIcon from "@/public/assets/books-library-icon.png";
import CoursesIcon from "@/public/assets/training-courses-icon.png";
import PackageCard from "./PackageCard";

export default function Packages() {
  return (
    <>
      <section className="my-5 flex justify-center font-semibold mt-20">
        <div className="w-[80%]">
          <div className="">
            <h2 className="text-primary-color text-[1rem]  py-5">
              Practice Advice
            </h2>
            <h3 className="text-3xl md:text-4xl  text-big-text-color font-bold leading-12 pb-4">
              Packages that are aprodable
            </h3>

            <p className="text-faded-secondary-text-color pb-5 text-sm leading-6">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10  ">
            {/* component */}
            <PackageCard
              icon={AccessIcon}
              heading="Lifetime access"
              text="The gradual  accumulation of  information about"
              color={`bg-faded-secondary-color-2`}
            />
            <PackageCard
              icon={LibraryIcon}
              heading="Books Library"
              text="The gradual  accumulation of  information about"
              color={`bg-faded-secondary-color-1 `}
            />
            <PackageCard
              icon={CoursesIcon}
              heading="Training Courses"
              text="The gradual  accumulation of  information about"
              color={`bg-faded-primary-color `}
            />
          </div>
        </div>
      </section>
    </>
  );
}
