import HeroSection from "../components/Global/HeroSection";
import DetailedBlogSection from "../components/BlogPage/DetailedBlogSection";

export default function BlogPage() {
  return (
    <>
      <HeroSection sectionInfo={"ΔΗΜΟΣΙΕΥΣΕΙΣ"} />
      <DetailedBlogSection />
    </>
  );
}
