import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsFeature = () => {
  return (
    <>
      <h3 className="text-orange font-regular text-2xl my-4"> Projects Feature</h3>
      <div className="lg:flex lg:flex-row md:grid md:grid-cols-2 flex-col justify-between gap-5 my-4">
        <Link href="#">
          <Image
            src="/Amboseli Eco.jpg"
            alt=""
            height={500}
            width={500}
            className="lg:w-[20vw] md:w-[100%] h-[70vh] object-cover"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/Amboseli.jpg"
            alt=""
            height={500}
            width={500}
            className="lg:w-[20vw] md:w-[100%] h-[70vh] object-cover"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/Maasai Mara.png"
            alt=""
            height={500}
            width={500}
            className="lg:w-[20vw] md:w-[100%] h-[70vh] object-cover"
          ></Image>
        </Link>
        <Link href="#">
          <Image
            src="/Solai.png"
            alt=""
            height={500}
            width={500}
            className="lg:w-[20vw] md:w-[100%] h-[70vh] object-cover"
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default ProjectsFeature;
