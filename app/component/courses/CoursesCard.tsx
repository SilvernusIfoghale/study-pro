import Image, { StaticImageData } from "next/image";
import React from "react";
import iconCart from "@/public/assets/icon-cart.png";
import iconView from "@/public/assets/icon-view.png";
import iconHeart from "@/public/assets/icon-heart.png";
import iconStar from "@/public/assets/icon emojione-star.png";
import iconDownload from "@/public/assets/icon-dwonload.png";
import iconCalender from "@/public/assets/icon akar-icons-calendar.png";
import iconLesson from "@/public/assets/icon-lesson.png";
import iconProgress from "@/public/assets/icon-progress.png";
import iconRightArrow from "@/public/assets/icon-right-arrow-bold.png";

type CoursesCardProps = {
  img1: StaticImageData;
};

export default function CoursesCard({ img1 }: CoursesCardProps) {
  return (
    <>
      <div>
        <div className=" max-w-80 relative">
          <span className="absolute block w-10 text-white text-[0.65rem] m-4 rounded-xs text-center bg-danger-color">
            Sale
          </span>
          <Image
            src={img1}
            alt="lady on glasses and smiling"
            className="w-full object-contain"
          />
          <div className="absolute bottom-5  w-full ">
            <div className="flex justify-center gap-2 ">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image src={iconHeart} alt="heart icon" width={15} />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image src={iconCart} alt="heart icon" width={15} />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image src={iconView} alt="heart icon" width={15} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 max-w-80">
          <div className="flex justify-between items-center">
            <h3 className=" text-primary-color">English Department</h3>
            <div className="w-14 h-7 bg-dark-background-color rounded-4xl text-white text-sm font-normal flex items-center justify-around">
              <Image src={iconStar} alt="star " />
              <p>4.9</p>
            </div>
          </div>
          <div className="mt-4 text-faded-secondary-text-color">
            <h3 className="text-lg text-black">Graphic Design</h3>
            <p className="text-sm  mb-3">
              We focus on ergonomics and meeting you where you work. {`It's `}
              only a keystroke away.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Image src={iconDownload} alt="download icon" />
              <p className="font-bold ">15 Sales</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-muted-color">$16.48</p>
              <p className="font-bold text-secondary-color-1 ">$6.48</p>
            </div>
            <div className="my-6 flex justify-between items-center">
              <div className="flex items-center text-xs gap-2">
                <Image src={iconCalender} alt="clock" />
                <p>22hr 30min</p>
              </div>
              <div className="flex items-center text-xs gap-2">
                <Image src={iconLesson} alt="clock" />
                <p>64 Lessons</p>
              </div>
              <div className="flex items-center text-xs gap-2">
                <Image src={iconProgress} alt="clock" />
                <p>Progress</p>
              </div>
            </div>
            <button className="text-primary-color flex border-[1.5px] py-2 px-4 rounded-4xl border-primary-color items-center gap-3">
              Learn More <Image src={iconRightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
