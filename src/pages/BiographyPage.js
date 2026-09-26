import React from "react";
import HeroSection from "../components/Global/HeroSection";
import BioSection from "../components/BiographyPage/BioSection";

export default function BiographyPage() {
  return (
    <>
      <HeroSection sectionInfo={"Σχετικά με τον Κώστα Καπετανίδη"} />
      <BioSection />
    </>
  );
}
