import Box from "@mui/material/Box";
import bookcover from "./../../images/bookCover.png";
import BookSectionCSS from "./BookSection.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomButton from "../Global/CustomButton";
import SectionText from "../styled/setctionText";

export default function BookSection() {
  return (
    <section className={BookSectionCSS.book_section}>
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <SectionTitle marginBottom="0">Η Δύση του </SectionTitle>
            <SectionTitle> Ποντιακού Ελληνισμού</SectionTitle>
            <SectionText>
              Ένα ταξίδι στον χρόνο μέσα απο τις σελίδες της εφημερίδας “Εποχή”
              που εξέδιδε ο δημοσιογράφος Νίκος Καπετανίδης στην Τραπεζούντα τα
              χρόνια 1918-1921.
            </SectionText>
            <CustomButton destination={"book"} text={"Μάθετε Περισσότερα"} />
          </div>
          <div className={BookSectionCSS.image}>
            <img
              src={bookcover}
              className={BookSectionCSS.book_image}
              style={{
                transition: "transform 0.3s",
              }}
              alt="Description of the image"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.025)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>
      </Box>
    </section>
  );
}
