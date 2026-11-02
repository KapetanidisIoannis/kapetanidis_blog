import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1923.jpg";
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
            <p className={styles.articleText}>
              Το επίσημο έγγραφο απέλασης από την Τουρκία λόγω ανταλλαγής
              πληθυσμών για την μητέρα Ερμοφύλλη Καπετανίδου και την Χρυσάνθη
              (κόρη) και την Παγώνα (νεαρή προστατευόμενη).
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
