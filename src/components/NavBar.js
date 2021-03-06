import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Squash as Hamburger } from "hamburger-react";

import * as styles from "../styles/NavBar.module.scss";

const items = [
  {
    name: "Home",
    path: "/#home",
  },
  {
    name: "About Me",
    path: "/#aboutMe",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

const NavBar = () => {
  const [navBarDefault, setNavBarDefault] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 991.98);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 991.98) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setNavBarDefault(false);
      } else {
        setNavBarDefault(true);
      }
    });
  }, []);
  const [isOpen, setOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query brandImageQuery {
      file(relativePath: { eq: "brand.png" }) {
        id
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            height: 53
            quality: 100
          )
        }
      }
    }
  `);
  const image = data.file.childImageSharp.gatsbyImageData;

  const navItems = items.map(({ name, path }) => {
    return (
      <AnchorLink
        to={path}
        key={name}
        title={name}
        stripHash
        className={
          isMobile
            ? styles.navItem
            : navBarDefault
            ? styles.navItem
            : styles.hoverEffect
        }
      >
        {name}
      </AnchorLink>
    );
  });
  return (
    <Navbar
      expand='lg'
      fixed='top'
      className={navBarDefault ? "" : styles.scrolledNavbar}
    >
      <Container fluid>
        <Navbar.Brand>
          <AnchorLink
            to='/#home'
            key='brand-logo'
            stripHash
            className={styles.brand}
          >
            <GatsbyImage image={image} alt={"Brand Logo"} />
          </AnchorLink>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={styles.navbarToggler}
        >
          <Hamburger
            size={35}
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
