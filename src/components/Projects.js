import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";



const Projects = () => {
  
  return (
    <div className="container projects-container">
      <Typography
        style={{ color: "white", textAlign: "center", margin: "3rem 0" }}
        variant="h3"
      >
        Projects
      </Typography>
      <section className="projects">
        <div data-aos="fade-down">
          <a
            className="project-link"
            href="https://mern-stack-cloth-retails-app.herokuapp.com/"
          >
            <Card className="project-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/mern-stack-app.png"
                  alt="green iguana"
                />
                <CardContent style={{ height: "100% !important" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Mern Stack Ecommerce App
                  </Typography>
                  <Typography variant="body2" color="grey">
                    Built an Ecommerce Web Application from scratch. Also
                    develop a dashboard for the admin. And much more..
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>
        <div data-aos="fade-down">
          <a
            className="project-link"
            href="https://main--ecommerce-firebase-react-app.netlify.app/"
          >
            <Card className="project-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/React-Redux.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React-Redux-Firebase Ecommerce App
                  </Typography>
                  <Typography variant="body2" color="grey">
                    Built an Ecommerce Web using React and Redux. For
                    Authentication and Databse Firebase is used as Backend.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>
        <div data-aos="fade-down">
          <a
            className="project-link"
            href="https://restaurant-website-de5b1.web.app/"
          >
            <Card className="project-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/restaurant-landing-page.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Restaurant Landing Page
                  </Typography>
                  <Typography variant="body2" color="grey">
                    Made a Landing Page using React Components.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>
        <div data-aos="fade-down">
          <a
            className="project-link"
            href="https://manage-landing-page56.netlify.app/"
          >
            <Card className="project-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/manage-landing-page.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Manage Landing Page
                  </Typography>
                  <Typography variant="body2" color="grey">
                    Took a free challenge form frontendmentor.io to build a
                    exact same landing page as it was designed.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>
        <div data-aos="fade-down">
          <a className="project-link" href="https://stopwatch-dcfc8.web.app/">
            <Card className="project-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/stop-watch.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stop Watch
                  </Typography>
                  <Typography variant="body2" color="grey">
                    Built a stop watch using HTML, CSS and Javascript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>
        <div data-aos="fade-down">
          <a
            className="project-link"
            href="https://quizapplication-e096b.web.app/"
          >
            <Card className="project-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/quiz-app.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stop Watch
                  </Typography>
                  <Typography variant="body2" color="grey">
                    Built a quiz application using HTML, CSS and Javascript
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
