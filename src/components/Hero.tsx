import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="grid lg:grid-cols-2 gap-[2vw] lg:min-h-[70vh] xl:-mr-[12vw] lg:-mr-[8vw]"
    >
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-orange font-regular text-3xl">
          Environment/Tourism Planning, Development Projects and Technical
          Writing Specialists
        </h1>
        <p>
          Looking for an expert to handle your project? Talk to us before
          talking to somebody else, because we could as well be the best. From
          management plans for conservancies or national parks, tourism
          development projects to technical writing for technical oriented
          institutions.
        </p>
        <Link href="#">
          <button className="my-2 px-4 py-1 rounded-full border-[1px] border-orange bg-orange hover:bg-transparent text-white hover:text-orange transition-all ease-in-out duration-300">
            Reach out
          </button>
        </Link>
      </div>
      <div className="flex flex-row gap-3 justify-between overflow-hidden w-full">
        <Image
          src="/c.jpg"
          alt=""
          height={2000}
          width={2000}
          quality={100}
          className="h-[30vh] w-full sm:object-center"
        ></Image>
        <Image
          src="/e.jpg"
          alt=""
          height={2000}
          width={2000}
          quality={100}
          className="hidden md:block"
        ></Image>
        <Image
          src="/d.jpg"
          alt=""
          height={2000}
          width={2000}
          quality={100}
          className="hidden md:block"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
