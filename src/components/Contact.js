import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import * as styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id='contact' className={`pt-5 ${styles.contactWrapper}`}>
      <Container>
        <h1 className='text-center'>Contact Me</h1>
        <Row className='mt-3 mt-md-5'>
          <ContactForm />
          <ContactDetails />
        </Row>
      </Container>
    </section>
  );
}
