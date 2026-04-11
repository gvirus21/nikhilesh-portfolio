"use client";

import Copy from "../ui/Copy";
import FadeIn from "../animations/FadeIn";
import { Button } from "../ui/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-40 lg:pt-44 xl:pt-50 3xl:mt-50 3xl:h-[75vh] px-4 xl:px-0 max-w-450 mx-auto">
      <div className="flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-8 w-full items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 text-center">
          <div className="flex flex-col items-start w-full pt-0">
            <Copy delay={0.1}>
              <h1 className="text-[6vw] md:text-[4vw] xl:text-[3vw] 3xl:text-[2vw] tracking-tighter">
                Hello, Iam
              </h1>
            </Copy>
            <Copy delay={0.2}>
              <h1 className="text-[18vw] md:text-[10vw] xl:text-[8vw] 3xl:text-[7vw] tracking-tighter text-center -mt-6 xl:-mt-10 3xl:-mt-12 -ml-1 xl:-ml-2">
                Nikhilesh
              </h1>
            </Copy>

            <Copy delay={0.5}>
              <p className="text-black/70 text-xl md:text-2xl xl:text-3xl 3xl:text-4xl w-full text-left inline-block -mt-1 md:-mt-3 xl:-mt-6 3xl:-mt-10 tracking-tighter">
                Data Analyst | Driving Revenue & Operational Insights
              </p>
            </Copy>
            <DesktopView />
          </div>

          <FadeIn
            delay={0.4}
            className="flex justify-center md:justify-end w-full md:w-10/12 lg:w-10/12 mt-4 sm:mt-0 -z-10 md:z-0"
          >
            <div className="relative aspect-square w-full xl:max-w-120 3xl:max-w-140 rounded-[3%] overflow-hidden shadow-2xl bg-slate-400 flex items-center justify-center">
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
    <p className="text-lg mt-6 text-justify">
      Identified 12% revenue leakage and reduced reporting effort by 70% using
      SQL, Python, and Power BI
    </p>

    <div className="pt-2">
      <a
        href="#projects"
        className="inline-flex items-center justify-center w-full py-3 bg-black text-white text-base rounded-full mt-8"
      >
        View Projects
      </a>
      <a
        href="/assets/certificates/Nikhilesh_resume.pdf"
        target="_blank"
        className="inline-flex items-center justify-center w-full py-2.5 bg-transparen text-black border border-black text-base rounded-full mt-3"
      >
        Download Resume
      </a>
    </div>
  </div>
);

const DesktopView = () => {
  return (
    <div className="hidden sm:flex flex-col items-start">
      <Copy delay={0.6}>
        <p className="text-lg md:text-base xl:text-lg 3xl:text-xl w-11/12 xl:w-120 2xl:w-155 3xl:w-140 text-left inline-block md:mt-4 xl:mt-5 3xl:mt-8">
          Identified 12% revenue leakage and reduced reporting effort by 70%
          using SQL, Python, and Power BI
        </p>
      </Copy>

      <div className="flex gap-3 3xl:gap-6 xl:mt-2 3xl:mt-6">
        <Copy delay={0.8}>
          <Button
            href="#projects"
            className="xl:text-lg py-2 px-4 mt-8"
            cursorText="Check"
          >
            View Projects
          </Button>
        </Copy>
        <Copy delay={0.8}>
          <Button
            href="/assets/certificates/Nikhilesh_resume.pdf"
            target="_blank"
            className="xl:text-lg py-2 px-4  text-black bg-transparent mt-8 underline underline-offset-6 shadow-none hover:shadow-none"
            cursorText="Check"
          >
            Download Resume
          </Button>
        </Copy>
      </div>
    </div>
  );
};
