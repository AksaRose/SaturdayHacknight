import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Blueprint from "@/components/sections/Blueprint";
import GetSelected from "@/components/sections/GetSelected";
import Timeline from "@/components/sections/Timeline";
import AfterRegister from "@/components/sections/AfterRegister";
import TinkerSpace from "@/components/sections/TinkerSpace";
import PreviousNights from "@/components/sections/PreviousNights";
import HallOfFame from "@/components/sections/HallOfFame";
import Experience from "@/components/sections/Experience";
import Community from "@/components/sections/Community";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen" style={{ backgroundColor: "#090909" }}>
      <Navbar />
      <Hero />
      <Philosophy />
      <Blueprint />
      <GetSelected />
      <Timeline/>
      <AfterRegister />
      <TinkerSpace />
      <PreviousNights />
      <HallOfFame />
      <Experience />
      <Community />
      <FAQ />
      <Footer />
    </main>
  );
}
