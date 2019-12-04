import React from 'react';
import {
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionAboutUs() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Who are we?</h2>
                <p>It is a company that provides musical production services like arrangements, recording, edition, mix, mastering, and realization of scores for copyright or different purposes. Also, we provide services that concern the media world like sound design, audio post-production for different video projects and realization for musical production or radio commercials.</p>
                <br />
                <p>One of the most important advantages of our company is the possibility to cover all possible requirements in the musical production projects.</p>
                <br />
                <p>We are focused on the independent music industry, where the artist is normally in charge of all this music production task.</p>
                <br />
                <p>Mood Label Music provide customers the music production bundles, that solve the independent artist issues, also we know that money is a hard problem when they are starting their career as an artist, our bundle product let them find the best option for their pocket since they can set up the bundle depending on their needs.</p>
                <br />
                <p>On the other hand,  our payments methods fit customer needs. To us, it is very important that our clients understand the value of our work, we create a detailed explanation of the time and effort we will spend on the project and charge accordingly. Also, we know that the artist wants the best product with the best quality to compete in the industry and many times these results are expensive. For that reason, we provide an incredible payment method, where they can pay with their credit card. Most of the recording studios and musical producer demand a partial or full cash payment before or after they start working on a project.</p>
                <br />
                <p>On the other hand, with our credit card payment method, we allow the artist to find the best option for their pocket, so that we have the money to start with the realization of their project and they can be both tranquil and thrilled during the production.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;