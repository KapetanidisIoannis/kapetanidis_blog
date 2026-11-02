import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/8.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection2() {
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
              Ο Νίκος μαθητής στο Φροντιστήριο Τραπεζούντας μαζί με τους
              συμμαθητές του Ορφανίδη και Χαρδανόπουλο ( ο τρίτος είναι
              άγνωστος) στην Τραπεζούντα στις 13/8/1905. ο Ελληνικόν
              Φροντιστήριον Τραπεζούντος υπήρξε ο σημαντικότερος, μακροβιότερος
              και πλέον εμβληματικός εκπαιδευτικός οργανισμός του Ποντιακού
              Ελληνισμού. Γνωστό και ως «Φάρος της Ανατολής», το ιστορικό αυτό
              σχολείο λειτούργησε ως πνευματικό και μορφωτικό κέντρο ύψιστης
              σημασίας για τη διατήρηση της εθνικής και χριστιανικής συνείδησης
              στην περιοχή του Πόντου κατά την Οθωμανική περίοδο.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
