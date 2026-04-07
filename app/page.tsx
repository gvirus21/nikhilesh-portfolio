import { Hero, Story, EducationSection, Projects, Contact } from "./components/sections";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="text-black overflow-x-hidden max-w-400 mx-auto px-4 lg:px-10 xl:px-14 2xl:px-4">
      <Navbar />
      <Hero />
      <Story />
      <EducationSection />
      <Projects />
      <Contact />
    </main>
  );
}

// add certicicates
// add images
// organise the folder strucure.

// Fix if any responsivness issue.
// final touch up.
