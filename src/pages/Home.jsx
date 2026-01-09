import Hero from "../components/Hero";
import Mision from "../components/Mision";
import Servicios from "../components/Servicios";
import Beneficios from "../components/Beneficios";
import Companias from "../components/Companias";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import Divider from "../components/Divider";
import ContactSection from "../components/ContactSection";
import TeamPreview from "../components/TeamPreview";
export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Mision />\
      <Divider />
      <TeamPreview />
      <Divider />
      <Servicios />
      <Divider />
      <Beneficios />
      <Divider />
      <Companias />
      <Divider />
      <Reviews />
      <Divider />
      <CTA />
      <ContactSection />
    </>
  );
}
