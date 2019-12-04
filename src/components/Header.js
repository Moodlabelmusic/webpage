import React from "react";
import { Container } from "reactstrap";

const bannerImages = [
  "assets/img/header1.jpg",
  "assets/img/header2.jpg"
]

function Header() {
  let backgroundImage = require("assets/img/header1.jpg");

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + backgroundImage + ")"
        }}
      >
        <div className="filter" />
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/mood-label-music-blanco.png")}
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;