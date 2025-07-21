
import HeroSection from "@/components/HeroSection";
import { FormProvider } from "@/contexts/FormContext";
import Form from "@/components/Form";
import Stat from "@/components/Stats";
import ExperienceSection from "@/components/ExperienceSection";
import Story from "@/components/Story";
import ExploreSection from "@/components/ExploreSection";
import FeedBacks from "@/components/FeedBacks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {

  return (
    <div className="scroll-smooth w-full overflow-auto">
      <NavBar />
      <FormProvider>
        <HeroSection />
        <Form />
        <Stat />
        <ExperienceSection />
        <Story />
        <ExploreSection />
      </FormProvider>
      <FeedBacks />
      <Contact />
      <Footer />
    </div>
  );
}
