import React from "react";
import Arrow from "./Arrow";

const Values = () => {
  return (
    <div>
      <div className="md:my-12 my-4">
        <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <h6 className="md:col-span-1 text-orange font-bold text-sm">
            Who are we:
          </h6>
          <p className="md:col-span-4">
            We are experts in environmental conservation planning and tourism
            project management and development. We assist clients to develop
            management plans, carry out impact assessments or feasibility
            studies and business plans for tourism projects. We are also a
            writing power house for writing and editing technical reports or
            institutional publications for conservation and development
            institutions.
          </p>
        </div>
        <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <h6 className="md:col-span-1 text-orange font-bold text-sm">
            Our Value Proposition:
          </h6>
          <p className="md:col-span-4">
            We take pride in high quality work and efficiency in all our
            projects. Every assignment is important to us and we take time to
            understand the objectives of the project to ensure we deliver
            satisfaction and value for money.
          </p>
        </div>
        <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <h6 className="md:col-span-1 text-orange font-bold text-sm">
            Our Clients:
          </h6>
          <p className="md:col-span-4">
            We work for a wide range of public and private institutions, mainly
            those involved in wildlife conservation, environment and tourism. We
            also work for individual investors in tourism and wildlife
            conservancies and elsewhere.
          </p>
        </div>
        {/* <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <div></div>
          <Arrow 
            href="/About"
            Link_text="About Us"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Values;
