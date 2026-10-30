import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1915b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection14() {
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
              Χειρόγραφο σημειώματα του Νίκου Καπετανίδη από το 1915 με τίτλο
              «Σημειώσεις σχετικά με τη Νεοελληνική φιλολογία». Υπογραφεί με το
              λογοτεχνικό ψευδώνυμο Σπύρος Φωτεινός με ημερομηνία 14 Μάρτη 1915.
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
