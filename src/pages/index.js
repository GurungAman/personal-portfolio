import * as React from "react";
import "../styles/main.scss";
import "../styles/hvr-effects.scss";

import NavBar from "../components/NavBar";
import HeaderPanel from "../components/HeaderPanel";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <HeaderPanel />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;
