import Image from "next/image";
import Hero from "../components/Hero";
import FeaturedAlliances from "../components/FeaturedAlliances";
import HealthWellness from "../components/HealthWellness";
import InsuranceFinance from "../components/InsuranceFinance";
import LifestyleRetail from "../components/LifestyleRetail";
import HowItWorks from "../components/HowItWorks";
import ExclusivePromotion from "../components/ExclusivePromotion";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedAlliances />
      <HealthWellness />
      <InsuranceFinance />
      <LifestyleRetail />
      <HowItWorks />
      <ExclusivePromotion />
      <Footer />
    </>
  );
}
