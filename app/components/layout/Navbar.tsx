"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 as Menu } from "react-icons/hi";
import { IoCloseOutline as Close } from "react-icons/io5";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the full-screen menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-6 md:py-3 xl:py-2 bg-[#f5f5f5]">
      <div className="flex justify-between items-center w-full relative z-50">
        <div className="">
          <Link
            href="/"
            className="text-sm md:text-base lg:text-sm tracking-tighter uppercase"
            onClick={() => setIsOpen(false)}
          >
            Nikhilesh Varasala
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 text-sm md:text-base">
          <Link
            href="mailto:nikhileshvarasala09@gmail.com"
            className="hover:text-black/50 active:text-slate-900 transition-colors"
            aria-label="Email"
          >
            E-MAIL
          </Link>
          <Link
            href="https://www.linkedin.com/in/nikhilesh-varasala/"
            className="hover:text-black/50 active:text-slate-900  transition-colors"
            aria-label="LinkedIn"
          >
            LINKEDIN
          </Link>
          <Link
            href="https://github.com/Nikhilesh264"
            className="hover:text-black/50 active:text-slate-900  transition-colors"
            aria-label="GitHub"
          >
            GITHUB
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <Close size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 text-2xl tracking-tight h-[32vh] backdrop-blur-xl shadow-2xl  bg-white z-40 lg:hidden flex flex-col pt-22 px-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="relative flex justify-between items-center gap-10 text-2xl">
          <Link
            href="#"
            className="hover:text-blue-600 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            LINKEDIN
          </Link>
          <Link
            href="#"
            className="hover:text-blue-600 dark:hover:text-white transition-colors -ml-10"
            onClick={() => setIsOpen(false)}
          >
            GITHUB
          </Link>
          <button
            onClick={() =>
              (window.location.href = "mailto:nikhileshvarasala09@gmail.com")
            }
            className="font-thin rounded-full text-lg py-2 px-8 border"
          >
            Email
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
