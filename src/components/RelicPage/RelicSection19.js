import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1921b.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection19() {
  return (
    <section className={styles.section}>
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div>
            <p className={styles.articleText}>
              Γράμματα του Νίκου Καπετανίδη από την φυλακή της Αμάσειας τα οποία
              διέσωσε η αδελφή του Χρυσάνθη , που μετά την απώλεια του συζύγου
              της το 1918 (από την ισπανική γρίπη) χάνει και τον μεγάλο της
              αδελφό από το καθεστώς του Κεμάλ. Σε ένα από τα τελευταία του
              γράμματα προς την οικογένειά του από τη φυλακή της Αμάσειας: «…Να
              κατηγορηθούμε ως επαναστάτες και να γίνη ο αλύπητος θερισμός των
              επιστημόνων, των μορφωμένων, των διανοούμενων. Θα μάθετε από τους
              ολίγους που θα περισωθούν, ότι μήτε το θάρρος μήτε η ψυχραιμία μ΄
              εγκατέλειψαν ως την τελευταία μου στιγμή … εν τούτοις η ψυχή μου
              βαθύτατα πενθεί διότι σας αφήνω για πάντα. Τέτοιος θάνατος σαν τον
              δικό μας είναι ωραίος, δοξασμένος… Γι&#39; αυτό μη λυπηθείτε… Ο
              θάνατος είναι τιμή για όλους μας … Θαρρείτε και καρτερείτε… Μια
              φορά κανείς πεθαίνει…»…
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
