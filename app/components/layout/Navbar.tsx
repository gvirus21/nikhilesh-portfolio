"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 as Menu } from "react-icons/hi";
import { IoCloseOutline as Close } from "react-icons/io5";
import { Button } from "../ui/Button";

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-6 md:py-3 xl:py-4 bg-[#f5f5f5]">
      <div className="flex justify-between items-center w-full relative z-50">
        <div className="">
          <Link
            href="/"
            className="text-sm md:text-lg lg:text-lg tracking-tighter uppercase"
            onClick={() => setIsOpen(false)}
          >
            Nikhilesh Varasala
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-end justify-between gap-3 text-sm md:text-xl">
          <Link
            href="mailto:nikhileshvarasala09@gmail.com"
            className="hover:text-black/50 active:text-slate-900 pt-0.5 transition-colors"
            aria-label="Email"
          >
            E-MAIL
          </Link>
          <Link
            href="https://www.linkedin.com/in/nikhilesh-varasala/"
            className="hover:text-black/50 active:text-slate-900  pt-0.5 transition-colors"
            aria-label="LinkedIn"
          >
            LINKEDIN
          </Link>
          <Link
            href="https://github.com/Nikhilesh264"
            className="hover:text-black/50 active:text-slate-900  pt-0.5 transition-colors"
            aria-label="GitHub"
          >
            GITHUB
          </Link>

          <Button
            href="/assets/certificates/Nikhilesh_resume.pdf"
            target="_blank"
            className="text-xl bg-black/90 ml-4"
            cursorText="Check"
          >
            Resume
          </Button>
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

      {/* Background Blur Overlay for the rest of the page */}
      <div
        className={`fixed inset-0 bg-white/30 blur-xl z-30 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 text-2xl tracking-tight h-[32vh] backdrop-blur-xl shadow-2xl  bg-white z-40 lg:hidden flex flex-col pt-22 px-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="relative flex justify-between items-center text-2xl">
          <Link
            href="https://www.linkedin.com/in/nikhilesh-varasala/"
            className="hover:text-blue-600 dark:hover:text-white pt-0.5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            LINKEDIN
          </Link>
          <Link
            href="https://github.com/Nikhilesh264"
            className="hover:text-blue-600 dark:hover:text-white pt-0.5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GITHUB
          </Link>
          <Link
            href="mailto:nikhileshvarasala09@gmail.com"
            className="hover:text-blue-600 dark:hover:text-white pt-0.5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            EMAIL
          </Link>
        </div>

        <Link
          href="/assets/certificates/Nikhilesh_resume.pdf"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="font-thin text-center rounded-full text-lg py-2 px-8 border mt-10 bg-black text-white"
        >
          Download Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
