import Image from "next/image";
import React from "react";
import ServiceComp from "./ServiceComp";

const Services = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-orange text-center font-regular">
            Our Services
          </h3>
          <p>
            Frontline Consulting is a Kenyan consultancy firm offering services
            and training in various aspects of management and the environment.
            Our projects range from ecosystem management, project development,
            developing management, and business plans to marketing and writing.
          </p>
        </div>
      </div>
      <ServiceComp
        title="DEVELOPMENT PROJECTS"
        description="Frontline Ecosystem Services offers comprehensive Environmental, Conservation and Tourism Consultancy. These includes:"
        list={[
          "Project conception",
          "Proposals writing",
          "Fund raising",
          "Development of management plans for conservation protected areas",
          "Business plans for tourism and natural resource projects",
          "Institutional strategic plans and policy reports",
          "Specific programme reports in larger projects",
        ]}
        image="/Cub Img.png"
      />
      <ServiceComp
        title="EIA"
        list={[
          "Produce EIA reports",
          "Access impact assessment before and after project implementation",
          "Developing monitoring and evaluating plans",
        ]}
        style="md:flex-row-reverse"
        image="/Antelope Img.png"
      />
      <ServiceComp
        title="MAPPING AND CARTOGRAPHY"
        list={[
          "Analysis of data",
          "Developing maps of natural resources",
          "Land cover maps",
          "Interpreting data and maps",
        ]}
        image="/Lion Img.png"
      />
      <ServiceComp
        title="Training"
        list={[
          "Content development",
          "Data collection",
          "Natural resources and management techniques",
          "Report writing and analysis",
          "Environment and natural history concepts",
        ]}
        style="md:flex-row-reverse"
        image="/Elephant Img.png"
      />
      <ServiceComp
        title="Writing Services"
        description="Frontline Ecosystem Services offers comprehensive Environmental, Conservation and Tourism Consultancy. These includes:"
        list={[
          "Writing and editing technical reports",
          "Writing newsletters and reports",
          "Blog writing and management on behalf of companies",
          "Article and copy writing for target audience",
          "Content development for websites, press releases",
        ]}
        image="/Flamingo Img.png"
      />
      <ServiceComp
        title="Marketing"
        list={[
          "Email marketing and e-newsletter development",
          "Social media marketing and management",
          "Magazines and periodicals for targeted audience",
        ]}
        style="md:flex-row-reverse"
        image="/Cheetah Img.png"
      />
      <ServiceComp
        title="Tourism"
        description="Frontline Ecosystem Services offers comprehensive Environmental, Conservation and Tourism Consultancy. These includes:"
        list={[
          "Project and business plans",
          "New project design and development",
          "Customer service excellence design",
          "Customer service research and reporting",
          "Marketing and sales plan development",
        ]}
        image="/Zebra Img.png"
      />
      <ServiceComp
        title="Blogs"
        list={[
          "Writing conservation blogs",
          "Raise awareness through conservation story telling",
        ]}
        style="md:flex-row-reverse"
        image="/Giraffe Img.png"
      />
    </div>
  );
};

export default Services;
