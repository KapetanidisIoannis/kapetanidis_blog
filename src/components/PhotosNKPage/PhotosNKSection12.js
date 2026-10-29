import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/7.jpg";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosNKSection12() {
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
              Η πιο γνωστή φωτογραφία του Νίκου Καπετανίδη με το παπιγιόν που
              κοσμεί συνήθως τα άπειρα άρθρα που έχουν γραφτεί για αυτόν. Είναι
              την εποχή της ωριμότητας του γύρω στα 1920.
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
