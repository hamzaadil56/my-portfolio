import React from "react";
import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="container ">
        {/* <Box className="footer">
          <div className="icons-container">
            <a
              href="https://github.com/hamzaadil56"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ fontSize: "2rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hamza-adil/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ fontSize: "2rem" }} />
            </a>
            <a
              href="https://web.facebook.com/hamza.adil.549"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon style={{ fontSize: "2rem" }} />
            </a>
            <a
              href="https://www.instagram.com/hamzaadil56/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon style={{ fontSize: "2rem" }} />
            </a>
            <a
              href="https://twitter.com/hamza_chemE_dev"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon style={{ fontSize: "2rem" }} />
            </a>
          </div>
          <Typography variant="p">Designed by Muhammad Hamza </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CopyrightIcon style={{ margin: "0 1rem" }} />
            <Typography>Copyrights 2022</Typography>
          </Box>
        </Box> */}
      </footer>
    </>
  );
};

export default Footer;
