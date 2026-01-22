"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideInFromRight, staggerContainer } from "@/lib/motion";

const Hero = () => {
  return (
    <motion.div
      id="Hero"
      className="grid lg:grid-cols-2 gap-[2vw] lg:min-h-[70vh] xl:-mr-[12vw] lg:-mr-[8vw]"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.div
        className="flex flex-col justify-center gap-6"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-orange font-regular text-3xl lg:text-4xl leading-tight"
          variants={fadeInUp}
        >
          Environment/Tourism Planning, Development Projects and Technical
          Writing Specialists
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed text-black/80"
          variants={fadeInUp}
        >
          Looking for an expert to handle your project? Talk to us before
          talking to somebody else, because we could as well be the best. From
          management plans for conservancies or national parks, tourism
          development projects to technical writing for technical oriented
          institutions.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link href="/Contact">
            <Button size="lg" className="text-base px-8 py-6 rounded-full">
              Reach out
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-row gap-3 justify-between overflow-hidden w-full"
        variants={slideInFromRight}
      >
        <motion.div
          className="relative h-[30vh] w-full md:h-[50vh] lg:h-full overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/c.jpg"
            alt="Environmental conservation and tourism planning landscape"
            fill
            quality={100}
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          className="relative hidden md:block overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/e.jpg"
            alt="Wildlife conservation and ecosystem management"
            width={300}
            height={600}
            quality={100}
            className="h-full w-auto object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="relative hidden md:block overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/d.jpg"
            alt="Tourism development and environmental planning"
            width={300}
            height={600}
            quality={100}
            className="h-full w-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
