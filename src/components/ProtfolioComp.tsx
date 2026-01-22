"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortfolioProps } from "../../types";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, slideInFromLeft, slideInFromRight, scaleOnHover } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ProtfolioComp = ({title, description, style, list, image}:PortfolioProps) => {
  const isReversed = style?.includes("flex-row-reverse");
  const imageVariants = isReversed ? slideInFromLeft : slideInFromRight;
  const contentVariants = isReversed ? slideInFromRight : slideInFromLeft;

  return (
    <motion.div
      className={cn(
        "flex md:flex-row flex-col md:py-[5vh] py-[2vh] items-center md:gap-[5vw] gap-[4vh] my-8",
        style
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <motion.div
        className="basis-1/2 flex flex-col lg:gap-4 gap-2"
        variants={contentVariants}
      >
        <Card className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-orange uppercase font-regular text-xl mb-3">
              {title}
            </h3>
            {description && (
              <p className="text-black/80 mb-4 leading-relaxed">{description}</p>
            )}
            {list && list.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-black/70">
                {list.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="basis-1/2 relative overflow-hidden rounded-lg"
        variants={imageVariants}
        whileHover={scaleOnHover}
      >
        <Image
          src={image}
          alt={title || "Portfolio project image"}
          height={500}
          width={500}
          quality={100}
          className="rounded-lg md:min-h-[50vh] md:w-full w-full h-auto object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </motion.div>
    </motion.div>
  );
};

export default ProtfolioComp;
