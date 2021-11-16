import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import jsonData from "../content/project-content.json";
import * as styles from "../styles/Projects.module.scss";

const CardComponent = ({ project, image }) => {
  return (
    <Card
      className={styles.card}
      data-aos='zoom-in-down'
      data-aos-duration='500'
    >
      <Card.Body className='text-center'>
        <Card.Title>{project.title}</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item variant='top'>
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              alt={image.node.name}
            />
          </ListGroup.Item>
          <ListGroup.Item>{project.description}</ListGroup.Item>
          <ListGroup.Item>{project.techUsed}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className='text-center py-3'>
        <a
          href={project.projectLink}
          target='_blank'
          rel='noreferrer'
          className={styles.sourceCodeLink}
        >
          <FontAwesomeIcon icon={faGithub} size='lg' /> Source Code
        </a>
      </Card.Footer>
    </Card>
  );
};

export default function Projects() {
  const data = useStaticQuery(graphql`
    query projectImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "project-images" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                quality: 90
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
  `);
  const projectImages = data.allFile.edges;
  const selectImage = (name) => {
    if (name === "") {
      return projectImages.find((image) => image.node.name === "project-bg");
    } else {
      return projectImages.find((image) => image.node.name === name);
    }
  };
  const projects = jsonData.projects.map((project, index) => {
    const image = selectImage(project.image);
    return <CardComponent project={project} key={index} image={image} />;
  });

  return (
    <section id='projects' className={styles.projects}>
      <Container>
        <h1 className='text-center'>Projects</h1>
        <CardGroup className='justify-content-center'>
          <Row xs={1} md={2} className='justify-content-center'>
            {projects}
          </Row>
        </CardGroup>
      </Container>
    </section>
  );
}
