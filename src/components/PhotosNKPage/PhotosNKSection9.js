import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/3β.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection9() {
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
            <p className={styles.articleText}>
              Ο Νίκος Καπετανίδης μόνος με όπλο στο χέρι, ξίφος στη μέση και
              φυσίγγια. Θεωρούμε ότι είναι κατά την ρωσική κατοχή της
              Τραπεζούντας 1916-1918 , την μόνη περίοδο που μπορούσαν να φέρουν
              όπλα.
            </p>
          </div>

          <div>
            <CustomImage src={image} />
          </div>
        </div>
      </Box>
    </section>
  );
}
