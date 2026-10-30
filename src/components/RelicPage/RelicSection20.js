import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1921c.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection20() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#f8f4ef",
      }}
    >
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Το τελευταίο γράμμα από την φυλακή της Αμάσειας από τον Νίκο προς
              την γυναίκα του Αγλαΐα και την οικογένειά του. Στις 21 Σεπτεμβρίου
              εκτελέστηκε με την κραυγή «Ζήτω η Ελλάς»
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
