import * as React from "react";
import "../styles/main.scss";
import "../styles/hvr-effects.scss";

import NavBar from "../components/NavBar";
import HeaderPanel from "../components/HeaderPanel";
import AboutMe from "../components/AboutMe";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <HeaderPanel />
      <AboutMe />
    </>
  );
};

export default IndexPage;
