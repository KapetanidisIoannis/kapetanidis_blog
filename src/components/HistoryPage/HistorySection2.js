import Box from "@mui/material/Box";
import styles from "../text.module.css";

export default function BioSection() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#f8f4ef",
        padding: "4rem 0rem",
      }}
    >
      <Box className={styles.box}>
        <p className={styles.articleText}>
          <strong>Σκοπός του Σωματείου</strong> είναι:
          <ul>
            <li>
              η προβολή της ζωής, της δράσης και της θυσίας του Νίκου Καπετανίδη
            </li>
            <li>η διατήρηση της ιστορικής μνήμης του Ποντιακού Ελληνισμού</li>
            <li>
              η διοργάνωση πολιτιστικών, ιστορικών και εκπαιδευτικών εκδηλώσεων
            </li>
            <li>
              η υποστήριξη μνημείων και δράσεων ιστορικής κληρονομιάς που
              σχετίζονται με τον Πόντο.
            </li>
          </ul>
        </p>
      </Box>
    </section>
  );
}
