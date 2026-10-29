import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/9.jpg";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosNKSection() {
  return (
    <section
      style={{
        backgroundColor: "#e2dbcf",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Ο Νίκος Καπετανίδης σε παιδική ηλικία μελετάει ένα βιβλίο. Η αγάπη
              του για το διάβασμα θα τον χαρακτηρίσει για όλη του την ζωή ΦΩΤΟ
            </p>
          </Grid>

          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
