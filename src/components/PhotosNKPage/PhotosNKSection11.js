import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/10.jpg";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosNKSection11() {
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
              Ο Νίκος με τέσσερις φίλους στην πλατεία Μεϊντάνι την 19 Ιουνίου
              1917. Είναι η κεντρικότερη πλατεία εκείνης της εποχής και η καρδία
              της πόλης . Την έλεγαν και γκιαούρ Μεϊντάνι καθώς αποτελούσε το
              κεντρικό σημείο συνάντησης και εμπορίου για την ακμάζουσα
              χριστιανική κοινότητα των Ελλήνων και Αρμενίων
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
