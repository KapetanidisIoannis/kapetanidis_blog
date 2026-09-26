import React from "react";
import HeroSectionCSS from "./HeroSection.module.css";

export default function HeroSection(props) {
  return <div className={HeroSectionCSS.sectionInfo}>{props.sectionInfo}</div>;
}
