import React from "react";
import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Education.css";
import "./About.css";

const Skills = () => {
  function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  const skillsRef = useRef(null);
  const skills = [
    {
      reactJS: "./images/react-removebg-preview(1).png",
    },
    {
      redux: "./images/redux-removebg-preview.png",
    },
    {
      materialUI: "./images/index-removebg-preview.png",
    },
    {
      firebase: "./images/firebase-removebg-preview.png",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container skills-container">
        <Typography
          style={{ color: "white", textAlign: "center" }}
          variant="h4"
          component="h4"
        >
          Skills
        </Typography>
        {skills.map((skill, index) => (
          <section key={index} className="skills-box-main">
            <div className="box">
              <Typography
                variant="h5"
                component={"h5"}
                style={{ color: "white", margin: "auto 1rem" }}
              >
                {capitalize(Object.keys(skill)[0])}
              </Typography>
            </div>
            <div>
              <img width={"45px"} height="45px" src={Object.values(skill)[0]} />
            </div>
            <div data-aos="fade-right" className="skills-filler"></div>
            <div className="box">
              <Typography
                variant="h5"
                component={"h5"}
                style={{ color: "white" }}
              >
                0%
              </Typography>
            </div>
          </section>
        ))}

        {/* <section className="skills-box-main">
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white", margin: "auto 1rem" }}
            >
              React JS
            </Typography>
          </div>
          <img
            width={"45px"}
            height="45px"
            src="./images/redux-removebg-preview.png"
          />
          <div className="skills-filler" ref={skillsRef}></div>
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white" }}
            >
              0%
            </Typography>
          </div>
        </section>
        <section className="skills-box-main">
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white", margin: "auto 1rem" }}
            >
              React JS
            </Typography>
          </div>
          <img
            width={"45px"}
            height="45px"
            src="./images/index-removebg-preview.png"
          />
          <div className="skills-filler" ref={skillsRef}></div>
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white" }}
            >
              0%
            </Typography>
          </div>
        </section>
        <section className="skills-box-main">
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white", margin: "auto 1rem" }}
            >
              React JS
            </Typography>
          </div>
          <img
            width={"45px"}
            height="45px"
            src="./images/firebase-removebg-preview.png"
          />
          <div className="skills-filler" ref={skillsRef}></div>
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white" }}
            >
              0%
            </Typography>
          </div>
        </section>
        <section className="skills-box-main">
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white", margin: "auto 1rem" }}
            >
              React JS
            </Typography>
          </div>
          <img width={"45px"} height="45px" src="./images/profile-pic(1).png" />
          <div className="skills-filler" ref={skillsRef}></div>
          <div>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ color: "white" }}
            >
              0%
            </Typography>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Skills;
