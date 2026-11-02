import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/59.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function ArchiSection18() {
  return (
    <section
      style={{
        backgroundColor: "#90a9ae",
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
              Πόντιος οπλοφόρος καβαλάρης , προφανώς φίλος της οικογένειάς για
              τον οποίο δεν διασώζεται το όνομά του.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
