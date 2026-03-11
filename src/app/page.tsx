import About from "@/components/About";
import Contact from "@/components/Contact";
import CP from "@/components/CP";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skill";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Hero />
     <About/>
     <Skills />
     <CP/>
     <Projects/>
     <Education />
     <Contact />
    </div>
  );
}
