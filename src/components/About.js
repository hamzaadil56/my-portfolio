import React from "react";
// import "./About.css";
import "./Styles.css";
import DownloadIcon from "@mui/icons-material/Download";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div id="about">
      <Typography
        style={{ color: "white", textAlign: "center", margin: "2rem auto" }}
        variant="h3"
        component="h3"
        fontWeight="500"
      >
        About Me
      </Typography>
      <div className="container about-container">
        <section data-aos="fade-in">
          <article>
            <Typography variant="p" component="p">
              My name is Muhammad Hamza and I'm a self taught programmer.
              Currently I am pursuing a bachelor's degree in Chemical
              Engineering at NED University of Engineering and Technology. I am
              passionate about programming and I like to build full stack web
              applications using MERN Stack and also passionate about developing
              mobile apps using React Native. I've a valuable experience in web
              and mobile app development and love to work with clients and show
              my expertise in it.
            </Typography>
          </article>
          <div>
            <a
              href="./images/Hamza Developer.pdf"
              download
              className="btn download-btn"
            >
              <DownloadIcon style={{ color: "white" }} />
              Download Resume
            </a>
          </div>
        </section>
        <section>
          <img
            className="profile-pic"
            src="./images/profile-pic(1).png"
            alt=""
            width="70%"
            height="70%"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
