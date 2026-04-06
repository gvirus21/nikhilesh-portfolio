"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { useCursor } from "./CursorProvider";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  cursorText?: string;
  style?: React.CSSProperties;
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href, children, className = "", cursorText = "Open", style }, ref) => {
  const { setCursorActive, setCursorText } = useCursor();

  return (
    <Link
      href={href}
      ref={ref}
      style={style}
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
});

Button.displayName = "Button";
