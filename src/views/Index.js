import React from "react";
import SC from "soundcloud";

import NavbarComponent from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

// index sections
import SectionContactUs from "./index-sections/SectionContactUs";
import SectionAboutUs from "./index-sections/SectionAboutUs";
import SectionCatalog from "./index-sections/SectionCatalog";

function Index() {
  const clientId = "Vu5tlmvC9eCLFZkxXG32N1yQMfDSAPAA";
  SC.initialize({
    client_id: clientId,
    redirect_uri: ""
  });

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <NavbarComponent />
      <Header />
      <div className="main">
        <SectionCatalog />
        <SectionAboutUs />
        <SectionContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Index;
