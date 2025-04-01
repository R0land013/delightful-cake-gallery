
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedCakes from "@/components/FeaturedCakes";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sweet Delights - Handcrafted Cakes for Every Occasion</title>
        <meta name="description" content="Sweet Delights offers handcrafted cakes made with love using only the finest ingredients. Perfect for birthdays, weddings, and special occasions." />
        <link rel="canonical" href="https://sweetdelights.com" />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <AboutSection />
        <FeaturedCakes />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
