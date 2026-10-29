import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/1.jpg";
import styles from "../text.module.css";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosNKSection5() {
  return (
    <section
      style={{
        backgroundColor: "#f8f4ef",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Ο Νίκος με τον άντρα της αδελφής του τον Μιλτιάδη Μυρίδη. Ο Μυρίδη
              σπουδάσε αρχιτέκτονας στην Κωνσταντινούπολη και όταν τελείωσε τις
              σπουδές του και άρχισε να δουλεύει, διακρίθηκε για την ποιότητα
              της εργασίας του και μάλιστα είχε λάβει το χρυσό μετάλλιο αξίας
              της Οθωμανικής κυβερνήσεως. Για αυτό ορίσθηκε δημαρχιακός
              αρχιτέκτονας στην Τραπεζούντα, όπου ανέγειρε μεταξύ άλλων και τα
              δημόσια εκπαιδευτήρια. Επίσης δούλεψε και στη γενέτειρά του τη
              Λιβερά, όπου ανόρθωσε πολλά κοινοτικά κτήρια. Το 1916 γνωρίστηκε
              με την αδελφή του Νίκου Χρυσάνθη και ερωτευτήκαν, με φυσιολογικό
              επακόλουθο να παντρευτούν. Δυστυχώς αρρώστησε στην επιδημία της
              γρίπης που κτύπησε την Τραπεζούντα τον Οκτώβρη του 1918 και πέθανε
              . Αρχιτεκτονικά σχέδιά του του διέσωσε η Χρυσάνθη και
              παρουσιάζονται στην ιστοσελίδα αυτή.
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
