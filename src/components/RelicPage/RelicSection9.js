import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1914.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection9() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#90a9ae",
      }}
    >
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Το αγγελτήριο για τον αρραβώνα του Νίκου Καπετανίδη με την 19χρονη
              Ελένη Παπαδοπούλου τον Απρίλιο του 1914 στην Τραπεζούντα. ¨όπως
              γράφουμε παραπάνω η Ελένη έπασχε από φυματίωση και θα πεθάνει τον
              Αύγουστο του ιδίου έτους.
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
