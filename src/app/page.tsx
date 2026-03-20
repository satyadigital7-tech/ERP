import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import TrustedSchools from "@/components/sections/TrustedSchools";
import Testimonials from "@/components/sections/Testimonials";
import ProductScreenshots from "@/components/sections/ProductScreenshots";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustedSchools />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}
