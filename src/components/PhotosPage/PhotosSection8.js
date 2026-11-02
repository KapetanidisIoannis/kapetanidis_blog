import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/27.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection8() {
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
          <div>
            <p className={styles.articleText}>
              Ο Κώστας Καπετανίδης με τον Ελευθέριο Βενιζέλο στην Ελλάδα το 1929
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
