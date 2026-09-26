import React from "react";
import HeroSection from "../components/Global/HeroSection";
import FirstBook from "../components/BookPage/FirstBook";
import BookContents from "../components/BookPage/BookContents";

export default function BookPage() {
  return (
    <>
      <HeroSection sectionInfo={"Βιβλίο Συγγραφέα"} />
      <FirstBook />
      <BookContents />
    </>
  );
}
