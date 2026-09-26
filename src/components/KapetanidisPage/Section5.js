import React from "react";
import Sectio3CSS from "./Section5.module.css";
import image from "./../../images/Component 8.png";

export default function Section1() {
  return (
    <section className={Sectio3CSS.book_section}>
      <div className={Sectio3CSS.container}>
        <div className={Sectio3CSS.text}>
          <div className={Sectio3CSS.title}>
            Ο Αγώνας ενάντια στη Λογοκρισία
          </div>
          <p className={Sectio3CSS.description}>
            Η Λογοκροσία: ο Νίκος θα δώσει τον δημοσιογραφικό αγώνα ενάντια στην
            επιβαλλόμενη από το τουρκικό καθεστώς λογοκρισία. Δεν θα διστάσει
            ¨Έγραφε χωρίς φόβο ακόμα και εναντίον της σφαγέα του Ποντιακού
            Ελληνισμού Τοπάλ Οσμάν και των δολοφονιών που αυτός διέπραττε στην
            Κερασούντα, γεγονός που ανάγκασε τον τελευταίο να τον επισκεφθεί στα
            γραφεία του στην Εποχή (3/1920) και να τον απειλήσει ανοικτά. Ο
            Νίκος ούτε τότε σταμάτησε να γράφει. Δεν σταμάτησε να γράφει ούτε
            όταν η τούρκικη λογοκρισία αφαιρούσε από την «Εποχή» ολόκληρες
            στήλες. Όταν πλέον ο Κεμάλ αποφάσισε να προχωρήσει στην τελική φάση
            της γενοκτονίας τον Μάρτη του 1921 έκλεισε την «Εποχή» και συνέλαβε
            τον Νίκο μαζί με όλη την πνευματική, πολιτική και θρησκευτική ηγεσία
            των Ποντίων όπως τον βουλευτή Ματθαίο Κωφίδη και τον έμπορο Α.
            Ακριτίδη (περίπου 300 άτομα).
          </p>
        </div>
        <div className={Sectio3CSS.image}>
          <img
            src={image}
            className={Sectio3CSS.book_image}
            alt="Description of the image"
          />
          <p
            style={{
              fontWeight: "600",
              fontStyle: "italic",
              fontSize: "1.2rem",
            }}
          >
            "Η τουρκική λογοκρισία στην εφημερίδα εποχή τον Οκτώμβριο 1920"
          </p>
        </div>
      </div>
    </section>
  );
}
