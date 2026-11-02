import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/IMG_0123.JPG";
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
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Κάτοψις εξοχικής κατοικίας εν Λιβερά , του αρχιτέκτονος Μ. Μυρίδου
              19/2/1915-Α πάτωμα, Ισόγειον
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
