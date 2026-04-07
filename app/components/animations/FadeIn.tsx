"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Check if device is mobile/touch screen (to match other components)
      const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (isMobile) {
          gsap.set(containerRef.current, { visibility: "visible" });
          return;
      }

      gsap.fromTo(
        containerRef.current,
        {
          y: 60,
          opacity: 0,
          visibility: "hidden",
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: delay,
          visibility: "visible",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [delay] }
  );

  return (
    <div ref={containerRef} className={className} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
