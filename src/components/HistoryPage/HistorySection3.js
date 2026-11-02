import Box from "@mui/material/Box";
import styles from "../text.module.css";

export default function BioSection() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: "#90a9ae",
        padding: "4rem 0rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <p className={styles.articleText}>
          <strong>Πρόεδρος</strong>
          <br />
          <strong>Γιώργος Γεωργιάδης</strong>, Πρόεδρος του Σωματείου Δράσης
          «Νίκος Καπετανίδης». Είναι δημοσιογράφος με πολυετή παρουσία, κυρίως
          στην ΕΡΤ3, και έχει ασχοληθεί εκτενώς με ζητήματα που αφορούν τη
          Γενοκτονία των Ποντίων. Υπήρξε ο εμπνευστής και πρωτεργάτης της
          ίδρυσης του Σωματείου, ένα όραμα που υλοποίησε με τη συμβολή και τη
          συνεργασία άλλων Ποντίων συνοδοιπόρων.
        </p>
      </Box>
    </section>
  );
}
