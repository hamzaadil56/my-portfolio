import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./Styles.css";
import { styled } from "@mui/material/styles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
      color: "white",
    },
  },
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "user_uEbWw8WwOMXOG0uapz3pu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="container contact-container">
      <Typography
        style={{
          color: "white",
          textAlign: "center",
          margin: "3rem 0",
        }}
        variant="h3"
      >
        Contact Me
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <Typography variant="h5" style={{ color: "white" }}>
          Name
        </Typography>
        <CssTextField
          name="user_name"
          required
          id="custom-css-outlined-input"
          inputProps={{
            style: { color: "white" },
          }}
        />

        <Typography variant="h5" style={{ color: "white" }}>
          Email
        </Typography>
        <CssTextField
          id="outlined-email-input"
          required
          name="user_email"
          type={"email"}
          inputProps={{ style: { color: "white" } }}
        />
        <Typography variant="h5" style={{ color: "white" }}>
          Message
        </Typography>
        <CssTextField
          id="outlined-multiline-static"
          multiline
          name="message"
          rows={4}
          inputProps={{ style: { color: "white", margin: "1rem 0" } }}
        />
        <Stack spacing={2} sx={{ width: "100%" }}>
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Your Message has been sent{" "}
            </Alert>
          </Snackbar>
        </Stack>
      </form>
    </div>
  );
};

export default Contact;
