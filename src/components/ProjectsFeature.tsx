"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem, scaleOnHover } from "@/lib/motion";

const projects = [
  {
    src: "/Amboseli Eco.jpg",
    alt: "Amboseli Ecosystem Management Plan project",
  },
  {
    src: "/Amboseli.jpg",
    alt: "Amboseli conservation and management project",
  },
  {
    src: "/Maasai Mara.png",
    alt: "Maasai Mara tourism and conservation project",
  },
  {
    src: "/Solai.png",
    alt: "Lake Solai management plan project",
  },
];

const ProjectsFeature = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h3
        className="text-orange font-regular my-8 text-2xl"
        variants={staggerItem}
      >
        Projects Feature
      </motion.h3>
      <motion.div
        className="lg:flex lg:flex-row md:grid md:grid-cols-2 flex-col justify-between gap-5 my-4"
        variants={staggerContainer}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            whileHover={scaleOnHover}
            className="relative overflow-hidden rounded-lg"
          >
            <Link href="/Portfolio">
              <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden p-0">
                <div className="relative lg:h-[70vh] md:h-[50vh] h-[40vh] w-full">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    quality={90}
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsFeature;
