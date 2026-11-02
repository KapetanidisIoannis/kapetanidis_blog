import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/34Β.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection10() {
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
              Τάξη του παρθεναγωγείου Τραπεζούντας. Διακρίνεται στην μέση ο
              δάσκαλος (καθολικός καλόγερος) ο οποίος τους μάθαινε λατινικά και
              την γαλλική γλώσσα.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
