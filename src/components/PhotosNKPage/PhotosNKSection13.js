import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/2.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection13() {
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
              Ο Νίκος στα γραφεία της εφημερίδας «ΕΠΟΧΗ» μαζί με φίλο του ο
              οποίος κρατάει στα χεριά του και διαβάζει ένα φύλλο της «ΕΠΟΧΗΣ».
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
