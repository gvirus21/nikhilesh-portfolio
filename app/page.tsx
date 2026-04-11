import { Hero, Story, EducationSection, Projects, Contact, Skills } from "./components/sections";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="text-black overflow-x-hidden mx-auto px-4 lg:px-10 xl:px-12 2xl:px-14">
      <Navbar />
      <Hero />
      <Story />
      <Skills />
      <EducationSection />
      <Projects />
      <Contact />
    </main>
  );
}

// fix view projects button bug
// mobile screen 
