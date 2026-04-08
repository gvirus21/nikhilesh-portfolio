"use client";

import { useCursor } from "../providers/CursorProvider";
import { Button } from "../ui/Button";

const certifications = [
  {
    name: "Data Science Professional Certification",
    org: "OdinSchool Bootcamp",
    badge: "Data Science",
    url: "/assets/certificates/odinschool-data-science-certificate.pdf",
    color: { bg: "#EEF2FF", accent: "#4F46E5" },
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    name: "SQL & Databases Certification",
    org: "IBM (via edX)",
    badge: "Database & SQL",
    url: "/assets/certificates/ibm-sql-certificate.pdf",
    color: { bg: "#F0FDF4", accent: "#16A34A" },
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
];

const Education = () => {
  return (
    <div>
      <div className="border-l-2 border-gray-200 dark:border-zinc-800 pl-6 py-2">
        <h3 className="text-3xl md:text-3xl xl:text-4xl tracking-tighter">
          B.Tech, Artificial Intelligence & Data Science
        </h3>
        <p className="mt-4 text-xl tracking-tight opacity-60">
          Vignan&apos;s Institute of Information Technology
        </p>
        <p className="text-lg mt-1  opacity-60">(2021 - 2025)</p>
        <p className="mt-1 opacity-60">CGPA: 7.33/10</p>
      </div>

      <Button href="/assets/certificates/btech-certificate.pdf" target="_blank" className="mt-8" cursorText="Open">
        View Certificate
      </Button>
    </div>
  );
};

const Certifications = () => {
  const { setCursorActive, setCursorText } = useCursor();

  return (
    <div className="flex flex-col gap-3 mt-1 xl:w-4/12">
      {certifications.map((cert) => (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          key={cert.name}
          onMouseEnter={() => {
            setCursorActive(true);
            setCursorText("Show");
          }}
          onMouseLeave={() => {
            setCursorActive(false);
            setCursorText("");
          }}
          className="group bg-white rounded-2xl px-4 py-5 flex items-start gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer"
        >
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center "
            style={{ backgroundColor: cert.color.bg, color: cert.color.accent }}
          >
            {cert.icon}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[13.5px] font-medium text-black mb-0.5">
              {cert.name}
            </p>
            <p className="text-xs text-[#888]">{cert.org}</p>
          </div>

          {/* Badge */}
          <span
            className="text-[10px] font-medium tracking-wide px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 group-hover:bg-black! group-hover:text-white!"
            style={{ backgroundColor: cert.color.bg, color: cert.color.accent }}
          >
            {cert.badge}
          </span>
        </a>
      ))}
    </div>
  );
};

export const EducationSection = () => {
  return (
    <section className="pt-24 lg:pt-40">
      <h2 className="text-5xl md:text-6xl lg:text-8xl xl:text-7xl tracking-[-3px]">
        <span>Education &</span>
        <br /> Certifications
      </h2>
      <div className="mx-auto flex flex-col xl:flex-row justify-between gap-12 mt-8 lg:mt-14 w-full">
        <Education />
        <div className="xl:hidden h-0.5 w-full bg-black/5"></div>
        <Certifications />
      </div>
    </section>
  );
}

export default EducationSection;