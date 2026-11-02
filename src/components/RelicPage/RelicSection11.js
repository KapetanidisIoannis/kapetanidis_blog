import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1914c.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection11() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#f8f4ef",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Χειρόγραφο σημείωμα του Νίκου για την Ψυχολογία του Εφήβου. Ο
              Νίκος έγραψε «…Το εκπαιδευτικό ζήτημα , η σχολική αγωγή αποτελούν
              δι΄ημάς όρον ΕΘΝΙΚΗΣ ΥΠΑΡΞΕΩΣ….» (Εποχή 4/6/1920). Αυτό αποτυπώνει
              την σημασία που έδινε στην εκπαίδευση των νέων Ελλήνων. Πίστευε
              στην αναγκαιότητα για αγώνα όχι μόνο για την εθνική απελευθέρωση
              των Ποντίων, αλλά και στον αγώνα για την κοινωνική και πνευματική
              απελευθέρωσή τους. Αυτό κατά την άποψή του θα γινόταν με το να
              αποκτήσουν όλοι οι νέοι Έλληνες δικαίωμα στην πραγματική και
              ουσιαστική μόρφωση και όχι αυτή που επέβαλε ο συντηρητισμός του
              Πατριαρχείου στα σχολεία του Πόντου (ήταν η εποπτεύουσα αρχή στα
              Ελληνικά σχολεία της Οθωμανικής αυτοκρατορίας): «…Ζητούμεν την
              Εποπτείαν στα Εκπαιδευτικά μας. το φως στο σκοτάδι. Τον ελεύθερον
              αέρα εις την φυλακήν. Και αν αυτό δεν αρχίσει να το κάνει το
              Εθνικόν Κέντρο (Πατριαρχείο) που κατατρίβεται συνηθέστατα σε
              βυζαντινισμούς και καλογερισμούς ας το κάνει επιτέλους η μεγάλη
              εθνική Αρχή (Ελλάδα )..»
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
