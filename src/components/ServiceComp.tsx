import Image from "next/image";
import React from "react";
import { ServiceProps } from "@/../types";

const ServiceComp = ({ title, description, list, style, image }: ServiceProps) => {
  return (
    <div className={`flex flex-row py-[5vh] items-center gap-[5vw] ${style}`}>
      <div className="basis-1/2 flex flex-col gap-4">
        <h3 className="text-black uppercase font-regular text-2xl">{title}</h3>
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
        className="basis-1/2 rounded-lg md:mix-h-[50vh] w-[50%] h-auto object-cover"
      ></Image>
    </div>
  );
};

export default ServiceComp;
