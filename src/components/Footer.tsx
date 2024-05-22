"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  //const searchParams = useSearchParams();

  const isCurrentPage = (path: string) => {
    return pathname === path;
  };
  return (
    <div className="flex flex-col">
      <div className="my-[15px] w-full h-1 border-t-[0.2vh] border-black/25"></div>
      <div className="flex md:justify-center">
        <div className="flex sm:flex-row flex-col">
          <Link
            className={`mx-[15px] hover:text-orange ${
              isCurrentPage("/") ? "text-orange" : "text-black"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`mx-[15px] hover:text-orange ${
              isCurrentPage("/About") ? "text-orange" : "text-black"
            }`}
            href="/About"
          >
            About
          </Link>
          <Link
            className={`mx-[15px] hover:text-orange ${
              isCurrentPage("/Services") ? "text-orange" : "text-black"
            }`}
            href="/Services"
          >
            Services
          </Link>
          <Link
            className={`mx-[15px] hover:text-orange ${
              isCurrentPage("/Portfolio") ? "text-orange" : "text-black"
            }`}
            href="/Portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={`mx-[15px] hover:text-orange ${
              isCurrentPage("/Contact") ? "text-orange" : "text-black"
            }`}
            href="/Contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <p className="mx-[15px] text-black/50">
          © 2023 Frontline Consulting. All rights reserved
        </p>
        <Image
          className="inline-block h-[96px] w-auto mt-[10px] max-w-full object-contain"
          src="/Dark Logo L.png"
          width={250}
          height={250}
          alt="Frontline Consulting Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
