import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/20.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection4() {
  return (
    <section
      style={{
        backgroundColor: "#e2dbcf",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <CustomImage src={image} />
          </div>
          <div item xs={7}>
            <p className={styles.articleText}>
              Ο Κώστας Καπετανίδης (μικρός αδελφός του Νίκου) με δύο φίλους του
              στην Τραπεζούντα το 1921.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
