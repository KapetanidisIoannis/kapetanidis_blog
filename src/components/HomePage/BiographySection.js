import React from "react";
import image from "./../../images/Component 3.png";
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
      <Box sx={{ flexGrow: 1, marginLeft: "16%", marginRight: "16%" }}>
        <Grid container spacing={25}>
          <Grid item xs={5}>
            <img
              src={image}
              style={{ width: "440px", height: "auto" }}
              alt="Description of the image"
            />
          </Grid>
          <Grid item xs={7}>
            <div className={BiographySectionCSS.text}>
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
              <SectionTitle>Βιογραφικό Νίκου Καπετανίδη</SectionTitle>
              <SectionText>
                <div style={{ overflowWrap: "break-word" }}>
                  Ο Νίκος Καπετανίδης γεννήθηκε το 1889 στο Ριζέ. Γονείς του ο
                  Χαράλαμπος Καπετανίδης και η Ερμοφύλλη Βελισαρίδου. Αδέλφια
                  του η Χρυσάνθη (1891) και ο Κώστας (1895). Ως μαθητής στο
                  περίφημο Φροντιστήριο της Τραπεζούντας είναι πολύ φίλος με τον
                  Φίλωνα Κτενίδη, Θεόδωρο Κασσάνη, Ηλία Εφραιμίδη, με τους
                  οποίους μοιράζονται την αγάπη για την λογοτεχνία.
                </div>
              </SectionText>
              <div>
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
                <CustomButton
                  color={"blue"}
                  text={"Mάθετε Περισσότερα"}
                  destination={"n_biography"}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
