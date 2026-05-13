import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Rank from "@/sections/Rank";
import FeaturedWork from "@/sections/FeaturedWork";
import Expertise from "@/sections/Expertise";
import Services from "@/sections/Services";
import Why from "@/sections/Why";
import CTA from "@/sections/CTA";
import Idea from "@/sections/Idea";
import Booking from "@/sections/Booking";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Rank />
      <FeaturedWork />
      <Expertise />
      <Services />
      <Why />
      <CTA />
      <Idea />
      <Booking />
      <Footer />
    </main>
  );
}
