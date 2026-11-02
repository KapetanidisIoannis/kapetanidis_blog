import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/12.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection3() {
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
              Η ομάδα γυμναστικής του Φροντιστηρίου Τραπεζούντας το 1907. Ο
              Νίκος διακρίνεται 6ος από τα δεξιά. Στις καλές εποχές το
              Φροντιστήριο φιλοξενούσε περίπου 1.200 έως 1.300 Έλληνες μαθητές.
              Το Ελληνικό Φροντσητήριο υπήρξε το σημαντικότερο και μακροβιότερο
              εκπαιδευτικό ίδερυμα του Πονταικού Ελληνσιμού. Γνωστοί και ως ο
              «Φάρος της Ανατολής» διαδραμάτισε καθοριστικο ρόλο στην πνευματική
              αναγένηση
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
