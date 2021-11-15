import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Row, span } from "react-bootstrap";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import * as styles from "../styles/Footer.module.scss";

export default function Footer() {
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
            >
              <FontAwesomeIcon icon={faLinkedin} size='lg' />
            </a>
          </span>

          <span>
            <a
              href='https://github.com/GurungAman'
              className={styles.socials}
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
          </span>

          <span>
            <a
              href='https://www.instagram.com/_gurunq_aman/'
              className={styles.socials}
              target='_blank'
            >
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </a>
          </span>
          <span>
            <a
              href='https://www.facebook.com/grg.aman.07/'
              className={styles.socials}
              target='_blank'
            >
              <FontAwesomeIcon icon={faFacebook} size='lg' />
            </a>
          </span>
        </div>
      </Row>
    </section>
  );
}
