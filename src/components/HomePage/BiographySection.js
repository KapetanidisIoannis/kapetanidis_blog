import React from "react";
import biographycover from "./../../images/biographyImage.png";
import BiographySectionCSS from "./BiographySection.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocialMediaLink from "../styled/SocialMediaLink";
import SectionTitle from "../styled/sectionTitle";
import SectionText from "../styled/setctionText";
import CustomButton from "../Global/CustomButton";
import CustomImage from "../styled/CustomImage";
import CustomCaption from "./../styled/customCaption";

export default function BiographySection() {
  return (
    <section
      style={{
        backgroundColor: "#e2dbcf",
        padding: "17.5rem 0rem 7.5rem 0rem",
      }}
    >
      <Box sx={{ flexGrow: 1, marginLeft: "22.5%", marginRight: "22.5%" }}>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <CustomImage src={biographycover} alt="Description of the image" />
            <CustomCaption>
              Aποκαλυπτήρια αγάλματος "Νίκος Καπετανίδης" στο πάρκο "Παύλος
              Μελάς" της Θεσσαλονίκης 21 Σεπτ. 2021
            </CustomCaption>
          </Grid>
          <Grid item xs={7}>
            <div className={BiographySectionCSS.text}>
              <SectionTitle>Βιογραφικό Συγγραφέα</SectionTitle>
              <SectionText>
                <div style={{ overflowWrap: "break-word" }}>
                  Ο Κώστας Καπετανίδης σπούδασε πολιτικός μηχανικός και έκανε
                  μεταπτυχιακές σπουδές στην «Διαχείριση Τεχνικών Έργων». Έχει
                  εξειδικευτεί σε θέματα σιδηροδρόμου και απο το το 2011
                  προσφέρει τις υπηρεσίες του στην Ρυθμιστική Αρχή Σιδηροδρόμων
                  (ΡΑΣ) σε θέματα ασφάλειας σιδηροδρόμων. Παράλληλα από το 2009
                  ασχολείται ενεργά ως ιστορικός ερευνητής της περιόδου των
                  τελευταίων ετών του Ποντιακού Ελληνισμού και ειδικότερα με την
                  ανάδειξη της ζωής και του δημοσιογραφικού έργου (του αδελφού
                  του παππού του) Νίκου Καπετανίδη, εμβληματικής προσωπικότητας
                  της Ποντιακής γενοκτονίας.
                </div>
              </SectionText>
              <div style={{ paddingTop: "2rem" }}>
                <CustomButton
                  color={"blue"}
                  text={"Mάθετε Περισσότερα"}
                  destination={"biography"}
                />
              </div>
              <div>
                <hr
                  style={{
                    height: "1px",
                    border: "0",
                    margin: "2rem 0",
                    background: "black",
                  }}
                />
              </div>
              <div className={BiographySectionCSS.description_bold}>
                Κώστας Καπετανίδης
              </div>
              <div className={BiographySectionCSS.description}>
                Πολιτικός Μηχανικός, Συγγραφέας
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <SocialMediaLink to={"contact"}>
                  <EmailIcon sx={{ fontSize: "2.5rem" }} />
                </SocialMediaLink>
                <SocialMediaLink
                  to={"https://www.facebook.com/profile.php?id=100002981243493"}
                >
                  <FacebookIcon sx={{ fontSize: "2.5rem" }} />
                </SocialMediaLink>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
