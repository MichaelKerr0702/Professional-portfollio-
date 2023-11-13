import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wmf4pf98d4l61.png";
import projImg2 from "../assets/img/1307940.png";
import projImg3 from "../assets/img/8313f67d2546e50652d4e31f74a1a789.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Reserve to dine",
      description: "Design & Development",
      imgUrl: projImg1,
      href:'https://github.com/MichaelKerr0702/Reserve-to-dine',
      id: 'fullstack'

    },
    {
      title: "Book Search",
      description: "Development",
      imgUrl: projImg1,
      href:'https://github.com/MichaelKerr0702/book-search',
      id: 'fullstack'
    },
    {
      title: "Product page",
      description: "Design & Development",
      imgUrl: projImg1,
      href:'https://github.com/MichaelKerr0702/mod13-chal',
      id: 'fullstack'
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
      href:'https://github.com/MichaelKerr0702/Professional-portfollio-',
      id: 'frontend'
    },
    {
      title: "Reserve to dine",
      description: "Design & Development",
      imgUrl: projImg2,
      href:'https://github.com/MichaelKerr0702/Reserve-to-dine',
      id: 'frontend'
    },
    {
      title: "professional readME generator",
      description: "Design & Development",
      imgUrl: projImg3,
      href:'https://github.com/MichaelKerr0702/professional-readME-generator',
      id: 'backend'
    },
    {
      title: "Nosql",
      description: "Design & Development",
      imgUrl: projImg3,
      href:'https://github.com/MichaelKerr0702/nosql',
      id: 'backend'
    },
    {
      title: "Reserve to dine",
      description: "Design & Development",
      imgUrl: projImg3,
      href:'https://github.com/MichaelKerr0702/Reserve-to-dine',
      id: 'backend'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Feel free to take a look at the variety of the projects I have done </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="frontend">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="backend">Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fullstack">Fullstack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="frontend">
                      <Row>
                        {
                          projects.map((project, index) => {
                            if (project.id ==='frontend'){
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          }
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="backend">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if (project.id ==='backend'){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            }
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="fullstack">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if (project.id ==='fullstack'){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            }
                          })
                        }
                      </Row>                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="img"src={colorSharp2}></img>
    </section>
  )
}