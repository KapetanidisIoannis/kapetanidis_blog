import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/14.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection10() {
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
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Ο Νίκος με φιλική παρέα. Μάλλον πρόκειται για οικογενειακή
              συγκέντρωση γιατί διακρίνουμε στα δεξιά του Νίκου και ένα παιδί
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
