import React, { useEffect, useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Row } from "react-bootstrap";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import * as styles from "../styles/Footer.module.scss";

export default function Footer() {
  const [hideBtn, setHideBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHideBtn(false);
      } else {
        setHideBtn(true);
      }
    });
  }, []);
  return (
    <section className={styles.footer}>
      <Row className='text-center'>
        <div>
          <FontAwesomeIcon icon={faCopyright} size='lg' />
          Developed by{" "}
          <AnchorLink to=' ' stripHash className={styles.copyright}>
            {" "}
            Aman Gurung
          </AnchorLink>
        </div>
        <div>
          <span>
            <a
              href='https://www.linkedin.com/in/aman-gurung-6bb671202/'
              className={styles.socials}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} size='lg' />
            </a>
          </span>

          <span>
            <a
              href='https://github.com/GurungAman'
              className={styles.socials}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
          </span>

          <span>
            <a
              href='https://www.instagram.com/_gurunq_aman/'
              className={styles.socials}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </a>
          </span>
          <span>
            <a
              href='https://www.facebook.com/grg.aman.07/'
              className={styles.socials}
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} size='lg' />
            </a>
          </span>
        </div>
      </Row>
      <AnchorLink to='/' className={hideBtn ?  "d-none": "back-to-top"}>
        {" "}
        <FontAwesomeIcon icon={faAngleUp} />
      </AnchorLink>
    </section>
  );
}
