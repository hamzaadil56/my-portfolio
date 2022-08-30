import React from "react";
import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";

// import "./Education.css";
// import "./About.css";

const Skills = () => {
  const skills = [
    {
      skill: "React JS",
      image: "./images/react-removebg-preview(1).png",
      value: 90,
    },
    {
      skill: "Firebase",
      image: "./images/firebase-removebg-preview.png",
      value: 70,
    },
    {
      skill: "Redux",
      image: "./images/redux-removebg-preview.png",
      value: 85,
    },
    {
      skill: "Material UI",
      image: "./images/index-removebg-preview.png",
      value: 75,
    },
    {
      skill: "Node JS",
      image: "./images/nodejs.png",
      value: 80,
    },
    {
      skill: "Express JS",
      image: "./images/expressjs.png",
      value: 80,
    },
    {
      skill: "Mongo DB",
      image: "./images/mongodb.png",
      value: 70,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="skills" className="container ">
        <div>
          <Typography
            style={{ color: "white", textAlign: "center", margin: "2rem auto" }}
            variant="h3"
            component="h3"
            fontWeight="500"
          >
            Skills
          </Typography>
        </div>
        <div className=" skills-container">
          {skills.map((item, index) => (
            <div className="skill-box-main">
              <img src={item.image} alt="skill" />
              <Typography style={{ color: "white" }} variant="h4">
                {item.skill}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
