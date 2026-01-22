import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div>
      <h3 className="text-orange font-regular text-2xl my-4">Meet the team</h3>
      <div className="flex flex-col gap-10">
        <div className="flex md:flex-row flex-col items-center md:gap-6 gap-3">
          <div className="flex flex-col gap-2 items-center basis-1/3">
            <Image
              src="/Daniel.JPG"
              quality={100}
              alt="Daniel Ndung'u - Founding and Managing Partner of Frontline Consulting"
              height={500}
              width={500}
              className="md:h-[60vh] h-[40vh] w-full object-cover object-center rounded-md"
              loading="lazy"
            ></Image>
            <h3 className="text-black font-regular text-center md:my-4">
              Daniel Ndung&apos;u
            </h3>
          </div>
          <div className="basis-2/3 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p>
                Daniel is the founding and managing partner of Frontline
                Consulting. He is a consultant ecologist, a writer and a
                hospitality expert and trainer. He has previously worked as a
                wildlife research scientist in Kenya and as a communications
                expert in both public and private sectors.
              </p>
              <p>
                He is regular commentator and blogger on environment,
                conservation, tourism, business and politics. In the tourism
                industry, Daniel has served voluntary services at the following
                institutions:
              </p>
              <ul className="list-disc list-inside">
                <li>KATO Marketing Advisory Committee.</li>
                <li>KTF Environmental Committee.</li>
                <li>Ecotourism Kenya Environmental Committee of KTF.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Daniel is an extensively experienced and a highly engaged
                consultant in a wide array of areas, including:
              </p>
              <ul className="list-disc list-inside">
                <li>Technical Writing and Editing</li>
                <li>Customer Service Excellence in Hospitality</li>
                <li>Environment and Tourism Development Projects</li>
                <li>Management, Strategic and Business Plans</li>
                <li>
                  Conservancy and National Parks/Game Reserves management plans
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:gap-6 gap-3">
          <div className="flex flex-col gap-2 items-center basis-1/3">
            <Image
              src="/Sarah.JPG"
              quality={100}
              alt="Sarah Mwakha Omusula - Consultant and Partner at Frontline Consultants"
              height={500}
              width={500}
              className="md:h-[60vh] h-[40vh] w-full object-cover object-center rounded-md"
              loading="lazy"
            ></Image>
            <h3 className="text-black font-regular text-center md:my-4">
              Sarah Mwakha Omusula
            </h3>
          </div>
          <div className="basis-2/3 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p>
                Sarah is a consultant and partner at Frontline Consultants. She
                has vast interests in environment and conservation, especially
                natural resources management. She is also an expert in:
              </p>
              <ul className="list-disc list-inside">
                <li>Environmental Impact Assessments and Audits</li>
                <li>Project management</li>
                <li>Ecological monitoring and data collection</li>
                <li>Monitoring and evaluation.</li>
              </ul>
              <p>
                Sarah has a master of environment from Yale University, School
                of Forestry & Environmental Studies and Bachelor of Science in
                Wildlife Management from Moi university, among other
                qualifications and awards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
