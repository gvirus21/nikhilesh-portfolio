import { Hero, Story, EducationSection, Projects, Contact } from "./components/sections";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="text-black overflow-x-hidden mx-auto px-4 lg:px-10 xl:px-12 2xl:px-14">
      <Navbar />
      <Hero />
      <Story />
      <EducationSection />
      <Projects />
      <Contact />
    </main>
  );
}

// fix view projects button
// fix desktop scren
