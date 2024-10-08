import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AllFeatured from "./components/ui/AllFeatured";
import HowItWorks from "./components/HowItWorks";
import InsideUs from "./components/insideUs/InsideUs";
import HowWeWork from "./components/howWeWork/HowWeWork";
import Pricing from "./components/pricing/Pricing";
import Features from "./components/features/Features";
import FreeWeekFormComponent from "./components/FreeWeekFormComponent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <HeroSection />
      <AllFeatured />
      <HowItWorks />

      <InsideUs />
      <HowWeWork />
      <Pricing />
      <Features />
      <FreeWeekFormComponent />
      <Footer />
    </div>
  );
}
