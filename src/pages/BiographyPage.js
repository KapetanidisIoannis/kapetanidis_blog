import React from "react";
import HeroSection from "../components/Global/HeroSection";
import BioSection from "../components/BiographyPage/BioSection";

export default function BiographyPage() {
  return (
    <>
      <HeroSection sectionInfo={"ΣΧΕΤΙΚΑ ΜΕ ΤΟΝ ΚΩΣΤΑ ΚΑΠΕΤΑΝΙΔΗ"} />
      <BioSection />
    </>
  );
}
