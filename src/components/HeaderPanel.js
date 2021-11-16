import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as styles from "../styles/HeaderPanel.module.scss";
// import { StaticImage } from "gatsby-plugin-image";

const LeftHeaderPanel = () => {
  return (
    <Col xs={12} sm={6} className={styles.alignContent}>
      <Row>
        <Col>
          <h1 className='py-2'>
            Hi there.!
            <span className={styles.wave}>👋</span>
            <br />I am Aman Gurung.
          </h1>
          <h4>Web developer from Pokhara, Nepal.</h4>
        </Col>
      </Row>
      <Row className='mt-1 mt-lg-4'>
        <Col xs={12} lg={5} className='my-3 mt-lg-0 hvr-shrink'>
          <AnchorLink
            to='/#aboutMe'
            key='about-me'
            title='About me'
            className={`${styles.aboutMeBtn} text-center text-sm-left`}
            stripHash
          >
            More About Me <FontAwesomeIcon icon={faArrowRight} size='md' />
          </AnchorLink>
        </Col>
      </Row>
    </Col>
  );
};

const RightHeaderPanel = () => {
  const data = useStaticQuery(graphql`
    query profileImageQuery {
      file(relativePath: { eq: "image.png" }) {
        id
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 380, placeholder: BLURRED)
        }
      }
    }
  `);
  const image = data.file.childImageSharp.gatsbyImageData;
  return (
    <Col sm={6} className={styles.pictureWrapper}>
      <GatsbyImage
        image={image}
        alt={"Profile picture"}
        className={styles.profilePicture}
      />
    </Col>
  );
};

export default function HeaderPanel() {
  return (
    <section className={styles.headerPanel}>
      <Container>
        <Row>
          <LeftHeaderPanel />
          <RightHeaderPanel />
        </Row>
      </Container>
    </section>
  );
}
