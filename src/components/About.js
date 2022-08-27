import React from "react";
import "./About.css";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  return (
    <div className="container about-container">
      <section>
        <h2>About Me</h2>
        <article>
          My name is Muhammad Hamza and I'm a self taught programmer. I like to
          build full stack web applications using MERN and also passionate about
          developing mobile apps using React Native. I've a valuable experience
          in web and mobile app development and love to work with clients and
          show my expertise in it.
        </article>
        <div>
          <button className="btn download-btn">
            <DownloadIcon style={{ color: "white" }} />
            Download Resume
          </button>
        </div>
      </section>
      <section>
        <img
          src="./images/profile-pic(1).png"
          alt=""
          width="300px"
          height={"300px"}
        />
      </section>
    </div>
  );
};

export default About;
