"use client";

import Copy from "../ui/Copy";

const skillsData = [
  {
    category: "Core Stack",
    skills: ["SQL (MySQL)", "Python (Pandas, NumPy)", "Power BI (DAX, Power Query)", "Excel"]
  },
  {
    category: "Data Analysis & Engineering",
    skills: [
      "ETL Pipelines",
      "Data Cleaning & Transformation",
      "Exploratory Data Analysis",
      "KPI Design",
      "Dashboard Automation"
    ]
  },
  {
    category: "Visualization & Reporting",
    skills: ["Power BI", "Tableau", "Streamlit"]
  },
  {
    category: "Business Analytics",
    skills: [
      "Revenue Analysis",
      "Procurement Analytics",
      "Performance Monitoring",
      "Stakeholder Communication",
      "Process Improvement"
    ]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="pt-24 lg:pt-40 3xl:pt-60 max-w-550 mx-auto">
      <div>
        <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-7xl 3xl:text-8xl font-thin tracking-[-4px] md:tracking-[-6px] xl:tracking-[-4px] 3xl:tracking-[-6px]">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 lg:mt-20 xl:mt-24 3xl:w-11/12 xl:mx-auto">
          {skillsData.map((item, index) => (
            <Copy delay={0.2 + (index * 0.1)} key={index}>
              <div className="flex flex-col gap-4 p-6 md:p-8 border-2 border-black/10 rounded-3xl transition-colors duration-300 h-full shadow-xl">
                <div>
                  <h3 className="text-2xl md:text-4xl tracking-tighter py-1">
                    {item.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="text-sm md:text-base font-light opacity-80 px-4 py-2 my-1 border border-black/10 shadow-md rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
