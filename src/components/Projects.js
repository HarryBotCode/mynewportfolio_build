import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import caretechVideo from "../assets/videos/project-video.mp4";
import aechsVideo from "../assets/videos/ams-video.mp4"
import emsVideo from "../assets/videos/ems-videos.mp4"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const projects = [
    {
      title: "CareTech Mobile App",
      description: "The CareTech Mobile App connects clients in the UAE with highly skilled professionals, offering prompt, reliable, and efficient services for a wide range of tasks, delivered conveniently to your doorstep.",
      imgUrl: projImg1,
      link: null,
      gitlink: "https://github.com/Webtronix-Tech/caretech-mobile-app",
      video: caretechVideo,
    },
   
    {
      title: "AECHS Mobile App",
      description: "The AECHS handyman service app connects you with qualified professionals who can assist with various tasks at your doorstep, ensuring fast, reliable, and efficient service",
      imgUrl: projImg3,
      link: null,
      gitlink: "https://github.com/HarryBotCode/aechs-client",
      video: aechsVideo,
    },
    {
      title: "EMS Mobile App",
      description: "The (Employee Management System) is an app that allows employees to log in and scan a QR code for attendance tracking. HR can monitor attendance and leave records, while employees can view their check-in and check-out status, including punctuality details such as on-time or late arrivals.",
      imgUrl: projImg4,
      link: null,
      gitlink: "https://github.com/HarryBotCode/ems-client",
      video: emsVideo,
    },
    {
      title: "DoCurious Web App",
      description: "A MERN stack app offering curated challenges in fitness and personal growth, tailored for the American audience. It fosters collaboration, inspires goal achievement, and promotes community engagement.",
      imgUrl: projImg2,
      link: "https://docurious.com",
      gitlink: "https://example.com/docurious",
    },

    {
      title: "CoCo Cookies Website",
      description: "A MERN stack-based Cookies E-commerce Website for UK users, featuring secure authentication, product listings, shopping cart, and checkout. Built with Node.js, Express, MongoDB, and React.js for a seamless and responsive experience.",
      imgUrl: projImg10,
      link: "https://cococookies.co.uk",
      gitlink: "https://github.com",
    },
    {
      title: "School Management System",
      description: "A robust system for managing educational institutions, built with React, Chakra UI, and API integrations using Laravel.",
      imgUrl: projImg6,
      link: "https://github.com/HarryBotCode/axiom-portal",
      gitlink: "https://github.com/HarryBotCode/axiom-portal",
    },
    {
      title: "E-Commerce Computer Store",
      description: "A full-featured e-commerce website for computer and accessory sales, developed with the MERN stack.",
      imgUrl: projImg5,
      link: "https://example.com/startup3",
      gitlink: "https://github.com",
    },
    {
      title: "E-Commerce Supplement Store",
      description: "An aesthetically appealing e-commerce platform for supplements, built using React and Tailwind CSS.",
      imgUrl: projImg7,
      link: "https://aestheticnutrition.netlify.app",
      gitlink: "https://github.com",
    },
    // {
    //   title: "Advanced School Management System",
    //   description: "A feature-rich school management system built with React, Chakra UI, and Laravel for streamlined academic administration.",
    //   imgUrl: projImg5,
    //   link: "https://github.com",
    //   gitlink: "https://github.com",
    // },
    
    {
      title: "My Portfolio Website",
      description: "Developed using React.JS & Bootstrap",
      imgUrl: projImg9,
      link: "https://harrisjavedportfolio.netlify.app",
      gitlink: "https://github.com",
    },
  ];


  const handleShowModal = (video) => {
    setVideoSrc(video);
    setShowModal(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    I have 2 years of experience with the MERN stack (MongoDB, Express, React, Node.js), during which I have developed full-stack applications independently and collaborated effectively with developers and designers. My expertise includes creating responsive and user-friendly web and mobile applications using React.js and React Native. I have designed and implemented efficient APIs and server-side functionalities with Node.js and Express.js, while managing dynamic and scalable databases using MongoDB. Additionally, I have prioritized optimizing applications for performance, responsiveness, and cross-platform compatibility, ensuring seamless user experiences.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              video={project.video}
                              onWatchVideo={() => handleShowModal(project.video)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(3, 6).map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              video={project.video}
                              onWatchVideo={() => handleShowModal(project.video)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.slice(6, 9).map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              video={project.video}
                              onWatchVideo={() => handleShowModal(project.video)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />

      {/* Modal for video */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {videoSrc ? (
            <video width="100%" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video available for this project.</p>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};
