import Copy from "../Copy";

const Story = () => {
  return (
    <div className="pt-32 lg:pt-40">
      <Copy delay={0.1}>
        <h1 className="text-center text-7xl md:text-7xl lg:text-8xl 2xl:text-9xl tracking-[-4px] md:tracking-[-6px] leading-28 2xl:leading-36">
          My<span className="tracking-[-10px]"> </span>Story
        </h1>
      </Copy>

      <div className="flex flex-col text-justify lg:text-justify mx-auto items-center mt-20 lg:mt-20 text-xl md:text-xl lg:text-2xl 2xl:text-3xl font-light leading-relaxed px-2">
        <div className="w-full md:w-10/12 lg:w-10/12 xl:w-[65%] 2xl:w-[70%]">
          <Copy delay={0.3}>
            <p className="">
              I am a Data Analyst with a strong foundation in product analytics,
              market evaluation, and performance intelligence.
            </p>
          </Copy>
          <Copy delay={0.5}>
            <p className="mt-4">
              Experienced in cleaning and structuring raw datasets, identifying
              statistically meaningful trends, and translating insights into
              strategic recommendations. Skilled in SQL, Power BI, Excel, and
              Python for building automated dashboards, KPI frameworks, and
              analytical models that support pricing, product prioritization,
              and operational decisions.
            </p>
          </Copy>
        </div>

        <div className=" h-[30vh] md:h-[36vh] xl:h-[70vh] xl:max-h-140 2xl:max-h-180 bg-slate-400 aspect-video 2xl:aspect-18/9 mt-12 lg:mt-20 xl:mt-32 rounded-[12px] lg:rounded-[20px] xl:rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default Story;
