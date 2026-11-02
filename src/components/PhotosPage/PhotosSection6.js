import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../text.module.css";
import image from "./../../images/24.jpg";
import SectionTitle from "../styled/sectionTitle";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function PhotosSection6() {
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
              Άφιξη οικογένειας Καπετανίδη στην Αθήνα το 1923 μετά τον ξεριζωμό.
              Μπροστά είναι η μητέρα τους Ερμοφύλλη Καπετανίδου με την κόρη
              Χρυσάνθη και πίσω ο γιός Κώστας με την ορφανή Παγώνα που είχαν
              πάρει υπό την προστασία τους.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
