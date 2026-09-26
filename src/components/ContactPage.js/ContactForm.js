import { React, useRef } from "react";
import ContactFormCSS from "./ContactForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocialMediaLink from "../styled/SocialMediaLink";
import TextField from "@mui/material/TextField";
import CustomButton from "../Global/CustomButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08404c",
    },
  },
  typography: {
    fontSize: 24,
  },
});

export default function () {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const topicInputRef = useRef();
  const textInputRef = useRef();

  const submitHandler = () => {
    // event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredname = nameInputRef.current.value;
    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    console.log("Στάλθηκε");
  };

  return (
    <div className={ContactFormCSS.container}>
      <div className={ContactFormCSS.form}>
        <ThemeProvider theme={theme}>
          <div className={ContactFormCSS.flex}>
            <SocialMediaLink to={"blog"}>
              <EmailIcon sx={{ fontSize: "2.5rem" }} />
            </SocialMediaLink>
            <div className={ContactFormCSS.email}>kokapetani@gmail.com</div>
          </div>
          <div className={ContactFormCSS.line}>
            <hr />
          </div>
          <div className={ContactFormCSS.title}>Αποστολή E-mail</div>
          <form onSubmit={submitHandler}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "2rem" }}
              InputLabelProps={{
                style: { fontWeight: "bold" },
              }}
              InputProps={{
                style: { backgroundColor: "#ebebeb" },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Όνομα"
              variant="outlined"
              sx={{ marginBottom: "2rem" }}
              fullWidth
              InputLabelProps={{
                style: { fontWeight: "bold" },
              }}
              InputProps={{
                style: { backgroundColor: "#ebebeb" },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Θέμα"
              variant="outlined"
              sx={{ marginBottom: "2rem" }}
              fullWidth
              InputLabelProps={{
                style: { fontWeight: "bold" },
              }}
              InputProps={{
                style: { backgroundColor: "#ebebeb" },
              }}
            />

            <div className={ContactFormCSS.control}>
              <label htmlFor="text">Μήνυμα</label>
              <textarea
                className={ContactFormCSS.text}
                id="text"
                required
                ref={textInputRef}
              />
            </div>
            <CustomButton text={"Aποστολή Μηνύματος"} color={"blue"} />
          </form>
        </ThemeProvider>
      </div>
    </div>
  );
}
