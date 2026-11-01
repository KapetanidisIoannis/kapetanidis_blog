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
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Σχέδιο Μητροπόλεως της επαρχίας Ροδοπόλεως εν Λιβερά, υπό του
              αρχιτέκτονος Μ. Μυρίδου 17/8/1918- Δυτική Πρόσοψις
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
