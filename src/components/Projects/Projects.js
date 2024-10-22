import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eCommerce from "../../Assets/Projects/eCommerce.jpeg"; // Ensure you have an image for this project
import myWineShop from "../../Assets/Projects/mywineshop.png"; // Ensure you have an image for this project
import mangoPhone from "../../Assets/Projects/mangophone.png"; // Ensure you have an image for this project
import vitaSnap from "../../Assets/Projects/vitaSnap.jpeg"; // Ensure you have an image for this project
import devOpsPractices from "../../Assets/Projects/devops.png"; // Ensure you have an image for this project

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
              imgPath={myWineShop}
              isBlog={false}
              title="MyWineShop"
              description="A web application developed with Laravel as part of my Internet and Electronic Business course. This e-commerce platform introduced me to web development, the Model-View-Controller architecture, and user interface development using Bootstrap and HTML."
              ghLink="https://github.com/juuangarciac/es.uca.mywineshop.laravel" // Replace with your GitHub link
              // demoLink="link_to_demo" // Include a demo link if applicable
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mangoPhone}
              isBlog={false}
              title="MangoPhone"
              description="A web application developed with Vaadin and Spring Boot, deployed on AWS. This platform includes a front-office for customers and a back-office for employees, giving me experience in teamwork and Java frameworks."
              ghLink="https://github.com/Manuel-Coca/iw2023-2024-MangoPhone" // Replace with your GitHub link
              // demoLink="link_to_demo" // Include a demo link if applicable
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devOpsPractices}
              isBlog={false}
              title="DevOps Practices"
              description="This repository contains practices carried out in the System Virtualization course, exploring deployment tools like Azure Pipelines, GitLab, Terraform, Jenkins, and Docker. Gained understanding of containerization and CI/CD practices."
              ghLink="https://github.com/juuangarciac/es.uca.virtualizacionsistemas.devops" // Replace with your GitHub link
              // demoLink="link_to_demo" // Include a demo link if applicable
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="E-commerce Terminal Application"
              description="A terminal application developed in C++. This application was part of my learning in Object-Oriented Programming, introducing concepts such as Classes, Objects, Inheritance, and Polymorphism."
              ghLink="https://github.com/juuangarciac/es.uca.e-shop.cpp" // Replace with your GitHub link
              // demoLink="link_to_demo" // Include a demo link if applicable
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vitaSnap}
              isBlog={false}
              title="VitaSnap"
              description="Developed using the SpringBoot framework and a React application. Focused on building a private API with secure access using API keys and SpringSecurity, exploring the growing use of APIs in web development."
              ghLink="https://github.com/juuangarciac/es.juuangarciac.vitasnap.java" // Replace with your GitHub link
              // demoLink="link_to_demo" // Include a demo link if applicable
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
