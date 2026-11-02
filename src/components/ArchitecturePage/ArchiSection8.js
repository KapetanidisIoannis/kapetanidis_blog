import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/79.jpg";
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
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <CustomImage src={image} />
          </div>

          <div>
            <p className={styles.articleText}>
              Κατοψις της Μητροπόλεως Ροδοπόλεως εν Λιβερά , του αρχιτέκτονος Μ.
              Μυρίδου 17/8/1918- Α΄ πάτωμα, Ισόγειον και Υπόγειον
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
}
