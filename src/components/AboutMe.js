import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import Typist from "react-typist";

import * as styles from "../styles/AboutMe.module.scss";

const TechnicalSkills = () => {
  const data = useStaticQuery(graphql`
    query logoImagesQuery {
      allFile(
        filter: { relativeDirectory: { eq: "logos" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                quality: 75
                height: 64
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
    }
  `);
  const logos = data.allFile.edges;
  const test = logos.map(
    ({
      node: {
        id,
        name,
        childImageSharp: { gatsbyImageData: image },
      },
    }) => {
      return (
        <Col xs={4} key={id} className='d-flex justify-content-center'>
          <GatsbyImage image={image} alt={name} className={styles.logo} />
        </Col>
      );
    }
  );
  return (
    <Col xs={12} md={6} className='mt-3 mt-md-0'>
      <h1 className='text-center mb-4'>Technical Skills</h1>
      <Row>{test}</Row>
    </Col>
  );
};

const AboutMeContent = () => {
  return (
    <Col xs={12} md={6} className={`mt-3 mt-sm-0 ${styles.content}`}>
      <h1>
        <p className='text-center mb-4'>Hello.!</p>
      </h1>
      <p>My name is Aman Gurung.</p>
      <p>Based in Pokhara, Nepal</p>
      <p>
        Currently in eight semester pursuing my studies in Bachelor's of Science
        in Computer Science and Information Technology (B.Sc.CSIT) at Mount
        Annapurna Campus (T.U. affiliate).
      </p>
      <p>A web developer specializing in backend development.</p>
      <p
        data-aos='zoom-in-up'
        data-aos-duration='500'
        className='
                py-4 py-sm-3
                d-flex
                justify-content-center justify-content-lg-start
              '
      >
        <a
          href='https://drive.google.com/file/d/136ZfYjWclzKhHT8ROkBND0MEQI5FApmP/view?usp=sharing'
          className={`btn hvr-shrink ${styles.resumeBtn}`}
          target='_blank'
          rel='noreferrer'
        >
          View Resume
        </a>
      </p>
    </Col>
  );
};

export default function AboutMe() {
  const [typing, setTyping] = React.useState(true);
  const infiniteTyping = () => {
    setTyping(false);
    setTyping(true);
  };
  return (
    <section className={styles.aboutMe} id='aboutMe'>
      <Container>
        <h1 className='text-center'>About Me</h1>
        <h3 className={`text-center`}>
          {typing ? (
            <Typist
              startDelay={600}
              className={styles.textCarousel}
              cursor={{ blink: true }}
              onTypingDone={infiniteTyping}
            >
              <span>A Developer.</span>
              <Typist.Backspace startDelay={0} count={30} delay={1000} />
              <span>CSIT Student.</span>
              <Typist.Backspace startDelay={0} count={30} delay={1000} />
              <span>Tech Enthusiast.</span>
              <Typist.Backspace startDelay={0} count={30} delay={1000} />
              <span>An avid gamer.</span>
              <Typist.Backspace startDelay={0} count={30} delay={1000} />
            </Typist>
          ) : (
            " "
          )}
        </h3>
        <Row>
          <TechnicalSkills />
          <AboutMeContent />
        </Row>
      </Container>
    </section>
  );
}
