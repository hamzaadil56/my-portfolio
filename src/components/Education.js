import React from "react";
// import "./Education.css";
import "./Styles.css";

import "../index.css";
import { Typography } from "@mui/material";

const Education = () => {
  return (
    <div id="education" className="container education-container">
      <section>
        <Typography
          style={{ color: "white", textAlign: "center", margin: "2rem auto" }}
          variant="h3"
          component="h3"
          fontWeight="500"
        >
          Education
        </Typography>
      </section>
      <section className="section2">
        <div>
          <Typography
            style={{ fontWeight: "500" }}
            variant="h5"
            component={"h5"}
          >
            Presidential Initiative For Artificial Intelligence And Computing
            (PIAIC)
          </Typography>
          <Typography variant="p" component={"p"}>
            Specialist in Blockchain Development • Expected June 2023
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontWeight: "500" }}
            variant="h5"
            component={"h5"}
          >
            Coursera
          </Typography>
          <Typography variant="p" component={"p"}>
            Certificate in MERN Stack Development • 2022
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontWeight: "500" }}
            variant="h5"
            component={"h5"}
          >
            Udemy
          </Typography>
          <Typography variant="p" component={"p"}>
            Certificate in React Native Development • August 2022
          </Typography>
        </div>
        <div>
          <Typography
            style={{ fontWeight: "500" }}
            variant="h5"
            component={"h5"}
          >
            NED University of Engineering and Technology
          </Typography>
          <Typography variant="p" component={"p"}>
            Bachelors in Chemical Engineering •August 2023
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Education;
