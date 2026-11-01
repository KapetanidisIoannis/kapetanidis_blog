import React from "react";
import BookSection from "./../components/HomePage/BookSection";
import BiographySection from "../components/HomePage/BiographySection";
import BlogSection from "./../components/HomePage/BlogSection";
import KapetanidisSection from "../components/HomePage/KapetanidisSection";

export default function HomePage() {
  return (
    <main>
      <BiographySection />
      <KapetanidisSection />
      <BookSection />
    </main>
  );
}
