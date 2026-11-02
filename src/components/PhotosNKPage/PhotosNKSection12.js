import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/7.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection12() {
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
              Η πιο γνωστή φωτογραφία του Νίκου Καπετανίδη με το παπιγιόν που
              κοσμεί συνήθως τα άπειρα άρθρα που έχουν γραφτεί για αυτόν. Είναι
              την εποχή της ωριμότητας του γύρω στα 1920.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
