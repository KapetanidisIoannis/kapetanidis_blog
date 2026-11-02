import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1902.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection6() {
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
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Το έγγραφο είναι το ΕΝΔΕΙΚΤΙΚΟ αποφοίτησης του Νίκου Καπετανίδη
              από το Φροντιστήριο Τραπεζούντας μαθητού της Δευτέρας τάξης για το
              έτος 1901-1902. Ημερομηνία του εγγράφου 6 Ιουνίου 1902. Γενικός
              Βαθμός &amp; Διαγωγή: Ο γενικός βαθμός είναι 4,62 (Λίαν Καλώς) και
              η διαγωγή του έχει χαρακτηριστεί «Κοσμία» (συμβολίζεται με τον
              αριθμό 6 βάσει του τότε συστήματος). Στο κάτω δεξί μέρος υπάρχει η
              ιδιόχειρη υπογραφή του Διευθυντή του ιδρύματος, ενώ στο κάτω δεξιό
              περιθώριο αναγράφεται ο εκδοτικός οίκος: «ΤΥΠ. ΣΕΡΑΪΔΗ-ΤΡΑΠΕΖΟΥΣ».
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
