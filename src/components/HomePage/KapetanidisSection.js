import React from "react";
import group from "./../../images/group.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionTitle from "../styled/sectionTitle";
import SectionText from "../styled/setctionText";
import CustomButton from "../Global/CustomButton";
import CustomImage from "../styled/CustomImage";
import CustomCaption from "../styled/customCaption";

export default function KapetanidisSection() {
  return (
    <section
      style={{
        backgroundColor: "#90a9ae",
        padding: "5rem 0",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          margin: "0 auto",
          maxWidth: "95rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <SectionTitle>Ο Νίκος Καπετανίδης</SectionTitle>
            <SectionText>
              “...Όταν το λαϊκον ξύπνημα εδώ εις την Ανατολήν θ΄αρχίση να πάρει
              ζωήν και να προχωρήση προς μίαν ωραίαν και ελπιδοφόρον ανατολή,
              ευχόμεθα μ’ όλην την ψυχή μας να ευρεθούν οι ωραίοι στο σώμα και
              ωραίοι στην ψυχήν Νέοι να γίνουν οι κήρυκες της λαϊκής
              αποσκλαβώσεως και οι πρόδρομοι μιας εθνικής και κοινωνικής
              ωριμότητάς του ανατολικού Ελληνισμού… “
            </SectionText>
            <CustomButton
              destination={"kapetanidis"}
              text={"Μάθετε Περισσότερα"}
            />
          </Grid>
          <Grid item xs={7}>
            <CustomImage src={group} alt="Description of the image" />
            <CustomCaption>
              Ο Νίκος Καπετανίδης ντυμένος στα λευκά στη πλατεία Μειντάν της
              Τραπεζούντας - Ιούνιος 1917
            </CustomCaption>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
