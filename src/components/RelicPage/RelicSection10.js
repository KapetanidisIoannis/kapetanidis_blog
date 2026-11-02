import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1914b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection10() {
  return (
    <section className={styles.section}>
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Χειρόγραφο σημείωμά του Νίκου Καπετανίδη με σχόλια για το έργο του
              Λέων Τολστόι (ημερομηνία 1914). Ο Νίκος θαύμαζε τους μεγάλους
              Ρώσους συγγραφείς και δημοσίευσε πολλά έργα τους στην «ΕΠΟΧΗ».
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
