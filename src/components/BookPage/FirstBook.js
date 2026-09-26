import { React, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bookcover from "./../../images/bookCover.png";
import SectionTitle from "../styled/sectionTitle";
import SectionText from "../styled/setctionText";
import CustomCaption from "../styled/customCaption";
import CustomImage from "../styled/CustomImage";
import CustomButton from "../Global/CustomButton";
// import Modal from "./../Global/Modal";

export default function FirstBook() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <section style={{ backgroundColor: "#e2dbcf", padding: "4.8rem 0" }}>
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {/* <div className={FirstBookCSS.container}> */}
            <div>
              <SectionTitle>Η Δύση του Ποντιακού Ελληνισμού</SectionTitle>
              <SectionText>
                Το παρόν βιβλίο αποτελεί συνέχεια του πρώτου μου βιβλίου «Νίκος
                Καπετανίδης, ο ηρωικός δημοσιογράφος του Πόντου» (εκδόσεις
                Ινφογνώμων, 2018). Το πρώτο βιβλίο αποτελούσε μια ιστορική
                βιογραφία της ζωής του Νίκου Καπετανίδη, με αναφορές στα
                σημαντικότερα άρθρα της εφημερίδας του. Το παρόν βιβλίο αποτελεί
                την προσπάθεια μου να παρουσιάσω στον αναγνώστη τον τρόπο σκέψης
                και τις εθνικές, πολιτικές και κοινωνικές ιδέες του πολιτικού
                αυτού άνδρα (ένα από τους σπουδαιότερους πολιτικούς και
                παιδαγωγούς του Πόντου σύμφωνα με τον καθηγητή Κώστα Φωτιάδη). Ο
                Νίκος Καπετανίδης είχε ριζοσπαστικά προοδευτικές απόψεις στα
                εθνικά, κοινωνικά και εκπαιδευτικά ζητήματα της εποχής του και
                πρόλαβε στα λίγα χρόνια της ζωής του να βάλει την σφραγίδα του
                στην ιστορία του Ελληνισμού του Πόντου. Σίγουρα μαζί με τον
                Μητροπολίτη Χρύσανθο και τον βουλευτή Ματθαίο Κωφίδη αποτελέσαν
                την ηγετική πολιτική ομάδα που προσπάθησε την περίοδο εκείνη να
                αλλάξει την τύχη του ποντιακού λαού, δυστυχώς χωρίς επιτυχία.
                Μας άφησε όμως το αρχείο της εφημερίδας του «ΕΠΟΧΗ», στην οποία
                καταγράφονται ολοζώντανα τα σημαντικότερα γεγονότα των ετών
                1918-1921, καθώς και το μεγαλείο του πολιτισμού που είχαν
                αναπτύξει οι προγονοί μας στα παράλια του Εύξεινου Πόντου εκείνα
                τα χρόνια.
              </SectionText>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <CustomImage src={bookcover} alt="Description of the image" />
              <CustomCaption>
                Aυτοέκδοση Κώστας Καπετανίδης - Ιούνιος 2022
              </CustomCaption>
              {/* <div className={FirstBookCSS.button_container}>
                <CustomButton color={"blue"} text={"Αγορά Βιβλίου - 18 €"} />
              </div> */}
            </div>
            {/* </div> */}
            {/* {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <div className={FirstBookCSS.modal_window}>
            <button onClick={handleCloseModal}>
              <img
                src={exit}
                // className={BookSectionCSS.book_image}
                alt="Description of the image"
              />
            </button>
            <p className={FirstBookCSS.explanation}>
              Το κόστος της αποστολής με αντικαταβολή είναι 3,79€ αν το
              παραλάβετε από το κοντινότερο σε σας κατάστημα της Γενικής
              Ταχυδρομικής. Αν θέλετε να το παραλάβετε σπίτι σας το κόστος είναι
              10,70€. Για παραγγελία πάρτε τηλ στο 6974052617 η στείλτε από το
              μενού "Επικοινωνία" το όνομα και την διεύθυνση σας και τον τρόπο
              παραλαβής (καταστημα η σπίτι)
            </p>
          </div>
        </Modal>
      )} */}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
