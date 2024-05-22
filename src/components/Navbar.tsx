"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  //const searchParams = useSearchParams();

  const isCurrentPage = (path: string) => {
    return pathname === path;
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <div className="my-2 flex flex-row items-center justify-center">
      <div id="Logo" className="flex-1">
        <Link href="/">
          <Image
            className="inline-block h-[96px] w-auto mt-[10px] max-w-full object-contain"
            src="/Dark Logo L.png"
            width={250}
            height={250}
            alt="Frontline Consulting Logo"
          />
        </Link>
      </div>
      <div id="navmenu">
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
          className="mx-[30px] px-[15px] py-[4px] font-medium border-[1px] border-transparent hover:border-orange rounded-full text-white hover:text-orange bg-orange hover:bg-transparent transition-all ease-in-out duration-300"
          href="/Contact"
        >
          Contact Us
        </Link>
      </div>
      <div className={`lg:hidden rounded-full z-10`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="auto"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#061103"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={toggleMenu}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>
      <div
        className={`fixed top-0 bottom-0 right-[-50px] min-h-full min-w-full sm:min-w-[50vw] flex flex-col justify-center items-center shadow-xl bg-white ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link className="my-[15px] text-lg hover:text-orange" href="/">
          Home
        </Link>
        <Link className="my-[15px] text-lg hover:text-orange" href="/About">
          About
        </Link>
        <Link className="my-[15px] text-lg hover:text-orange" href="/Services">
          Services
        </Link>
        <Link className="my-[15px] text-lg hover:text-orange" href="/Portfolio">
          Portfolio
        </Link>
        <Link
          className="my-[30px] text-lg px-[15px] py-[4px] border-[1px] border-transparent hover:border-orange rounded-full text-white hover:text-orange bg-orange hover:bg-transparent"
          href="/Contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
