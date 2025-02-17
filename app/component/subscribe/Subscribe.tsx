import React from "react";

export default function Subscribe() {
  return (
    <>
      <section
        className="my-5 flex justify-center font-semibold mt-28"
        id="subscribe"
      >
        <div className="w-[80%] sm:w-[60%] md:w-[50%]">
          <div className="text-center">
            <h2 className="text-primary-color text-[1rem]  py-5">
              Practice Advice
            </h2>
            <h3 className="text-3xl md:text-4xl  text-big-text-color font-bold leading-12 pb-4">
              JOIN US
            </h3>

            <p className="text-faded-secondary-text-color pb-5 text-xs leading-6 mb-10">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex border-[1.5px] border-input-color overflow-hidden rounded-md">
            <div className="w-full">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className=" bg-input-color w-full p-3 text-xs outline-none"
              />
            </div>
            <button className="w-32  p-3  bg-primary-color text-white text-xs cursor-pointer ">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
