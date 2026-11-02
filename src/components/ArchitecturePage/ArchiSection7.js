import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/78.JPG";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function ArchiSection3() {
  return (
    <section
      style={{
        backgroundColor: "#e2dbcf",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Έγχρωμο σχέδιο δύο όψεων κατοικίας εν Λιβερά Πόντου το 1918 υπό
              του αρχιτέκτονος Μ. Μυρίδου
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
