import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1921c.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection20() {
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
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Το τελευταίο γράμμα από την φυλακή της Αμάσειας από τον Νίκο προς
              την γυναίκα του Αγλαΐα και την οικογένειά του. Στις 21 Σεπτεμβρίου
              εκτελέστηκε με την κραυγή «Ζήτω η Ελλάς»
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
