"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isCurrentPage = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Services", label: "Services" },
    { href: "/Portfolio", label: "Portfolio" },
  ];

  return (
    <motion.nav
      className={cn(
        "sticky top-0 z-50 my-2 flex flex-row items-center justify-center transition-all duration-300",
        isScrolled && "bg-white/80 backdrop-blur-md shadow-soft"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="Logo" className="flex-1">
        <Link href="/" aria-label="Frontline Consulting Home">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              className="inline-block h-[96px] w-auto mt-[10px] max-w-full object-contain"
              src="/Dark Logo L.png"
              width={250}
              height={250}
              alt="Frontline Consulting Logo"
              priority
            />
          </motion.div>
        </Link>
      </div>
      <nav id="navmenu" className="hidden lg:flex flex-row items-center justify-between" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={cn(
              "mx-[15px] relative transition-colors duration-200",
              isCurrentPage(link.href) ? "text-orange" : "text-black hover:text-orange"
            )}
            href={link.href}
            aria-current={isCurrentPage(link.href) ? "page" : undefined}
          >
            {link.label}
            {isCurrentPage(link.href) && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange"
                layoutId="navbar-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                aria-hidden="true"
              />
            )}
          </Link>
        ))}
        <Link href="/Contact" className="ml-8">
          <Button variant="default" className="rounded-full">
            Contact Us
          </Button>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  className={cn(
                    "text-lg font-medium transition-colors duration-200 block py-2",
                    isCurrentPage(link.href)
                      ? "text-orange"
                      : "text-black hover:text-orange"
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-4"
            >
              <Link href="/Contact">
                <Button variant="default" className="w-full rounded-full">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </nav>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

export default Navbar;
