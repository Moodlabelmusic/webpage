import React from "react";
import NavbarComponent from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

// index sections
import SectionContactUs from "./index-sections/SectionContactUs";
import SectionAboutUs from "./index-sections/SectionAboutUs";

function Index() {
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
        <SectionAboutUs />
        <SectionContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Index;
