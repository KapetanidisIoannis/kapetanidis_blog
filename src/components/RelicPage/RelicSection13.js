import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1915.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection13() {
  return (
    <section className={styles.section}>
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Χειρόγραφο σημειώματα του Νίκου με τίτλο «Κρητικά Σημειώματα».
              Όπως γράφει το το χρησιμοποιεί για να κρατάει σημειώσεις και
              αποκόμματα γύρω από τη λογοτεχνία και τη φιλολογία, τα οποία
              συγκέντρωνε διαβάζοντας εφημερίδες και περιοδικά της εποχής.
              Γράφτηκε από τον Νίκο στη Λιβερά (την ιστορική έδρα της Μητρόπολης
              Ροδοπόλεως) στις 13 Ιανουαρίου 1915. Είναι η περίοδος των πρώτων
              μηνών του Α&#39; Παγκοσμίου Πολέμου, μια εξαιρετικά κρίσιμη εποχή
              για τον Ελληνισμό του Πόντου και ειδικά για τον Νίκο ο οποίος
              είναι φυγόστρατος από τον τούρκικο στρατό και κρύβεται στην Λιβερά
              , όπου διδάσκει ως δάσκαλος ο αδελφός του Κώστας.
            </p>
          </div>

          <div>
            <CustomImage src={image} />
          </div>
        </div>
      </Box>
    </section>
  );
}
