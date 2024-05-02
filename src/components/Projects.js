import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cookies Website",
      description: "Developed in React and Chakra-UI",
      imgUrl: projImg1,
      link: "https://cococookies.co.uk",
      gitlink: "https://github.com",
    },
    {
      title: "DoCurious Web App",
      description: "Developed using React & Chakra-UI",
      imgUrl: projImg2,
      link: "https://docurious.com",
      gitlink: "https://example.com/docurious",
    },
    {
      title: "School Management System",
      description: "Developed using React/Chakra-UI & Laravel",
      imgUrl: projImg6,
      link: "https://github.com",
      gitlink: "https://github.com",
    },
   
   
    {
      title: "My Portfolio Website",
      description: "Developed using React.JS & Bootstrap",
      imgUrl: projImg4,
      link: "https://harrisjavedportfolio.netlify.app",
      gitlink: "https://github.com",
    },
    {
      title: "Traveling Website for Booking",
      description: "Developed using React & Chakra-UI",
      imgUrl: projImg3,
      link: "https://touring-website.netlify.app",
      gitlink: "https://github.com",
    },
    {
      title: "E-Commerce Computer Shop",
      description: "Developed using MERN Stack",
      imgUrl: projImg5,
      link: "https://example.com/startup3",
      gitlink: "https://github.com",
    },
    {
      title: "E-Commerce Supplement Shop",
      description: "Developed using React & Tailwind",
      imgUrl: projImg7,
      link: "https://aestheticnutrition.netlify.app",
      gitlink: "https://github.com",
    },
    {
      title: "Cookies Website",
      description: "Developed in React and Chakra-UI",
      imgUrl: projImg1,
      link: "https://cococookies.co.uk",
      gitlink: "https://github.com",
    },
    {
      title: "DoCurious Web App",
      description: "Developed using React & Chakra-UI",
      imgUrl: projImg2,
      link: "https://docurious.com",
      gitlink: "https://example.com/docurious",
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have contributed to building responsive websites using HTML5/CSS, Javascript and React.JS. Collaborated with web designers and back-end developers to create user-friendly web applications. Optimized web pages for maximum speed and compatibility across different browsers and devices.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.slice(0, 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects.slice(3, 6).map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects.slice(6, 9).map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
