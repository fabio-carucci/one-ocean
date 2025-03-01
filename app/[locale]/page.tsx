import AboutSection from "@/components/homepage/about";
import AboutFoundation from "@/components/homepage/about-foundation";
import HeroSection from "@/components/homepage/hero";

const Homepage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AboutFoundation />
    </>
  );
};

export default Homepage;
