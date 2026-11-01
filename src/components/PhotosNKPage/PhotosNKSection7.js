import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image from "./../../images/3α.jpg";
import styles from "../text.module.css";
import CustomImage from "../styled/CustomImage";

export default function PhotosNKSection7() {
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
          <Grid item xs={7}>
            <p className={styles.articleText}>
              Ο Νίκος (όρθιος στην μέση) με άλλους 5 Τραπεζούντιους νέους με
              όπλα. Είναι κατά την ρωσική κατοχή της Τραπεζούντας 1916-1918 ,
              την μόνη περίοδο που μπορούσαν να φέρουν όπλα.
            </p>
          </Grid>

          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
