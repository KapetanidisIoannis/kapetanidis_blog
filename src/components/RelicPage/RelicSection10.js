import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1914b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection10() {
  return (
    <section className={styles.section}>
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Χειρόγραφο σημείωμά του Νίκου Καπετανίδη με σχόλια για το έργο του
              Λέων Τολστόι (ημερομηνία 1914). Ο Νίκος θαύμαζε τους μεγάλους
              Ρώσους συγγραφείς και δημοσίευσε πολλά έργα τους στην «ΕΠΟΧΗ».
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
