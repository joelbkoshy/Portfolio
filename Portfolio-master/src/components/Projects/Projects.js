import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Notio"
              description="An instant social media scrapper and sentiment analysis tool to analyse the sentiments of the people towards a social media post. Implemented natural language processing (NLP) techniques with NLTK to analyze scraped comments,enabling the system to classify sentiment as positive, negative, or neutral."
              ghLink="https://github.com/joelbkoshy/Notio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ShopSmart"
              description="
              ShopSmart project is a self-checkout system that utilizes mobile scanning
              technology to improve customers’ shopping experience. This system provides an
              efficient and convenient way for customers to purchase items in a store without waiting
              in long queues. The project utilizes a virtual cart system that enables customers to scan
              and add items to their cart using mobile devices."
              ghLink="https://github.com/joelbkoshy/shopsmart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="oneHealth"
              description="oneHealth is a cutting-edge web application aimed at early disease detection, including brain tumors, heart conditions, and diabetes. By leveraging the power of machine learning and image processing, it enables users to gain insights into their health conditions based on their brain scans and other health parameters, potentially saving lives through early intervention."
              ghLink="https://github.com/HemantDutta/oneHealth"
            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
