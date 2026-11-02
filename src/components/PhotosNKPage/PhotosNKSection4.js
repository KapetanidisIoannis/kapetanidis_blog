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
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Η ομάδα γυμναστικής του Φροντιστηρίου Τραπεζούντας το 1907. Δεξιά
              διακρίνεται ο καθηγητής της γυμναστικής οποίος είχε έρθει από την
              Ελλάδα. Στο βάθος διακρίνονται ο προαύλιος χώρος με τα σταθερά
              όργανα γυμναστικής. Στα χεριά των μαθητών διακρίνουμε κορίνες και
              βαράκια. Ο Νίκος είναι στην πίσω σειρά στο κέντρο.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
