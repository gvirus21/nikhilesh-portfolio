import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Story from "./components/Story";

export default function Home() {
  return (
    <main className="text-black overflow-x-hidden max-w-400 mx-auto px-4 lg:px-10 xl:px-14">
      <Navbar />
      <Hero />
      <Story />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}

// Add hero secion animation
// smooth scroll
// Fix if any responsivness issue.

// add certicicates
// final touch up.
