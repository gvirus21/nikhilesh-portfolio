import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Copy from "../ui/Copy";

export const Contact = () => {
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
  <div className="text-xl md:text-[3.5vw] lg:text-[3vw] xl:text-3xl tracking-tighter w-12/12 lg:w-8/12 xl:w-[70%] 2xl:w-8/12 xl:leading-[140%] 2xl:leading-[120%] mt-14 xl:mt-24 2xl:mt-20 mx-auto text-justify">
    <Copy delay={0.5}>
      <span className="block text-center">I'm currently open for new </span>
    </Copy>
    <Copy delay={0.5}>
      <span className="block text-center">
        opportunities in Data Analytics.
      </span>
    </Copy>
    <Copy delay={0.6}>
      <span className="block text-center">Feel free to reach out to me </span>
    </Copy>
    <div className="flex justify-between w-4/6 mx-auto">
      <Copy delay={0.7}>
        <button className="px-4 py-1 rounded-full text-sm lg:text-lg bg-black text-white">
          [EMAIL_ADDRESS]
        </button>
      </Copy>
      <Copy delay={0.8}>
        <div className="inline text-center">to discuss</div>
      </Copy>
    </div>
    <Copy delay={0.8}>
      <p className="text-center">further.</p>
    </Copy>
  </div>
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

export default Contact;
