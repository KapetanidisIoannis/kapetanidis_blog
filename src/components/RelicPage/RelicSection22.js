import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1923b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection20() {
  return (
    <section className={styles.section}>
      <Box className={styles.box}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <CustomImage src={image} />
          </Grid>

          <Grid item xs={7}>
            <p className={styles.articleText}>
              ‘Ένα πολύ σημαντικό κειμήλιο : το επίσημο έγγραφο ταυτοποίησης για
              την απέλαση από Τουρκία (ανταλλαγή πληθυσμών του 1923) για τον
              Κώστα Καπετανίδη Στην κεφαλίδα αναγράφεται: TURKIA BEYUK MILLET
              MEDJLIS HUKUMETI (Κυβέρνηση της Μεγάλης Τουρκικής Εθνοσυνέλευσης)
              Τα στοιχεία του είναι στα γαλλικά και τα τουρκικά Όνομα
              Καπετανίδης Κώστας του Χαραλάμπους Τόπος γέννησης: Τραπεζούντα
              Κατοικία: Τραπεζούντα Επάγγελμα: Γεωργός (λανθασμένα γιατί ήταν
              οικονομικός διευθυντής της εφημερίδας) Προορισμός: Ρουμανία
              Ημερομηνία θεώρησης: 29 Νοεμβρίου 1923 Φαίνεται ότι έφυγε από
              Τραπεζούντα αμέσως μετά τη Συνθήκη της Λοζάνης (24/7/1923) και ενώ
              ξεκινούσε η διαδικασία της ανταλλαγής των ελληνορθόδοξων
              πληθυσμών. Ιστορικά, η διαδρομή Τραπεζούντα → Κωνστάντζα
              (Ρουμανία) ήταν από τις πιο συνηθισμένες θαλάσσιες διαδρομές
              εξόδου από τον Πόντο εκείνη την περίοδο.
            </p>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
