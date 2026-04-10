import Copy from "../ui/Copy";
import Image from "next/image";

export const Story = () => {
  return (
    <div className="pt-24 lg:pt-40 max-w-400 mx-auto">
      <Copy delay={0.1}>
        <h1 className="text-center text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl tracking-[-3px] md:tracking-[-2px] leading-28 2xl:leading-36">
          My<span className="tracking-[-10px]"> </span>Story
        </h1>
      </Copy>

      <div className="flex flex-col text-justify lg:text-justify mx-auto items-center mt-8 lg:mt-20 text-lg md:text-xl lg:text-2xl xl:text-2xl font-light leading-relaxed px-2">
        <div className="w-full md:w-9/12 lg:w-10/12 xl:w-[60%] 2xl:w-[70%]">
          <Copy delay={0.3}>
            <p className="">
              I’m a Data Analyst focused on turning raw data into business
              impact. My work includes analyzing sales performance, optimizing
              procurement processes, and building operational dashboards that
              track risk and efficiency in real time.
            </p>
          </Copy>
          <Copy delay={0.4}>
            <p className="mt-4">
              In my Amazon Sales Analysis project, I identified key revenue
              drivers and uncovered patterns that directly influence product
              performance. In procurement analytics, I built frameworks to
              evaluate supplier quality and spending efficiency, helping
              highlight cost-saving opportunities. I’ve also developed KPI
              dashboards to monitor operations and detect performance gaps
              early.
            </p>
          </Copy>
          <Copy delay={0.6}>
            <p className="mt-4">
              I use SQL, Python, Power BI, and Excel to clean, structure, and
              analyze data—but tools are secondary. My priority is delivering
              insights that lead to clear, confident decisions.
            </p>
          </Copy>
        </div>

        <div className="relative h-[30vh] md:h-[36vh] xl:h-[70vh] xl:max-h-140 2xl:max-h-180 bg-slate-400 aspect-16/8 2xl:aspect-18/9 mt-12 lg:mt-20 xl:mt-32 rounded-[12px] lg:rounded-[20px] xl:rounded-[16px] overflow-hidden">
          <Image
            src="/assets/images/about_image.JPG"
            alt="About Nikhilesh"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
