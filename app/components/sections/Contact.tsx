"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Copy from "../ui/Copy";
import { Button } from "../ui/Button";


export const Contact = () => {
  return (
    <footer className="flex justify-center items-center pt-28 lg:pt-48 3xl:pt-60 pb-4">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] xl:w-[50%] 2xl:w-[45%] mx-auto text-center">
        <Heading />
        <Message />
        <ContactLinks />
        <p className="text-sm text-gray-500 dark:text-zinc-600 mt-32 2xl:mt-20 3xl:mt-32 mb-2">
          © {new Date().getFullYear()} Nikhilesh Varasala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Heading = () => (
  <h2 className="flex flex-col items-center text-[16vw] sm:text-[14vw] md:text-[12vw] xl:text-[8vw] 3xl:text-[7vw] tracking-[-6%] leading-[95%] mx-auto text-black">
    <Copy delay={0.1}>
      <span className="flex justify-between">
        <span className="tracking-[-4%]">LET'S</span>
        <span>BUILD</span>{" "}
      </span>
    </Copy>
    <Copy delay={0.2}>
      <span className="flex">SOMETHING</span>
    </Copy>
    <Copy delay={0.3}>
      <span className="">AWESOME</span>
    </Copy>
  </h2>
);

const Message = () => (
  <div className="flex flex-col items-center text-xl md:text-[3.5vw] lg:text-[3vw] xl:text-2xl 3xl:text-[1.6rem] tracking-tighter w-full lg:w-8/12 xl:w-[80%] 2xl:w-[85%] xl:leading-[140%] 2xl:leading-[120%] mt-14 xl:mt-16 2xl:mt-20 mx-auto text-justify">
    <Copy delay={0.5}>
      <span className="block text-center">
        Available for full-time opportunities.
      </span>
    </Copy>
    <Copy delay={0.5}>
      <span className="block text-center">Let’s discuss how I can add</span>
    </Copy>
    <Copy delay={0.5}>
      <span className="block text-center">value to your team.</span>
    </Copy>

    <Copy delay={0.7}>
      <Button
        href="mailto:nikhileshvarasala09@gmail.com"
        className="mt-8 py-2 px-6 text-xl"
        cursorText="Contact"
      >
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <span>Email</span>
        </div>
      </Button>
    </Copy>
  </div>
);

const ContactLinks = () => (
  <div className="flex justify-center gap-6 mt-24">
    <Link
      href="https://www.linkedin.com/in/nikhilesh-varasala/"
      className="text-gray-400 hover:hover:text-gray-600 transition-colors"
    >
      <Linkedin size={18} />
      <span className="sr-only">LinkedIn</span>
    </Link>
    <Link
      href="https://github.com/Nikhilesh264"
      className="text-gray-400 hover:text-gray-600 transition-colors"
    >
      <Github size={18} />
      <span className="sr-only">GitHub</span>
    </Link>
  </div>
);

export default Contact;
