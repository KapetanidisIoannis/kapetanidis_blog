import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/IMG_0123.JPG";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function ArchiSection3() {
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
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Κατοψις εξοχικής κατοικίας εν Λιβερά , του αρχιτέκτονος Μ. Μυρίδου
              19/2/1915-Α πάτωμα, Ισόγειον
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
