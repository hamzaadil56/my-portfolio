import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import "./Styles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container services-container">
      <div data-aos="fade-in">
        <Typography
          style={{ color: "white", fontWeight: "500", textAlign: "center" }}
          variant="h3"
          component="h3"
        >
          Services
        </Typography>
      </div>
      <section>
        <div data-aos="zoom-out" className="service-card">
          <Typography style={{ fontWeight: "500" }} variant="h6">
            Web Development
          </Typography>
          <div>
            <img
              width="100%"
              height="100%"
              src="./images/web-development.gif"
              alt="web_development"
            />
          </div>
        </div>
        <div data-aos="zoom-out" className="service-card">
          <Typography style={{ fontWeight: "500" }} variant="h6">
            Mobile App Development
          </Typography>
          <div>
            <img
              width="100%"
              height="100%"
              src="./images/mobile-development.gif"
              alt="web_development"
            />
          </div>
        </div>

        <div data-aos="zoom-out" className="service-card">
          <Typography style={{ fontWeight: "500" }} variant="h6">
            Debuggiing
          </Typography>
          <div>
            <img
              width="100%"
              height="100%"
              src="./images/debugging.gif"
              alt="web_development"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
