"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const [imageUrl, setImageUrl] = useState("/c.jpg");

  const getImageUrl = () => {
    const images = ["/c.jpg", "/b.jpg", "/d.jpg", "/e.jpg"];
    const currentIndex = images.indexOf(imageUrl);
  
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex];
    }
      return images[0];
  };
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageUrl(getImageUrl()); 
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="Hero Section"
      className="min-h-[80vh] max-h-[80vh] bg-no-repeat bg-cover relative bg-center z-[-1]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="sm:min-h-[80vh] sm:max-h-[80vh] w-[100vw] sm:w-[60vw] sm:bg-gradient-to-r sm:from-white sm:from-90% sm:to-transparent">
        <div className="h-[80vh] flex flex-col justify-center bg-white sm:bg-none">
          <h1 className="text-orange lg:text-4xl md:text-xl text-lg mb-3 mx-[8vw]">
            ENVIRONMENT/ TOURISM PLANNING,DEVELOPMENT PROJECTS AND TECHNICAL
            WRITING SPECIALISTS
          </h1>
          <p className="mb-3 mx-[8vw]">
            Looking for an expert to handle your project? Talk to us before
            talking tosomebody else, because we could as well be the best. From
            managementplans for conservancies or national parks, tourism
            development projects totechnical writing for technical oriented
            institutions.
          </p>
          <Link
          className="mx-[8vw] w-32 inline px-[15px] py-[4px] border-[1px] border-transparent hover:border-orange rounded-full text-white hover:text-orange bg-orange hover:bg-transparent"
          href="/Contact"
        >
          Reach Out
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
