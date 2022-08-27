import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import { particlesConfig } from "./config/particles-config";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Typography } from "@mui/material";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className="hero-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          canvasClassName="particles-container"
        />
        <Navbar />
        <div className="hero-box1">
          <Typography
            style={{ color: "white", textAlign: "center", fontWeight: "500" }}
            variant="h2"
            component="h1"
          >
            Hi, I'm Muhammad Hamza
          </Typography>
          <Typography
            style={{ color: "white", textAlign: "center", marginTop: 10 }}
            variant="h4"
            component="h2"
          >
            <b id="mern-color">MERN</b> Stack and{" "}
            <b id="react-native-color">React Native</b> Developer
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Hero;
