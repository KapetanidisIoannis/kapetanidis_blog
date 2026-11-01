import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/78.JPG";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function ArchiSection3() {
  return (
    <section
      style={{
        backgroundColor: "#e2dbcf",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Έγχρωμο σχέδιο δύο όψεων κατοικίας εν Λιβερά Πόντου το 1918 υπό
              του αρχιτέκτονος Μ. Μυρίδου
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
