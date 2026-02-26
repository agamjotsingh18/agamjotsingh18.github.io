import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rentaproperty from "../../Assets/Projects/rent-a-property.png";
import hostel from "../../Assets/Projects/hostel.jpeg";
import imagerecognitionapi from "../../Assets/Projects/image-recognition-api.png";
import pollitup from "../../Assets/Projects/pollitup.png";
import trendhora from "../../Assets/Projects/TrendHora.png";
import memeGenerator from "../../Assets/Projects/memeGenerator.png";
import CodeSetGo from "../../Assets/Projects/CodeSetGo.png";
import printogether from "../../Assets/Projects/Printogether.png";
import harmaigJeweller from "../../Assets/Projects/Harmaig Jeweller.png"
import blogWithMe from "../../Assets/Projects/blog-with-me.png";


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
              imgPath={trendhora}
              isBlog={false}
              title="TrendHora"
              description="Trendhora combines a polished front-end experience with a robust Node/Mongo back end to help small teams ship a production-ready marketplace quickly."
              ghLink="https://github.com/agamjotsingh18/trendhora"
              demoLink="https://trendhora.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printogether}
              isBlog={false}
              title="Printogether"
              description="Printogether is a web application that allows users to print their designs and get them delivered to their doorstep."
              ghLink="https://github.com/agamjotsingh18/printogether"
              demoLink="https://printogether.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={harmaigJeweller}
              isBlog={false}
              title="Harmaig Jeweller"
              description="Harmaig Jewller are a direct-to-consumer (D2C) jewelry brand, backed by a rich family heritage in the jewelry business since 1992. Now, we're embarking on an online venture led by IIT Bombay students."
              ghLink="https://github.com/agamjotsingh18/harmaig-jeweller"
              demoLink="https://harmaig-jeweller.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollitup}
              isBlog={false}
              title="Poll It Up"
              description="A community polling app with unlimited potential. The community can pick and choose which polls are most important for them, this can allow the community to prioritize the most urgent polls that could potentially cause drastic reforms."
              ghLink="https://github.com/agamjotsingh18/pollitup"
              demoLink="https://pollitup.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeSetGo}
              isBlog={false}
              title="CodeSetGo"
              description="CodeSetGo is a community made for the students and made by the students. It's a place for Tech Enthusiasts to learn the latest technology in the comfort and convenience of their homes!"
              ghLink="https://github.com/agamjotsingh18/codesetgo"
              demoLink="https://codesetgo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagerecognitionapi}
              isBlog={false}
              title="Image-Recognition-API"
              description="This is a web application that provides an API for image recognition using the Clarifai API. It allows you to send images to the API and receive predictions and analysis based on the content of the images. Upload images for recognition and analysis. Receive predictions and analysis results based on the content of the images. Supports multiple image formats."
              ghLink="https://github.com/agamjotsingh18/Image-Recognition-API"
              demoLink="https://image-recognition-api.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentaproperty}
              isBlog={false}
              title="Rent A Property"
              description="Rent a Property is a web application that allows users to search and rent properties. It provides a user-friendly interface for property owners to list their properties and for users to search and rent properties based on their requirements."
              ghLink="https://github.com/agamjotsingh18/rent-a-property"
              demoLink="https://rent-a-property-webapp.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogWithMe}
              isBlog={false}
              title="Blog With Me"
              description="Blog With Me, a full-featured blogging platform where users can create, edit, and view blog posts. This application is built using the MERN (MongoDB, Express, React, Node.js) stack."
              ghLink="https://github.com/agamjotsingh18/blog-with-me"
              demoLink="https://blog-with-me.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memeGenerator}
              isBlog={false}
              title="Meme Generator"
              description="This is a web application that allows users to generate and customize memes. It provides an intuitive interface where users can select an image, add text captions, and generate a meme with their customizations."
              ghLink="https://github.com/agamjotsingh18/meme-generator-task"
              demoLink="https://meme-generator-random.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostel}
              isBlog={false}
              title="Hostel Management System"
              description="The Hostel Management System is a web-based application that simplifies the management of hostels. It provides an efficient way to handle various hostel-related operations such as student registration, room allocation, fee management, and staff management."
              ghLink="https://github.com/agamjotsingh18/hostel-management-system"
              // demoLink=""     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
