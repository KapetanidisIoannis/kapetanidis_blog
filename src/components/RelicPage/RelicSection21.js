import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1921d.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection20() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#90a9ae",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Η εφημερίδα Φάρος της Ανατολής των φιλότουρκων αδελφών Σεράση
              (φύλλο 2 Οκτωβρίου 1921) αναγγέλλει την εκτέλεση των Ποντίων
              πατριωτών στις κρεμάλας της Αμάσειας . Στο ανακοινωθέν της
              Νομαρχίας Τραπεζούντας αναφέρεται αναλυτικά το κατηγορητήριο και
              όλα τα ονόματα των εκτελεσμένων . Αναμεσά τους ο Νίκος
              Καπετανίδης. Καταδικασθείς ήταν και ο μητροπολίτης Τραπεζούντας
              Χρύσανθος ο οποίος έλειπε στο εξωτερικό και έτσι γλύτωσέ την
              εκτέλεση. Εξελέγη Μητροπολίτης Τραπεζούντιος στις 18 Μαΐου 1913.
              Παρέμεινε στην θέση αυτήν έως το 1938, οπότε και εξελέγη
              Αρχιεπίσκοπος Αθηνών και πάσης Ελλάδος.
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
