import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1917.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection16() {
  return (
    <section className={styles.section}>
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Γράμμα του Νίκου στον πατέρα του Χαράλαμπο με ημερομηνία 21
              Σεπτεμβρίου 1917 ο οποίος εκείνη την εποχή ήταν στο Βατούμ στον
              Καύκασο (στην σημερινή Γεωργία). Ενδιαφέρον στοιχείο ότι είναι
              γραμμένο σε χαρτί με το λογότυπο εφημερίδα «Σαλπιξ εν Τραπεζούντι»
              Η εφημερίδα Σάλπιγξ ήταν η πρώτη εφημερίδα που έκδωσε ο Νίκος το
              1916 έως 1918 κατά την διάρκεια της Ρωσικής κατοχής της
              Τραπεζούντας. Την έκλεισε μόλις έφυγαν οι Ρώσοι και ξαναγύρισαν οι
              Τούρκοι γιατί είχε γίνει έρευνα εναντίον του από τις τουρκικές
              αρχές για τις αντιτουρκικές απόψεις που εξέφραζε.
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
