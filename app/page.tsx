import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Blueprint from "@/components/sections/Blueprint";
import Timeline from "@/components/sections/Timeline";
import HallOfFame from "@/components/sections/HallOfFame";
import Experience from "@/components/sections/Experience";
import Community from "@/components/sections/Community";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#090909" }}>
      <Navbar />
      <Hero />
      <Blueprint />
      <Timeline />
      <HallOfFame />
      <Experience />
      <Community />
      <Footer />
    </main>
  );
}
