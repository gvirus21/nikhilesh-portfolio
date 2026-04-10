"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Copy from "../ui/Copy";

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
  <div className="text-xl md:text-[3.5vw] lg:text-[3vw] xl:text-2xl 3xl:text-[1.6rem] tracking-tighter w-full lg:w-8/12 xl:w-[80%] 2xl:w-[85%] xl:leading-[140%] 2xl:leading-[120%] mt-14 xl:mt-16 2xl:mt-20 mx-auto text-justify">
    <Copy delay={0.5}>
      <span className="block text-center">I'm currently open for new </span>
    </Copy>
    <Copy delay={0.5}>
      <span className="block text-center">
        opportunities in Data Analytics.
      </span>
    </Copy>
    <Copy delay={0.6}>
      <span className="block text-center">
        Feel free to reach out to me via
      </span>
    </Copy>
    <div className="flex justify-between w-[68%] md:w-[50%] lg:w-[70%] xl:w-[48%] 3xl:w-[28%] mx-auto">
      <Copy delay={0.7}>
        <button
          onClick={() =>
            (window.location.href = "mailto:nikhileshvarasala09@gmail.com")
          }
          className="px-4 py-0 rounded-full text-sm lg:text-lg bg-black text-white cursor-pointer tracking-wider xl:tracking-normal"
        >
          Email{" "}
        </button>
      </Copy>
      <Copy delay={0.8}>
        <div className="inline text-center">to discuss further.</div>
      </Copy>
    </div>
  </div>
);

const ContactLinks = () => (
  <div className="flex justify-center gap-6 mt-20">
    <Link
      href="mailto:nikhileshvarasala09@gmail.com"
      className="text-gray-400 hover:hover:text-gray-600 transition-colors"
    >
      <Mail size={18} />
      <span className="sr-only">Email</span>
    </Link>
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
