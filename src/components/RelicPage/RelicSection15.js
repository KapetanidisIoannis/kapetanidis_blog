import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1916.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection15() {
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
              Πρόκειται για λογοτεχνικό δοκίμιο του Νίκου αφιερωμένο προφανώς σε
              κάποια νεαρή Ποντιοπούλα την Χρυσαγή Λαμπριανίδου η οποία πέθανε
              σε μικρή ηλικία . Δημοσιεύτηκε στο φιλολογικό και λαογραφικό
              15θήμερο περιοδικό «Επιθεώρησις» το οποίο εκδίδει μαζί με τον
              Φίλωνα Κτενίδη, γύρω στα 1910-1911. Έχουν διασωθεί άλλα τρία
              λογοτεχνήματά του τα οποία περιέχονται στο βιβλίο «Η δύση του
              Ποντιακού Ελληνισμού» από την πένα του Ν. Καπετανίδη (του Κώστα
              Καπετανίδη αυτοέκδοση 2022)
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
