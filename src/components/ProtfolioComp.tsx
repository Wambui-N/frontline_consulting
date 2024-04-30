import React from "react";
import { PortfolioProps } from "../../types";
import Image from "next/image";

const ProtfolioComp = ({title, description, style, list, image}:PortfolioProps) => {
  return (
    <div>
    <div className={`flex md:flex-row flex-col md:py-[5vh] py-[2vh] items-center md:gap-[5vw] gap-[1vh] ${style}`}>
        <div className="basis-1/2 flex flex-col lg:gap-3 gap-1">
          <h3 className="text-orange uppercase font-regular">
            {title}
          </h3>
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
          className="basis-1/2 rounded-lg md:mix-h-[50vh] md:w-[50%] w-full h-auto object-cover"
          ></Image>
      </div>
    </div>
  );
};

export default ProtfolioComp;
