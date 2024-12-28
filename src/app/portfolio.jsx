import "./globals.css";
import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ICons from "./components/Hero/ICons";
export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};
export default function Home() {
  return (
    <>
      <main className=" max-w-[1250px] mx-auto pt-4 relative max-md:overflow-x-hidden dark text-foreground bg-background">
        <Navbar />
        <div className="max-md:mt-20">
          <Hero />
        </div>
        <div className="min-h-screen  max-md:py-8" id="about">
          <About />
        </div>
        <div className="fixed left-3 bottom-10 z-20 max-sm:left-1 max-xl:left-3">
          <ICons />
        </div>
        <div
          className="flex items-center justify-center h-screen max-2xl:h-fit"
          id="skills"
        >
          <Skills />
        </div>
        <div
          className="flex items-center justify-center h-screen max-2xl:h-fit"
          id="project"
        >
          <Projects />
        </div>
        <div className="flex items-center justify-center h-fit overflow-y-hidden">
          <Contact />
        </div>
      </main>
      <footer className="w-full h-12 bg-blue-500 flex items-center  ">
        <h1 className="w-fit mx-auto">Judi-Legend hightlight 2024</h1>
      </footer>
    </>
  );
}
