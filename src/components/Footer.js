import React from "react";
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer section-dark">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} Powered by <a target="_blank" rel="noopener noreferrer" href="https://minagle.com">minagle</a>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
