import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/75.JPG";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function ArchiSection4() {
  return (
    <section
      style={{
        backgroundColor: "#90a9ae",
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
              Σχέδιο Μητροπόλεως της επαρχίας Ροδοπόλεως εν Λιβερά, υπό του
              αρχιτέκτονος Μ. Μυρίδου 17/8/1918- Δυτική Πρόσοψις
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
