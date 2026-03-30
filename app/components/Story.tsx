const Story = () => {
  return (
    <div className="pt-32 lg:pt-40">
      <h1 className="text-center text-7xl md:text-7xl lg:text-8xl tracking-[-4px] md:tracking-[-6px]">
        My<span className="tracking-[-10px]"> </span>Story
      </h1>

      <div className="flex flex-col text-justify lg:text-justify mx-auto items-center mt-20 lg:mt-20 text-xl md:text-xl lg:text-2xl font-light leading-relaxed px-2">
        <div className="w-full md:w-10/12 lg:w-10/12 xl:w-[60%]">
          <p className="">
            I am a Data Analyst with a strong foundation in product analytics,
            market evaluation, and performance intelligence.
          </p>
          <p className="mt-4">
            Experienced in cleaning and structuring raw datasets, identifying
            statistically meaningful trends, and translating insights into
            strategic recommendations. Skilled in SQL, Power BI, Excel, and
            Python for building automated dashboards, KPI frameworks, and
            analytical models that support pricing, product prioritization, and
            operational decisions.
          </p>
        </div>

        <div className=" h-[30vh] md:h-[36vh] xl:h-[70vh] xl:max-h-140 bg-slate-400 aspect-video mt-12 lg:mt-20 xl:mt-32 rounded-[12px] lg:rounded-[20px] xl:rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default Story;
