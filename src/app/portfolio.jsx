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
      <main className=" max-w-[1250px] mx-auto pt-4 relative">
        <Navbar />
        <Hero />
        <div className="flex items-center justify-center">
          <About />
        </div>
        <div className="fixed left-8 bottom-10">
          <ICons />
        </div>
        <div className="flex items-center justify-center">
          <Skills />
        </div>
        <div className="flex items-center justify-center">
          <Projects />
        </div>
        <div className="flex items-center h-[100vh]">
          <Contact />
        </div>
      </main>
      <footer className="w-full h-12 bg-blue-500 flex items-center items-center  ">
        <h1 className="w-[300px] mx-auto">Judi-Legend hightlight 2024</h1>
      </footer>
    </>
  );
}
