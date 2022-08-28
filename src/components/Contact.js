import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./Styles.css";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";

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

const Contact = () => {
  return (
    <div className="container">
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
      <section>
        <form action="">
          <Typography variant="h6" style={{ color: "white" }}>
            Name
          </Typography>
          <CssTextField
            label="Name"
            name="name"
            required
            id="custom-css-outlined-input"
            inputProps={{
              style: { color: "white" },
            }}
          />

          <Typography variant="h6" style={{ color: "white" }}>
            Email
          </Typography>
          <CssTextField
            label="Email"
            id="outlined-email-input"
            required
            type={"email"}
            inputProps={{ style: { color: "white" } }}
          />
          <Typography variant="h6" style={{ color: "white" }}>
            Message
          </Typography>
          <CssTextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            inputProps={{ style: { color: "white", margin: "1rem 0" } }}
          />
          <div>
            <button className="btn submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
