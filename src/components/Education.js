import React from "react";
import "./Education.css";
import "../index.css";
const Education = () => {
  return (
    <div className="container education-container">
      <section>
        <h2>Education</h2>
      </section>
      <section className="section2">
        <div>
          <h3>
            Presidential Initiative For Artificial Intelligence And Computing
            (PIAIC)
          </h3>
          <p>Specialist in Blockchain Development • Expected June 2023</p>
        </div>
        <div>
          <h3>Coursera</h3>
          <p>Certificate in MERN Stack Development • 2022</p>
        </div>
        <div>
          <h3>Udemy</h3>
          <p>Certificate in React Native Development • August 2022</p>
        </div>
        <div>
          <h3>NED University of Engineering and Technology</h3>
          <p>Bachelors in Chemical Engineering •August 2023</p>
        </div>
      </section>
    </div>
  );
};

export default Education;
