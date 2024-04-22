import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ICons from "./components/Hero/ICons";
export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};
export default function Home() {
  return (
    <main className="h-screen  max-w-[1800px] mx-auto px-6 pt-4 relative">
      <Navbar />
      <Hero />
      <About />
      <div className="fixed left-2 bottom-10">
        <ICons />
      </div>
    </main>
  );
}
// bg-[#181818]