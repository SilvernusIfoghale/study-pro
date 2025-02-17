import React from "react";
import Image, { StaticImageData } from "next/image";
import iconStar from "@/public/assets/icon-star1.png";
import iconStar0 from "@/public/assets/icon-star0.png";

type ReviewCardProps = {
  img: StaticImageData;
};

export default function ReviewCard({ img }: ReviewCardProps) {
  return (
    <div className="min-w-30 h-80 bg-white ">
      <div className="flex flex-col h-full justify-center items-center ">
        <div className="flex items-center gap-1">
          <Image src={iconStar} alt="star" />
          <Image src={iconStar} alt="star" />
          <Image src={iconStar} alt="star" />
          <Image src={iconStar} alt="star" />
          <Image src={iconStar0} alt="star" />
        </div>
        <p className="text-xs py-5 leading-5 text-center text-faded-secondary-text-color w-[8.9rem] xl:w-52">
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </p>

        <div className="flex items-center gap-4">
          <div>
            <Image src={img} alt="regina" />
          </div>
          <div>
            <h4 className="text-primary-color text-xs">Regina Miles</h4>
            <p className="text-[0.65rem]">Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
