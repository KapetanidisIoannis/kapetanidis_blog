import React from "react";
import HeroSection from "../components/Global/HeroSection";
import HistorySection from "../components/HistoryPage/HistorySection";
import HistorySection2 from "../components/HistoryPage/HistorySection2";
import HistorySection3 from "../components/HistoryPage/HistorySection3";
import HistorySection4 from "../components/HistoryPage/HistorySection4";

export default function HistoryPage() {
  return (
    <>
      <HeroSection sectionInfo={"ΙΣΤΟΡΙΚΟ ΣΩΜΑΤΕΙΟΥ ΚΑΙ ΜΕΛΗ"} />
      <HistorySection />
      <HistorySection2 />
      <HistorySection3 />
      <HistorySection4 />
    </>
  );
}
