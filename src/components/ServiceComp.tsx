import Image from "next/image";
import React from "react";
import { ServiceProps } from "@/../types";

const ServiceComp = ({ title, description, list, style, image }: ServiceProps) => {
  return (
    <div className={`flex md:flex-row flex-col md:py-[5vh] py-[2vh] md:items-center md:gap-[5vw] gap-[1vh] my-4 ${style}`}>
      <div className="md:basis-1/2 flex flex-col lg:gap-3 gap-1">
        <h3 className="text-orange uppercase font-regular">{title}</h3>
        {description && <p>{description}</p>}
        <ul className="list-disc list-inside">
          {list && list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <Image
        src={image}
        alt=""
        height={500}
        width={500}
        quality={100}
        className="md:basis-1/2 rounded-lg md:min-h-[50vh] md:w-[50%] h-[40vh] w-full object-cover"
      ></Image>
    </div>
  );
};

export default ServiceComp;
