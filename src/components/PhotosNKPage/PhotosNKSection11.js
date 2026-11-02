import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/10.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection11() {
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
            <p className={styles.articleText}>
              Ο Νίκος με τέσσερις φίλους στην πλατεία Μεϊντάνι την 19 Ιουνίου
              1917. Είναι η κεντρικότερη πλατεία εκείνης της εποχής και η καρδία
              της πόλης . Την έλεγαν και γκιαούρ Μεϊντάνι καθώς αποτελούσε το
              κεντρικό σημείο συνάντησης και εμπορίου για την ακμάζουσα
              χριστιανική κοινότητα των Ελλήνων και Αρμενίων
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
