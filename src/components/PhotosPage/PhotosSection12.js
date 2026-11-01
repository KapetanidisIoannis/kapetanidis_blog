import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/37.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection12() {
  return (
    <section
      style={{
        backgroundColor: "#90a9ae",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Ο Κώστας Καπετανίδης κατά την διάρκεια της εξορίας στο Ερζερούμ το
              1923. Οι Τούρκοι μετά τις εκτελέσεις της πνευματικής ελίτ των
              Ποντίων το 1921 είχαν εξορίσει πολλούς ΄ Πόντιους στα τάγματα
              εργασίας στα βάθη της Ανατολής. Ο Κώστας λόγω των γραμματικών
              γνώσεων τον έβαλαν βοηθό στο φαρμακείο του στρατοπέδου
              συγκέντρωσης.
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
