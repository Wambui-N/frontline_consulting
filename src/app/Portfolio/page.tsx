import React from "react";
import ProtfolioComp from "@/components/ProtfolioComp";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <h3 className="text-orange font-regular text-center text-2xl">
        Portfolio
      </h3>
      <ProtfolioComp
        title="AMBOSELI ECOSYSTEM MANAGEMENT PLAN"
        description="Amboseli Ecosystem Management Plan was the first ecosystem management plan in Kenya. Daniel was involved as:"
        list={[
          "Editor of the Management Plan",
          "Tourism Expert and chair of the Tourism Working Committee",
        ]}
        image="/Amboseli.jpg"
      />
      <ProtfolioComp
        title="LAKE SOLAI"
        description="Daniel was the technical consultant who facilitated development of the management plan throughout the process including stakeholder meetings and validation."
        image="/Solai.png"
        style="md:flex-row-reverse"
      />
      <ProtfolioComp
        title="Maasai Mara"
        description="Daniel was involved as a tourism expert and secretary to the Tourism Working Group"
        image="/Maasai Mara.png"
      />
      <ProtfolioComp
        title="LAKE Bogoria"
        description="Daniel was involved as a tourism expert and developed the tourism programme."
        image="/Bogoria.png"
        style="md:flex-row-reverse"
      />
      <ProtfolioComp
        title="AMBOSELI ECOSYSTEM"
        description="State of Amboseli Conservancies 2020 highlights the state of all conservancies in the Amboseli ecosystem."
        list={["Daniel was the consultant writer."]}
        image="/Amboseli.jpg"
      />
      <div>
        <div className="flex flex-row justify-between gap-4 my-3">
          <Image
            src="/01.png"
            alt=""
            height={500}
            width={500}
            className="basis-1/3 md:mix-h-[50vh] w-[20%] h-auto object-cover"
          />
          <Image
            src="/02.png"
            alt=""
            height={500}
            width={500}
            className="basis-1/3 md:mix-h-[50vh] w-[20%] h-auto object-cover"
          />
          <Image
            src="/03.png"
            alt=""
            height={500}
            width={500}
            className="basis-1/3 md:mix-h-[50vh] w-[20%] h-auto object-cover"
          />
        </div>
        <p>
          Daniel was the consultant writer for the above project
          evaluationreports for UNDP GEF/SGP-funded projects in Baringo.
        </p>
      </div>
    </div>
  );
};

export default page;
