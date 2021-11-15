import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Squash as Hamburger } from "hamburger-react";

import * as styles from "../styles/NavBar.module.scss";

const items = [
  {
    name: "Home",
    path: " ",
  },
  {
    name: "About Me",
    path: "#aboutMe",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query brandImageQuery {
      file(relativePath: { eq: "brand.png" }) {
        id
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            height: 53
            quality: 100
          )
        }
      }
    }
  `);

  const image = data.file.childImageSharp.gatsbyImageData;

  const navItems = items.map(({ name, path }) => {
    console.log(path);
    return (
      <AnchorLink
        to={`/${path}`}
        key={name}
        title={name}
        stripHash
        className={styles.navItem}
      >
        {name}
      </AnchorLink>
    );
  });

  return (
    <Navbar expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand>
          <AnchorLink
            to='/'
            key='brand-logo'
            stripHash
            className={styles.brand}
          >
            <GatsbyImage
              image={image}
              alt={"Brand Logo"}
              className={styles.profilePicture}
            />
          </AnchorLink>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={styles.navBarToggler}
        >
          <Hamburger
            size={40}
            color='#000000'
            label='Show Menu'
            duration={0.3}
            toggled={isOpen}
            toggle={setOpen}
          />
        </Navbar.Toggle>

        <Navbar.Collapse
          id='basic-navbar-nav'
          className={styles.collapsingNavbar}
        >
          <Nav>{navItems}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;