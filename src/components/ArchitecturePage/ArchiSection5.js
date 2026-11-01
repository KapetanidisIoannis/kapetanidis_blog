import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/74.JPG";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function ArchiSection3() {
  return (
    <section
      style={{
        backgroundColor: "#f8f4ef",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Σχέδιο εξοχικής κατοικίας , σχεδιασμένο υπο του αρχιτέκτονος Μ.
              Μυρίδου , εν Λιβερά 19 φεβρουαρίου 1915
            </p>
          </Grid>

          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
