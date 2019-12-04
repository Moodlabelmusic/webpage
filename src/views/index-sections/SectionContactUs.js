import React from "react";

import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button
} from "reactstrap";

function SectionContactUs() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Contact us</h2>
              <Form className="contact-form">
                <Row>
                  <Col md="6">
                    <label></label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label></label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <label></label>
                <Input
                  placeholder="Tell us your thoughts and feelings..."
                  type="textarea"
                  rows="4"
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="danger" size="lg">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SectionContactUs;