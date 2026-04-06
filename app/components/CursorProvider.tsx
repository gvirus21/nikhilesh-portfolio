"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";

// Context definition
interface CursorContextType {
  setCursorText: (text: string) => void;
  setCursorActive: (active: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  setCursorText: () => {},
  setCursorActive: () => {},
});

export const useCursor = () => useContext(CursorContext);

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursorText, setCursorText] = useState("");
  const [cursorActive, setCursorActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile/touch screen
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || !cursorRef.current) return;

    // Center the transform specifically
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.15,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.15,
      ease: "power3",
    });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX + 24);
      yTo(e.clientY + 24);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <CursorContext.Provider value={{ setCursorText, setCursorActive }}>
      {children}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-9999 hidden sm:flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
            cursorActive
              ? "h-16 w-16 bg-black text-white scale-100 opacity-80"
              : "h-0 w-0 bg-transparent scale-50 opacity-0"
          }`}
        >
          <span
            className={`text-sm font-thin tracking-tighter transition-opacity duration-300 ${
              cursorActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {cursorText}
          </span>
        </div>
      </div>
    </CursorContext.Provider>
  );
}
