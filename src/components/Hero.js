import React from "react";
import Navbar from "./Navbar";
import "./Styles.css";
import { particlesConfig } from "./config/particles-config";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div id="hero" className="hero-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          canvasClassName="particles-container"
        />
        <Navbar />
        <div className="hero-box1">
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "500",
            }}
            variant="h2"
            component="h2"
          >
            Hi, I'm Muhammad Hamza
          </Typography>
          <Typography
            style={{ color: "white", textAlign: "center", marginTop: 10 }}
            variant="h4"
            component="h4"
          >
            <b id="mern-color">MERN</b> Stack and{" "}
            <b id="react-native-color">React Native</b> Developer
          </Typography>
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
        </div>
      </div>
    </>
  );
};

export default Hero;
