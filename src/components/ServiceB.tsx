import Image from "next/image";
import React from "react";
import { ServiceProps } from "@/../types";

const ServiceB = ({ title, description, list }: ServiceProps) => {
  return (
    <div className="flex flex-row my-8 items-center">
      <Image
        src="/Cub Img.png"
        alt=""
        height={500}
        width={500}
        quality={100}
        className="rounded-lg "
      ></Image>
      <div className="flex flex-col gap-4">
        <h3 className="text-black font-regular text-2xl">{title}</h3>
        {description && <p>{description}</p>}
        <ul className="list-disc list-inside">
          {list && list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ServiceB;
