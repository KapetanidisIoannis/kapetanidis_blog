import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/12.jpg";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosNKSection3() {
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
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Η ομάδα γυμναστικής του Φροντιστηρίου Τραπεζούντας το 1907. Ο
              Νίκος διακρίνεται 6ος από τα δεξιά. Στις καλές εποχές το
              Φροντιστήριο φιλοξενούσε περίπου 1.200 έως 1.300 Έλληνες μαθητές.
              Το Ελληνικό Φροντσητήριο υπήρξε το σημαντικότερο και μακροβιότερο
              εκπαιδευτικό ίδερυμα του Πονταικού Ελληνσιμού. Γνωστοί και ως ο
              «Φάρος της Ανατολής» διαδραμάτισε καθοριστικο ρόλο στην πνευματική
              αναγένηση
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
