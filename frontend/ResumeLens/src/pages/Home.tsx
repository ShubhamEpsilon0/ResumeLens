import { Box } from "@chakra-ui/react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorks from "../components/home/HowItWorks";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

const Home: React.FC = () => {
  return (
    <Box>
      <Box></Box>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </Box>
  );
};

export default Home;
