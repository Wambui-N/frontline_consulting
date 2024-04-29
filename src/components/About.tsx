import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      className=""
    >
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-orange font-regular text-center text-2xl">About Us</h3>
        <p>
          Frontline Consulting is a Kenyan consultancy firm offering services
          and training in various aspects of management and the environment. Our
          projects range from ecosystem management, project development,
          developing management, and business plans to marketing and writing.
        </p>
      </div>
    </div>
  );
};

export default About;
