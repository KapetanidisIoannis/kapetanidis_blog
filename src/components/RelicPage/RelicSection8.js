import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1913.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection8() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#f8f4ef",
      }}
    >
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Η άδεια διδασκαλίας σε Ελληνικά Σχολεία από την ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ
              ΡΟΔΟΠΟΛΕΩΣ στον Κώστα Καπετανίδη (τον αδελφό του Νίκου): «Λαβόντες
              υπ&#39; όψιν τα υπό του κ. Κωνσταντίνο Καπετανίδη εκ Τραπεζούντος
              προσαχθέντα έγγραφα των σπουδών αυτού, εφοδιάζομεν αυτόν διά του
              ετησίου τούδε ΕΝΔΕΙΚΤΙΚΟΥ και παρέχομεν αυτώ την ΑΔΕΙΑΝ του
              διδάσκειν εν τη Αστική Σχολή της Κοινότητος Λιβεράς και τα πέριξ
              αυτού της καθ&#39; ημάς Θεοσώστου επαρχίας κατά το σχολικόν έτος
              1913-1914... Εν Λιβερά τη 13 Μαΐου 1914».
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
