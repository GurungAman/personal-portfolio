import React from "react";
import { Col } from "react-bootstrap";
import * as styles from "../styles/Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactDetails() {
  return (
    <Col
      md={{ offset: "1", span: "5" }}
      className={styles.contactDetails}
      data-aos='fade-up-left'
      data-aos-duration='700'
    >
      <h2 className='text-center mb-3'>Find Me Here.</h2>
      <div className='p-3 mb-3'>
        <div className='mb-0 font-weight-bold'>
          Address <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className='mb-4'>
          Nayagaon, Pokhara-15 <br /> Kaski, Nepal
        </div>
        <div className='mb-0 font-weight-bold'>
          Phone <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className='mb-4'>
          <a href='tel:+9779815131789' className={styles.contact}>
            {" "}
            +977-9815131789{" "}
          </a>
        </div>
        <div className='mb-0 font-weight-bold'>
          Email Address <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className='mb-4'>
          <a href='mailto:amenag30@gmail.com' className={styles.contact}>
            {" "}
            amenag30@gmail.com{" "}
          </a>
        </div>

        <h2 className='text-center mt-4'>My Socials</h2>

        <div className={`row text-center ${styles.socialsWrapper}`}>
          <a
            href='https://www.linkedin.com/in/aman-gurung-6bb671202/'
            className={`col-6  mt-2 ${styles.socials}`}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} size='3x' />
          </a>

          <a
            href='https://github.com/GurungAman'
            className={`col-6 mt-2 ${styles.socials}`}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} size='3x' />
          </a>
        </div>

        <div className={`row text-center ${styles.socialsWrapper}`}>
          <a
            href='https://www.instagram.com/_gurunq_aman/'
            className={`col-6 mt-3 ${styles.socials}`}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size='3x' />
          </a>

          <a
            href='https://www.facebook.com/grg.aman.07/'
            className={`col-6 mt-3 ${styles.socials}`}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faFacebookF} size='3x' />
          </a>
        </div>
      </div>
    </Col>
  );
}
