import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      className="grid grid-cols-2 gap-[2vw] min-h-[70vh]"
    >
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-orange font-regular text-2xl">About Us</h3>
        <p>
          Frontline Consulting is a Kenyan consultancy firm offering services
          and training in various aspects of management and the environment. Our
          projects range from ecosystem management, project development,
          developing management, and business plans to marketing and writing.
        </p>
      </div>
      <div className="">
        <Image
          src="/Service.jpg"
          alt=""
          height={2000}
          width={2000}
          quality={100}
          className="h-auto w-full"
        ></Image>
      </div>
    </div>
  );
};

export default About;
