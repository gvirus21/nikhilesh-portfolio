"use client";

import Link from "next/link";
import { useCursor } from "../providers/CursorProvider";

const projects = [
  {
    title: "Amazon Sales Performance Analysis",
    tech: "SQL, MySQL, Power BI",
    github: "https://github.com/Nikhilesh264/amazon-sales-analysis",
    points: [
      "Consolidated 1,000+ multi-branch sales records into structured analytical tables for revenue and pricing analysis",
      "Designed KPI framework tracking revenue contribution, pricing impact, and demand shifts across segments",
      "Identified ~12% revenue leakage through segment-level performance diagnostics",
      "Automated dashboards reducing manual reporting effort by 70% and accelerating decision cycles",
    ],
  },
  {
    title: "Supplier Quality & Procurement Analytics Platform",
    tech: "Power BI, DAX, Power Query",
    github: " https://github.com/Nikhilesh264/coffee-quality-powerbi-analysis",
    points: [
      "Analyzed 1,300+ supplier samples to evaluate defect rates, cost efficiency, and sourcing reliability",
      "Applied correlation analysis to measure defect impact on supplier performance scoring",
      "Built benchmarking dashboards ranking suppliers by risk exposure, specialty performance, and cost factors",
      "Automated data workflows cutting manual processing by 60% and improving procurement decisions",
    ],
  },
  {
    title: "Operational Performance & Risk Monitoring Dashboard",
    tech: "Python, Pandas, Streamlit",
    github:
      "https://github.com/Nikhilesh264/authentication-analytics-dashboard",
    points: [
      "Processed and cleaned 15,000+ operational event logs to analyze usage trends and peak load behavior",
      "Engineered KPIs for system efficiency, anomaly frequency, and operational bottlenecks",
      "Implemented anomaly detection logic to proactively flag abnormal usage patterns",
      "Built real-time dashboards reducing manual analysis effort by 80% and improving response time",
    ],
  },
];

interface Project {
  title: string;
  tech: string;
  github: string;
  points: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { setCursorActive, setCursorText } = useCursor();

  return (
    <div
      onMouseEnter={() => {
        setCursorActive(true);
        setCursorText("Open");
      }}
      onMouseLeave={() => {
        setCursorActive(false);
        setCursorText("");
      }}
      className="xl:min-h-150 w-90 md:w-110 lg:w-140 xl:w-[28vw] 3xl:w-[18vw] p-4 pb-10 md:pb-12 lg:pb-20 xl:p-3 bg-[#f5f5f5] rounded-3xl border-white/40 inset-shadow-sm border-14 shadow-2xl"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-2">
        <h3 className="text-4xl md:text-5xl lg:text-7xl xl:text-[2.6vw] 2xl:text-[2.5rem] tracking-tighter">
          {project.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2 mt-8 lg:mt-12 xl:mt-6">
        {project.tech.split(",").map((item, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center bg-[#D5FF5F] shadow-xl px-3 py-1 text-sm lg:text-xl xl:text-sm text-black rounded-full uppercase whitespace-nowrap"
          >
            <p>{item.trim()}</p>
          </div>
        ))}
      </div>
      <ul className="space-y-6 lg:space-y-10 xl:space-y-6 text-black/80 lg:text-2xl list-disc list-inside mt-12 lg:mt-16 xl:mt-12">
        {project.points.map((point, i) => (
          <li key={i} className="flex justify-between items-start list-none">
            <span className="h-1.5 min-w-1.5 rounded-full bg-black mr-4" />
            <p className="-mt-3 lg:text-2xl xl:text-base">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-24 lg:pt-40 3xl:pt-60 max-w-550 mx-auto"
    >
      <div>
        <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-7xl 3xl:text-8xl font-thin tracking-[-4px] md:tracking-[-6px] xl:tracking-[-4px] 3xl:tracking-[-6px]">
          Projects
        </h2>
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 md:gap-6 lg:gap-10 justify-center items-center xl:justify-between xl:items-start mt-10 lg:mt-20 xl:mt-18  3xl:w-8/12 mx-auto">
          {projects.map((project, index) => (
            <Link href={project.github} key={index} className="inline-block">
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
