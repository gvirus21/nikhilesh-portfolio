"use client";

import Copy from "../ui/Copy";
import FadeIn from "../animations/FadeIn";
import { Button } from "../ui/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-40 lg:pt-44 xl:pt-50 3xl:mt-50 3xl:h-[75vh] max-w-450 mx-auto">
      <div className="flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-8 w-full items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 text-center">
          <div className="flex flex-col items-start w-7/12 lg:w-full pt-10">
            <Copy delay={0.1}>
              <h1 className="text-[8vw] md:text-[4vw] xl:text-[3vw] 3xl:text-[2vw] tracking-tighter">
                Hello, Iam
              </h1>
            </Copy>
            <Copy delay={0.2}>
              <h1 className="text-[22vw] md:text-[10vw] xl:text-[8vw] 3xl:text-[7vw] tracking-tighter text-center -mt-6 xl:-mt-10 3xl:-mt-12 xl:-ml-2">
                Nikhilesh
              </h1>
            </Copy>
            <DesktopView />
          </div>

          {/* Placeholder Image */}
          <FadeIn
            delay={0.4}
            className="flex justify-center md:justify-end w-full md:w-8/12 lg:w-10/12 -mt-18 sm:mt-0 -z-10 md:z-0"
          >
            <div className="relative aspect-square w-full max-w-md sm:max-w-[24rem] xl:max-w-120 3xl:max-w-140 rounded-[3%] overflow-hidden shadow-2xl bg-slate-400 flex items-center justify-center">
              <Image
                src="/assets/images/hero_image.JPG"
                alt="Nikhilesh Hero"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          <MobileView />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const MobileView = () => (
  <div className="sm:hidden">
    <p className="text-2xl mt-4 text-justify px-4">
      I help businesses make better decisions using data—not assumptions. I
      specialize in breaking down complex datasets into clear, actionable
      insights that improve performance, reduce waste, and drive measurable
      results Instead of just building dashboards, I focus on answering one
      question: “What should we do next based on this data?
    </p>

    <div className="pt-2">
      <a
        href="#projects"
        className="inline-flex items-center justify-center px-4 py-1 text-xl bg-black text-white rounded-full mt-8"
      >
        View Projects
      </a>
    </div>
  </div>
);

const DesktopView = () => {
  return (
    <div className="hidden sm:flex flex-col items-start">
      <Copy delay={0.5}>
        <p className="text-lg md:text-xl xl:text-xl 3xl:text-xl w-full xl:w-135 2xl:w-155 3xl:w-155 text-left inline-block">
          I help businesses make better decisions using data not assumptions. I
          specialize in breaking down complex datasets into clear, actionable
          insights that improve performance, reduce waste, and drive results.
        </p>
      </Copy>

      <Copy delay={0.8}>
        <Button href="#projects" className="mt-8" cursorText="Check">
          View Projects
        </Button>
      </Copy>
    </div>
  );
};
