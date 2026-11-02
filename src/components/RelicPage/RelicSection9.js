import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1914.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection9() {
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
              Το αγγελτήριο για τον αρραβώνα του Νίκου Καπετανίδη με την 19χρονη
              Ελένη Παπαδοπούλου τον Απρίλιο του 1914 στην Τραπεζούντα. Όπως
              γράφουμε παραπάνω η Ελένη έπασχε από φυματίωση και θα πεθάνει τον
              Αύγουστο του ιδίου έτους.
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
