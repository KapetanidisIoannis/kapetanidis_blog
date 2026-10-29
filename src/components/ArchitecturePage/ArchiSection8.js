import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/79.jpg";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function ArchiSection3() {
  return (
    <section
      style={{
        backgroundColor: "#f8f4ef",
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
              Κατοψις τα Μητροπόλεως Ροδοπόλεως εν Λιβερά , του αρχιτέκτονος Μ.
              Μυρίδου 17/8/1918-Α πάτωμα, Ισόγειον και Υπόγειον
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
