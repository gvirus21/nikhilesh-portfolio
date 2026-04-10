"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { useCursor } from "@/app/components/providers/CursorProvider";

import { useLenis } from "lenis/react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  cursorText?: string;
  style?: React.CSSProperties;
  target?: string;
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href, children, className = "", cursorText = "Open", style, target }, ref) => {
    const { setCursorActive, setCursorText } = useCursor();
    const lenis = useLenis();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("#") && lenis) {
        e.preventDefault();
        const target = document.querySelector(href) as HTMLElement;
        if (target) {
          lenis.scrollTo(target, {
            duration: 1.8,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          });
        }
      }
    };

    return (
      <Link
        href={href}
        ref={ref}
        style={style}
        target={target}
        scroll={!href.startsWith("#")}
        onClick={handleClick}
        onMouseEnter={() => {
          setCursorActive(true);
          setCursorText(cursorText);
        }}
        onMouseLeave={() => {
          setCursorActive(false);
          setCursorText("");
        }}
        className={`inline-block text-sm bg-black text-white px-4 py-1 rounded-full transition-all duration-100 ease-in hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md ${className}`}
      >
        {children}
      </Link>
    );
  },
);

Button.displayName = "Button";
