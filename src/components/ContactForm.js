import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as styles from "../styles/Contact.module.scss";

export default function ContactForm() {
  return (
    <Col
      md={6}
      className={styles.contactForm}
      data-aos='fade-up-right'
      data-aos-duration='700'
    >
      <Form
        name='contact-form mb-md-0'
        method='POST'
        data-netlify-recaptcha='true'
        data-netlify='true'
      >
        <input type='hidden' name='contact-form' value='contact' />

        <h2 className='text-center mb-4'>Get in touch</h2>
        <Form.Group as={Row} className='mb-3'>
          <Col md={12} lg={6} className='mb-3 mb-md-0'>
            <Form.Label htmlFor='firstName'>First Name</Form.Label>
            <Form.Control type='text' id='firstName' placeholder='First Name' />
          </Col>
          <Col md={12} lg={6}>
            <Form.Label htmlFor='lastName'>Last Name</Form.Label>
            <Form.Control type='text' id='lastName' placeholder='Last Name' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col md={12}>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control type='email' id='email' placeholder='Email' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col md={12}>
            <Form.Label htmlFor='subject'>Subject</Form.Label>
            <Form.Control type='text' id='subject' placeholder='Subject' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
          <Col md={12}>
            <Form.Label htmlFor='message'>Message</Form.Label>
            <Form.Control
              as='textarea'
              id='message'
              placeholder='Write your message here...'
              rows='7'
              style={{ resize: "none" }}
            />
          </Col>
        </Form.Group>
        <div
          data-
          className='mb-3'
          netlify-recaptcha='true'
          style={{
            transform: "scale(0.77)",
            webkitTransform: "scale(0.77)",
            transformOrigin: "0 0",
            webkitTransformOrigin: "0 0",
          }}
        />
        <Form.Group as={Row} className='mt-3 mb-3'>
          <Col md={12}>
            <Button className={styles.sendMessage}> Send Message</Button>{" "}
          </Col>
        </Form.Group>
      </Form>{" "}
    </Col>
  );
}
