// import Image from "next/image";
import HomePage from "./component/Banner";
import CategoryCards from "./component/CategoryCards";
import { Main } from "next/document";
import TrustedPharmacySection from "./component/TrustedPharmacySection";
import HeroSection from "./component/HeroSection";
import ServicesGrid from "./component/ServiceComponent";
import WhyChooseUsSection from "./component/WhyChooseUsSection";
import MemberFormSection from "./component/MemberFormSection";
import MeetOurPharmacist from "./component/PharmacyCard";
import TestimonialSection from "./component/Testimonial";
import NewsletterSignup from "./component/SignupPage";
import CopyrightFooter from "./component/CopyrightFooter";
import ServicesSection from "./component/ServiceComponents";

export default function Home() {
  return (
    <main>
    <HomePage />
    <CategoryCards />

    <TrustedPharmacySection/>
    <HeroSection />
    <ServicesSection/>
    <ServicesGrid  />
    <WhyChooseUsSection/>
    <MemberFormSection />
    <MeetOurPharmacist/>
    <TestimonialSection/>
    <NewsletterSignup/>
    </main>
  );
}
