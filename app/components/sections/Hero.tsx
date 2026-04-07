"use client";

import Copy from "../ui/Copy";
import FadeIn from "../animations/FadeIn";
import { useCursor } from "../providers/CursorProvider";
import { Button } from "../ui/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-40 lg:pt-44 xl:pt-60 2xl:pt-80 2xl:h-[80vh] 3xl:flex">
      <div className="flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-8 w-full items-center ">
        {/* Left Column: Text Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 text-center ">
          <div className="flex flex-col items-start w-7/12 lg:w-full pt-10">
            <Copy delay={0.1}>
              <h1 className="text-[8vw] md:text-[4vw] xl:text-[3vw] tracking-tighter">
                Hello, Iam
              </h1>
            </Copy>
            <Copy delay={0.3}>
              <h1 className="text-[22vw] md:text-[10vw] xl:text-[8vw] tracking-tighter text-center -mt-6 xl:-mt-10 2xl:-mt-20">
                Nikhilesh
              </h1>
            </Copy>
            <DesktopView />
          </div>

          {/* Placeholder Image */}
          <FadeIn
            delay={0.6}
            className="flex justify-center md:justify-end w-full md:w-8/12 lg:w-10/12 -mt-18 sm:mt-0 -z-10 md:z-0"
          >
            <div className="relative aspect-square w-full max-w-md sm:max-w-[24rem] xl:max-w-130 rounded-[5%] overflow-hidden shadow-2xl bg-slate-400 flex items-center justify-center">
              <Image src="/assets/images/hero_image.JPG" alt="Nikhilesh Hero" fill className="object-cover" priority />
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea
      accusantium inventore autem consequuntur possimus consectetur dolorem
      libero. Minus neque suscipit fugit est iste ad.
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
  const { setCursorActive, setCursorText } = useCursor();
  return (
    <div className="hidden sm:flex flex-col items-start">
      <Copy delay={0.5}>
        <p className="text-lg md:text-xl xl:text-xl 3xl:text-2xl w-full xl:w-lg 3xl:w-[37.5rem] text-left inline-block">
          I&apos;m Gourav Kumar, a Web designer & Developer based in India. I
          like to solve design problems for businesses & Startups to elevate
          their business needs via website.
        </p>
      </Copy>

      <Copy delay={0.8}>
        <Button href="#" className="mt-8" cursorText="Open">
          View Projects
        </Button>
      </Copy>
    </div>
  );
};
