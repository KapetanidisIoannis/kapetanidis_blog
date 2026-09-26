import React from "react";
import image from "./../../images/Component 9.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionTitle from "../styled/sectionTitle";
import SectionText from "../styled/setctionText";
import CustomImage from "../styled/CustomImage";

export default function Section1() {
  return (
    <section
      style={{
        backgroundColor: "#f8f4ef",
        padding: "4rem 0rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
            <p>
              Ο Νίκος Καπετανίδης με όπλα την εποχή της ρωσικής κατοχής της
              Τραπεζούντας - 1916-1918
            </p>
          </Grid>
          <Grid item xs={7}>
            <SectionTitle>Το Εθνικό Ζήτημα</SectionTitle>
            <SectionText>
              Το Εθνικό Ζήτημα : Κυρίαρχο ζήτημα για τον Νίκο ήταν η προσπάθεια
              για ανεξαρτησία του Πόντου και η ανάδειξη και καταδίκη των
              τουρκικών βιαιοτήτων . Κατέγραφε συστηματικά όλες τις διεθνείς
              εξελίξεις για το θέμα, αλλά και τις προσπάθειες της τοπικής
              ηγεσίας για το ίδιο θέμα . Κατέγραψε το ταξίδι του Μητροπολίτη
              Χρύσανθου στην συνδιάσκεψη της Ειρήνης στο Παρίσι (Μάιος 1919),
              τις προσπάθειές του για την Ελληνο-Αρμενική συνεννόηση κλπ. Για να
              προβάλει τους Τούρκικους διωγμούς είχε ειδική στήλη στην Εποχή με
              τίτλο «Ελληνικόν Μαρτυρολόγιον του Πόντου» όπου δημοσίευε
              ανταποκρίσεις συνεργατών και αναγνωστών σχετικά με δολοφονίες,
              κλοπές και πυρπολήσεις στην Ποντιακή επαρχία από τους
              Τούρκους.Δεύτερον τον κοινωνικό αγώνα θα εκφράσει τις πολύ
              προοδευτικές κοινωνικές απόψεις του υπέρ των εργατών , των
              υπαλλήλων, των δασκάλων και γενικά των ανθρώπων του μόχθου κατά
              της οπισθοδρομικής συντηρητικής άρχουσας τάξης της Ελληνικής
              ομογένειας.
            </SectionText>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
