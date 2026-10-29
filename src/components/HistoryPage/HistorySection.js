import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import bioImage from "./../../images/Component 2.png";
import SectionText from "../styled/setctionText";

export default function BioSection() {
  return (
    <section className={styles.section}>
      <Box className={styles.box}>
        <p className={styles.articleText}>
          Το <strong>Σωματείο Δράσης «Νίκος Καπετανίδης»</strong> είναι
          πολιτιστικό και ιστορικό σωματείο με έδρα τη Θεσσαλονίκη, το οποίο
          δραστηριοποιείται κυρίως στη διατήρηση και ανάδειξη της μνήμης του
          Πόντιου δημοσιογράφου και εθνομάρτυρα{" "}
          <strong>Νίκου Καπετανίδη</strong>, καθώς και γενικότερα της ιστορίας
          και κληρονομιάς του Ποντιακού Ελληνισμού. Το σωματείο ιδρύθηκε στις 31
          Αυγούστου 1921 στην Θεσσαλονίκη.
        </p>
      </Box>
    </section>
  );
}
