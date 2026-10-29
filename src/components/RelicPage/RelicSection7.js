import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1902b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection7() {
  return (
    <section className={styles.section}>
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Το απολυτήριο της Χρυσάνθης Καπετανίδου ετών 15 (μικρής αδελφής
              του Νίκου) από «Το εν Τραπεζούντι Ελληνικόν Κεντρικόν
              Παρθεναγωγείον», το οποίο εκδόθηκε στις 27 Ιουνίου 1909.
              Βεβαιώνεται ότι παρακολούθησε τα μαθήματα που ορίζει το πρόγραμμα:
              Θρησκευτικά, Ελληνικά, Μαθηματικά, Φυσικά, Ιστορία, Γεωγραφία,
              Οικιακή Οικονομία, Παιδαγωγική, Γαλλικά και Τεχνικά και αφού
              υποβλήθηκε στις καθιερωμένες απολυτήριες εξετάσεις, κρίθηκε αξία
              του βαθμού «Άριστα» (5) και διαγωγής «Αρίστης».
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
