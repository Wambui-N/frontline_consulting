import React from "react";
import { Suspense } from "react";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Team from "@/components/Team";

const page = () => {
  return (
    <div>
      <About />
      <Mission />
      <Team />
    </div>
  );
};

export default page;
