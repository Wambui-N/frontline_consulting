import React from "react";

const Mission = () => {
  return (
    <div>
      <div className="md:my-12 my-4">
        <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <h6 className="md:col-span-1 text-orange font-regular text-base">
            Our Mission:
          </h6>
          <p className="md:col-span-4">
            Listen, simplifying and deliver quality planning and management
            projects.
          </p>
        </div>
        <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <h6 className="md:col-span-1 text-orange font-regular text-base">
            Our Vision:
          </h6>
          <div className="md:col-span-4">
            <p>
              Frontline Consultants works to become your one stop shop for
              professional support in project management and development
            </p>
            <ul className="list-disc list-inside">
              <li>
                We provide all environmental services, from assessment to
                audits.
              </li>
              <li>
                We do management plans for conservation areas such as
                conservancies and national parks/ reserves.
              </li>
              <li>We develop business and management plans.</li>
              <li>
                We write and edit all the technical reports and business
                proposals.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-5 flex flex-col my-8">
          <h6 className="md:col-span-1 text-orange font-regular text-base">
            Who works with us:
          </h6>
          <div className="md:col-span-4">
            <p>Contact us if:</p>
            <ul className="list-disc list-inside">
              <li>You have a business plan that needs to be done right.</li>
              <li>
                You desire environmental services for your project to be handled
                by experts.
              </li>
              <li>
                You want your management projects and plans to be result
                oriented.
              </li>
              <li>
                You have a marketing and publicity campaign that you are not
                sure how to handle.
              </li>
              <li>
                You need to develop a business proposal for your important
                project in tourism or conservation.
              </li>
              <li>
                You have a technical report or institutional publication to
                write or edit.
              </li>
            </ul>
          </div>
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

export default Mission;
