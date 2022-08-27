import React from "react";
import { Typography,Box } from "@mui/material";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Education.css";
import "./About.css";

const Skills = () => {
  

  const skills = [
    {
      skill : "React JS",
      image: "./images/react-removebg-preview(1).png",
      value:90
    },
    {
      skill : "Firebase",
      image: "./images/firebase-removebg-preview.png",
      value:70
    },
    {
      skill : "Redux",
      image: "./images/redux-removebg-preview.png",
      value:85
    },
    {
      skill : "Material UI",
      image: "./images/index-removebg-preview.png",
      value:75
    },
    {
      skill : "Node JS",
      image: "./images/nodejs.png",
      value:80
    },
    {
      skill : "Express JS",
      image: "./images/expressjs.png",
      value:80
    },
    {
      skill : "Mongo DB",
      image: "./images/mongodb.png",
      value:70
    }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container skills-container">
        <Typography
          style={{ color: "white", textAlign: "center",margin:"2rem auto" }}
          variant="h3"
          component="h3"
          fontWeight= "500"
          
        >
          Skills
        </Typography>
        {skills.map((item, index) => (
          <section key={index} className="skills-box-main">
            <div className="box">
              <Typography
                variant="h5"
                component={"h5"}
                style={{ color: "white", margin: "auto 1rem",
              }}
              >
               {item.skill}
              </Typography>
              
            </div>
            <div className="skills-logo box-sk">
              <img width={"45px"} height="45px" src={item.image} />
            </div>
            <Box  className = "skills-filler" >
              <Box className = "filler-box" style={item.skill === "React JS"?{backgroundColor:"aqua", width:"90%" , height:"4vh"} :null || item.skill === "Redux" ?{backgroundColor:"purple", width:"80%",height:"4vh"} : null|| item.skill === "Firebase" ? {backgroundColor:"orange", width:"70%",height:"4vh"}:null || item.skill === "Material UI"?{backgroundColor:"blue", width:"75%",height:"4vh"}:null || item.skill === "Node JS" ? {backgroundColor:"yellowgreen", width:"80%",height:"4vh"}:null || item.skill === "Express JS"? {backgroundColor:"yellow", width:"80%",height:"4vh"} : null || item.skill === "Mongo DB"? {backgroundColor:"green", width:"70%",height:"4vh"}:null}></Box>
            </Box>
            <div className="percent box-sk">
              <Typography
                variant="h5"
                component={"h5"}
                style={{ color: "white" }}
              >
                {item.value}%
              </Typography>
            </div>
          </section>
        ))}

       
      </div>
    </>
  );
};

export default Skills;
