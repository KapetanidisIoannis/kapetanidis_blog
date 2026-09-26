import React from "react";
import HeroSection from "../components/Global/HeroSection";
import Section1 from "../components/KapetanidisPage/Section1";
import Section2 from "../components/KapetanidisPage/Section2";
import Section3 from "../components/KapetanidisPage/Section3";
import Section4 from "../components/KapetanidisPage/Section4";
import Section5 from "../components/KapetanidisPage/Section5";
import Section6 from "../components/KapetanidisPage/Section6";

export default function NikosKapetanidis() {
  return (
    <>
      <HeroSection sectionInfo={"Σχετικά με τον Νίκο Καπετανίδη"} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}
