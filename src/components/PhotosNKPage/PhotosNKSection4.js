import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/13.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection4() {
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
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              Η ομάδα γυμναστικής του Φροντιστηρίου Τραπεζούντας το 1907. Δεξιά
              διακρίνεται ο καθηγητής της γυμναστικής οποίος είχε έρθει από την
              Ελλάδα. Στο βάθος διακρίνονται ο προαύλιος χώρος με τα σταθερά
              όργανα γυμναστικής. Στα χεριά των μαθητών διακρίνουμε κορίνες και
              βαράκια. Ο Νίκος είναι στην πίσω σειρά στο κέντρο.
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
