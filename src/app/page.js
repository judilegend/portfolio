import Navbar from "./components/Navbar";
import Image from "next/image";
import "./globals.css";
import Hero from './components/Hero/Hero'
export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};

export default function Home() {
  return (
    <main className="h-screen px-20 pt-4">
        <Navbar/>
        <Hero/>
    </main>
  );
}
