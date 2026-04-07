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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 bg-[#f5f5f5]">
      <div className="flex justify-between items-center w-full relative z-50">
        <div className="">
          <Link
            href="/"
            className="text-xl lg:text-sm tracking-tighter uppercase"
            onClick={() => setIsOpen(false)}
          >
            Nikhilesh Varasala
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-3 text-sm">
          <Link
            href="mailto:nikhileshvarasala09@gmail.com"
            className="hover:text-black/50 active:text-slate-900 transition-colors"
            aria-label="Email"
          >
            E-MAIL
          </Link>
          <Link
            href="#"
            className="hover:text-black/50 active:text-slate-900  transition-colors"
            aria-label="LinkedIn"
          >
            LINKEDIN
          </Link>
          <Link
            href="#"
            className="hover:text-black/50 active:text-slate-900  transition-colors"
            aria-label="GitHub"
          >
            GITHUB
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <Close size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 text-6xl tracking-tight h-screen backdrop-blur-sm shadow-2xl   bg-[#dfdfdf] z-40 lg:hidden flex flex-col pt-32 px-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-2 justify-between">
          <Link
            href="mailto:nikhileshvarasala09@gmail.com"
            className="hover:text-blue-600 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            E-MAIL
          </Link>
          <Link
            href="#"
            className="hover:text-blue-600 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            LINKEDIN
          </Link>
          <Link
            href="#"
            className="hover:text-blue-600 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GITHUB
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;