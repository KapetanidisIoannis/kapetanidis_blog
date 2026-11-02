import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/16.jpg";
import SectionTitle from "../styled/sectionTitle";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection2() {
  return (
    <section
      style={{
        backgroundColor: "#f8f4ef",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <CustomImage src={image} />
          </div>
          <div>
            <p className={styles.articleText}>
              Η Αγλαΐα Μεταξά , η σύζυγος του Νίκου Καπετανίδη. Είναι η αδελφή
              του φίλου του Νίκου, Ιφικράτη Μεταξά. Θα παντρευτούν στα τέλη του
              1919 και θα μείνουν μαζί για μόνο ενάμιση χρόνο πριν την εκτέλεση
              του Νίκου. Δεν θα προλάβουν να κάνουν παιδιά.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
