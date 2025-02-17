import Image from "next/image";
import React from "react";
import facebook from "@/public/assets/ant-design_facebook-filled.png";
import instagram from "@/public/assets/ant-design_instagram-outlined.png";
import twitter from "@/public/assets/ant-design_twitter-outlined.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="my-10 flex justify-center font-semibold mt-32">
        <div className="w-[80%] grid  sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          <div className="">
            <h3 className="font-bold text-lg">Get in Touch</h3>
            <p className="py-5 text-xs text-faded-secondary-text-color">
              the quick fox jumps over the lazy dog
            </p>
            <div className="flex gap-3 w-4">
              <Image
                src={facebook}
                alt="facebook"
                className="w-full object-cover"
              />
              <Image
                src={instagram}
                alt="facebook"
                className="w-full object-cover"
              />
              <Image
                src={twitter}
                alt="facebook"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="pb-3 font-bold text-lg">Company info</h3>
            <div className="text-xs text-faded-secondary-text-color ">
              <Link href={"/"} className="block py-1">
                About Us
              </Link>
              <Link href={"/"} className="block py-1">
                Carrier
              </Link>
              <Link href={"/"} className="block py-1">
                We are hiring
              </Link>
              <Link href={"/"} className="block py-1">
                Blog
              </Link>
            </div>
          </div>
          <div>
            <h3 className="pb-3 font-bold text-lg">Features</h3>
            <div className="text-xs text-faded-secondary-text-color ">
              <Link href={"/"} className="block py-1">
                Business Marketing
              </Link>
              <Link href={"/"} className="block py-1">
                User Analytic
              </Link>
              <Link href={"/"} className="block py-1">
                Live Chat
              </Link>
              <Link href={"/"} className="block py-1">
                Unlimited Support
              </Link>
            </div>
          </div>
          <div>
            <h3 className="pb-3 font-bold text-lg">Resources</h3>
            <div className="text-xs text-faded-secondary-text-color ">
              <Link href={"/"} className="block py-1">
                IOS & Android
              </Link>
              <Link href={"/"} className="block py-1">
                Watch a Demo
              </Link>
              <Link href={"/"} className="block py-1">
                Customers
              </Link>
              <Link href={"/"} className="block py-1">
                API
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-light-gray py-5 font-semibold text-faded-secondary-text-color text-xs text-center">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </>
  );
}
