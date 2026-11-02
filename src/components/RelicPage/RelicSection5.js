import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import image from "./../../images/1899.jpg";
import CustomImage from "../styled/CustomImage";
import SectionText from "../styled/setctionText";

export default function RelicSection5() {
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
              Το έγγραφο της εικόνας αποτελεί επιστολή γραμμένη σε επιστολόχαρτο
              της περίφημης καπνοβιομηχανίας των Ελλήνων «Αδελφών Ασλανίδη» στο
              Ροστόφ στον Ντον (στις εκβολές του ποταμού Ντον) της Ρωσίας. Την
              έγραψε ο Χαράλαμπος Καπετανίδης (πατέρας του Νίκου) στις 13
              Απριλίου 1899 , στο Ροστόφ στον Ντον της Ρωσίας και το έστειλε
              στην οικογένειά του. Μέσα στην κυκλική σφραγίδα / οικόσημο στα
              αριστερά, αναγράφεται με κεφαλαία ελληνικά γράμματα ο επίσημος
              τίτλος τιμής που κατείχε η επιχείρηση: «ΠΡΟΜΗΘΕΥΤΑΙ ΤΗΣ ΑΥΛΗΣ ΤΟΥ
              ΑΥΤΟΚΡΑΤΟΡΟΣ ΤΗΣ ΡΩΣΙΑΣ ΚΑΙ ΤΟΥ ΒΑΣΙΛΕΩΣ ΤΩΝ ΕΛΛΗΝΩΝ» .Το έγγραφο
              αυτό αποτελεί ένα εξαιρετικό ιστορικό τεκμήριο της ακμάζουσας
              ελληνικής παροικίας και της επιχειρηματικής δραστηριότητας των
              Ελλήνων στη νότια Ρωσία στα τέλη του 19ου αιώνα.
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
