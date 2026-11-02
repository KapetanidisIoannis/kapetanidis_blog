import Box from "@mui/material/Box";
import styles from "../text.module.css";

export default function BioSection() {
  return (
    <section className={styles.section}>
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <p className={styles.articleText}>
          Το <strong>Σωματείο Δράσης «Νίκος Καπετανίδης»</strong> είναι
          πολιτιστικό και ιστορικό σωματείο με έδρα τη Θεσσαλονίκη, το οποίο
          δραστηριοποιείται κυρίως στη διατήρηση και ανάδειξη της μνήμης του
          Πόντιου δημοσιογράφου και εθνομάρτυρα{" "}
          <strong>Νίκου Καπετανίδη</strong>, καθώς και γενικότερα της ιστορίας
          και κληρονομιάς του Ποντιακού Ελληνισμού. Το σωματείο ιδρύθηκε στις 31
          Αυγούστου 1921 στην Θεσσαλονίκη.
        </p>
      </Box>
    </section>
  );
}
