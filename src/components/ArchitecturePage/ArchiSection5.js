import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/74.JPG";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function ArchiSection3() {
  return (
    <section
      style={{
        backgroundColor: "#f8f4ef",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Σχέδιο εξοχικής κατοικίας , σχεδιασμένο υπο του αρχιτέκτονος Μ.
              Μυρίδου , εν Λιβερά 19 φεβρουαρίου 1915
            </p>
          </div>

          <div>
            <CustomImage src={image} />
          </div>
        </div>
      </Box>
    </section>
  );
}
