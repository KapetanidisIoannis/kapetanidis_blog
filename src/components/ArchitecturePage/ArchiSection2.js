import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/71.JPG";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function ArchiSection2() {
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
              Έγχρωμο σχέδιο εξοχικής κατοικίας στην Λιβερά το 1918 υπό του
              αρχιτέκτονος Μ. Μυρίδου
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}

/* ΦΩΤΟ 71-Έγχρωμο σχέδιο εξοχικής κατοικίας στην Λιβερά το 1918 υπό του
      αρχιτέκτονος Μ. Μυρίδου */
