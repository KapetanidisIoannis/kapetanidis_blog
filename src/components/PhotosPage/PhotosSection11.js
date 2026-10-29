import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/36.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection11() {
  return (
    <section
      style={{
        backgroundColor: "#e2dbcf",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Εκδρομή στην Κρώμνη . Η Κρώμνη (σήμερα Korom ή Korum στην Τουρκία)
              ήταν μια ιστορική, ελληνική κωμόπολη του Πόντου, χτισμένη στην
              ορεινή ύπαιθρο νότια της Τραπεζούντας και βορειοανατολικά της
              Αργυρούπολης. Βρισκόταν σε υψόμετρο περίπου 2.000 μέτρων στο όρος
              Παρυάδρη, και αποτέλεσε ένα από τα σημαντικότερα προπύργια του
              Ελληνισμού και των κρυπτοχριστιανών
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
