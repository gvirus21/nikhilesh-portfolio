import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <footer className="flex justify-center items-center pt-32 lg:pt-48 pb-4">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] xl:w-[50%] 2xl:w-[45%] mx-auto text-center">
        <Heading />
        <Message />
        <ContactLinks />
        <p className="text-sm md:text-base text-gray-500 dark:text-zinc-600 mt-20">
          © {new Date().getFullYear()} Nikhilesh Varasala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const Heading = () => (
  <h2 className="flex flex-col items-center text-[16vw] sm:text-[14vw] md:text-[12vw] xl:text-[10vw] 2xl:text-[10rem] tracking-[-8%] leading-[95%] mx-auto text-black">
    <span className="flex justify-between">
      <span className="tracking-[-4%]">LET'S</span>
      <span>BUILD</span>{" "}
    </span>
    <span className="flex">SOMETHING</span>
    <span className="">AWESOME</span>
  </h2>
);

const Message = () => (
  <p className="text-xl md:text-[3.5vw] lg:text-[3vw] xl:text-3xl tracking-tighter w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-8/12 xl:leading-[140%] 2xl:leading-[120%] mt-14 xl:mt-24 2xl:mt-20 mx-auto text-justify">
    I'm currently open for new{" "}
    <span className="font-medium">opportunities</span> in Data Analytics. Feel
    free to reach out to me{" "}
    <span className="px-4 py-1 rounded-full text-lg bg-black text-white">
      [EMAIL_ADDRESS]
    </span>{" "}
    to discuss further.
  </p>
);

const ContactLinks = () => (
  <div className="flex justify-center gap-6 mt-14">
    <Link
      href="mailto:nikhileshvarasala09@gmail.com"
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      <Mail size={24} />
      <span className="sr-only">Email</span>
    </Link>
    <Link
      href="#"
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      <Linkedin size={24} />
      <span className="sr-only">LinkedIn</span>
    </Link>
    <Link
      href="#"
      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      <Github size={24} />
      <span className="sr-only">GitHub</span>
    </Link>
  </div>
);
