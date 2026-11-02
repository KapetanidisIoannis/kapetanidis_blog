import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1917b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection17() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#f8f4ef",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Είναι το προσκλητήριο του γάμου της Χρυσάνθης Καπετανίδου (αδελφή
              Νίκου) με τον αρχιτέκτονά Μιλτιάδη Μυρίδη στον ιερό ναό της Αγίας
              Μαρίνης στην Τραπεζούντα την Κυριακή 16 Απριλίου 1917. Το σπίτι
              της οικογένειας Καπετανίδη ήταν ακριβώς δίπλα στον ναό. Δυστυχώς ο
              Μυρίδης τον Νοέμβριο του επομένου έτους θα καταλήξει από την
              επιδημία γρίπης που εκδηλώθηκε στην Τραπεζούντα. Η επιδημία της
              λεγόμενης ισπανικής γρίπης εκδηλώθηκε το 1918 και αποδεκάτισε τον
              πληθυσμό της Ευρώπης και μετά και των άλλων ηπείρων.
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
