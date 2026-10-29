import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bioImage from "./../../images/Component 2.png";
import styles from "../text.module.css";
import SectionText from "../styled/setctionText";
import { Link } from "react-router-dom";

export default function PaperSection() {
  return (
    <section className={styles.section}>
      <Box className={styles.box}>
        <p className={styles.articleText}>
          Με την ευγενική χορηγία του συγγραφέα Δημήτρη Παπαδόπουλου (Σταυριώτη)
          και τη βοήθεια του προέδρου του Συλλόγου «Δράσης Ν. Καπετανίδη»
          Γιώργου Γεωργιάδη, καθώς και του γραμματέα του Συλλόγου Βασίλη
          Σιδηρόπουλου, ο οποίος επιμελήθηκε τις διορθώσεις, διαθέτουμε πλέον σε
          μορφή Word ολόκληρο το αρχείο της εφημερίδας «Εποχή», από τον Οκτώβριο
          του 1918 έως τον Μάρτιο του 1921.
          <br /> <br />
        </p>
        <p className={styles.articleText}>
          Παρακάτω θα βρείτε ενδεικτικά 15 φύλλα της εφημερίδας, από το πρώτο
          φύλλο του Οκτωβρίου 1918 έως και το τελευταίο του Μαρτίου 1921.
          <br /> <br />
        </p>
        <p className={styles.articleText}>
          Όποιος ενδιαφέρεται για κάποιο άλλο φύλλο μπορεί να επικοινωνήσει με
          την οικογένεια Καπετανίδη μέσω της επιλογής «Επικοινωνία» στο μενού
          και να υποβάλει το σχετικό αίτημα. <br /> <br />
          <ul>
            <li>
              <a
                href="/word/1. Τρίτη 30 Οκτωβρίου 1918.docx"
                download
                className={styles.documentLink}
              >
                Τρίτη 30 Οκτωβρίου 1918
              </a>
            </li>
            <li>
              <a
                href="/word/2. Σάββατο 1 Δεκεμβρίου 1918.docx"
                download
                className={styles.documentLink}
              >
                Σάββατο 1 Δεκεμβρίου 1918
              </a>
            </li>
            <li>
              <a
                href="/word/3. Τρίτη 5 Μαρτίου 1919.docx"
                download
                className={styles.documentLink}
              >
                Τρίτη 5 Μαρτίου 1919
              </a>
            </li>
            <li>
              <a
                href="/word/4. Σάββατον 1 Ιουνίου 1919.docx"
                download
                className={styles.documentLink}
              >
                Σάββατον 1 Ιουνίου 1919
              </a>
            </li>
            <li>
              <a
                href="/word/5. Τετάρτη 2 Οκτωβρίου 1919.docx"
                download
                className={styles.documentLink}
              >
                Τετάρτη 2 Οκτωβρίου 1919
              </a>
            </li>
            <li>
              <a
                href="/word/6. Τρίτη 17 Δεκεμβρίου 1919.docx"
                download
                className={styles.documentLink}
              >
                Τρίτη 17 Δεκεμβρίου 1919
              </a>
            </li>
            <li>
              <a
                href="/word/8. Τρίτη 3 Μαρτίου 1920.docx"
                download
                className={styles.documentLink}
              >
                Τρίτη 3 Μαρτίου 1920
              </a>
            </li>
            <li>
              <a
                href="/word/9. Παρασκευή 22 Μαίου 1920.docx"
                download
                className={styles.documentLink}
              >
                Παρασκευή 22 Μαίου 1920
              </a>
            </li>
            <li>
              <a
                href="/word/10, Πέμπτη 2 Ιουλίου 1920.docx"
                download
                className={styles.documentLink}
              >
                Πέμπτη 2 Ιουλίου 1920
              </a>
            </li>
            <li>
              <a
                href="/word/11. Πέμπτη 3 Σεπτεμβρίου 1920.docx"
                download
                className={styles.documentLink}
              >
                Πέμπτη 3 Σεπτεμβρίου 1920
              </a>
            </li>
            <li>
              <a
                href="/word/12. Πέμπτη 5 Νοεμβρίου 1920.docx"
                download
                className={styles.documentLink}
              >
                Πέμπτη 5 Νοεμβρίου 1920
              </a>
            </li>
            <li>
              <a
                href="/word/13. Πέμπτη 31 Δεκεμβρίου 1920.docx"
                download
                className={styles.documentLink}
              >
                Πέμπτη 31 Δεκεμβρίου 1920
              </a>
            </li>
            <li>
              <a
                href="/word/14. Πέμπτη 14 Ιανουαρίου 1921.docx"
                download
                className={styles.documentLink}
              >
                Πέμπτη 14 Ιανουαρίου 1921
              </a>
            </li>
            <li>
              <a
                href="/word/15. Τρίτη 2 Μαρτίου 1921.docx"
                download
                className={styles.documentLink}
              >
                Τρίτη 2 Μαρτίου 1921
              </a>
            </li>
          </ul>
        </p>
      </Box>
    </section>
  );
}

/*
          <p>
            <Link to="/Paper1">ΕΠΟΧΗ ΕΤΟΣ 1918</Link>
          </p>
          <br />
          <p>
            <Link to="/Paper2">ΕΠΟΧΗ ΕΤΟΣ 1919 Α ΕΞΑΜΗΝΟ</Link>
          </p>
          <br />
          <p>
            <Link to="/Paper3">ΕΠΟΧΗ ΕΤΟΣ 1919 Β ΕΞΑΜΗΝΟ</Link>
          </p>
          <br />
          <p>
            <Link to="/Paper4">ΕΠΟΧΗ ΕΤΟΣ 1920 Α ΕΞΑΜΗΝΟ</Link>
          </p>
          <br />
          <p>
            <Link to="/Paper5">ΕΠΟΧΗ ΕΤΟΣ 1920 Β ΕΞΑΜΗΝΟ</Link>
          </p>
          <br />
          <p>
            <Link to="/Paper6">ΕΠΟΧΗ ΕΤΟΣ 1921</Link>
          </p>
          */
