import image from "./../../images/Component 3.png";
import SectionTitle from "../styled/sectionTitle";
import SectionText from "../styled/setctionText";
import CustomButton from "../Global/CustomButton";
import BookSectionCSS from "./BookSection.module.css";

export default function BiographySection() {
  return (
    <section className={BookSectionCSS.book_section}>
      <div className={`${BookSectionCSS.container} responsive-columns`}>
        <div className={BookSectionCSS.image}>
          <img src={image} className={BookSectionCSS.book_image} />
        </div>
        <div className={BookSectionCSS.text}>
          <SectionTitle marginBottom="0"> Βιογραφικό </SectionTitle>
          <SectionText>
            Ο Νίκος Καπετανίδης γεννήθηκε το 1889 στο Ριζέ. Γονείς του ο
            Χαράλαμπος Καπετανίδης και η Ερμοφύλλη Βελισαρίδου. Αδέλφια του η
            Χρυσάνθη (1891) και ο Κώστας (1895). Ως μαθητής στο περίφημο
            Φροντιστήριο της Τραπεζούντας είναι πολύ φίλος με τον Φίλωνα
            Κτενίδη, Θεόδωρο Κασσάνη, Ηλία Εφραιμίδη, με τους οποίους
            μοιράζονται την αγάπη για την λογοτεχνία.
          </SectionText>
          <CustomButton destination={"book"} text={"Μάθετε Περισσότερα"} />
        </div>
      </div>
    </section>
  );
}

/*<Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <CustomImage src={image} alt="Description of the image" />
          </Grid>
          <Grid item xs={5}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SectionTitle>Ο Νίκος Καπετανίδης</SectionTitle>
            <SectionText>
              Ο Νίκος Καπετανίδης γεννήθηκε το 1889 στο Ριζέ. Γονείς του ο
              Χαράλαμπος Καπετανίδης και η Ερμοφύλλη Βελισαρίδου. Αδέλφια του η
              Χρυσάνθη (1891) και ο Κώστας (1895). Ως μαθητής στο περίφημο
              Φροντιστήριο της Τραπεζούντας είναι πολύ φίλος με τον Φίλωνα
              Κτενίδη, Θεόδωρο Κασσάνη, Ηλία Εφραιμίδη, με τους οποίους
              μοιράζονται την αγάπη για την λογοτεχνία.
            </SectionText>
            <CustomButton
              destination={"kapetanidis"}
              text={"Μάθετε Περισσότερα"}
            />
          </Grid>
        </Grid>
      </Box> */
