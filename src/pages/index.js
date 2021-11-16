import * as React from "react";
import { Helmet } from "react-helmet";

import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/main.scss";
import "../styles/hvr-effects.scss";

import NavBar from "../components/NavBar";
import HeaderPanel from "../components/HeaderPanel";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Aman Gurung</title>
        <link rel='canonical' href='https://amangurung.com' />
      </Helmet>
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
