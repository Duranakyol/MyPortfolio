import Container from "react-bootstrap/Container";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo2 from "../../assets/img/Logo2.jpg";
import { FaElementor, FaHome, FaPenFancy, FaPhoneAlt } from "react-icons/fa";
import "../assets/styles/Navbar.css";

function MyNavbar() {
  const [Color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <Navbar>
      <Container fluid className={Color ? "header header-bg" : "header"}>
        <Navbar.Brand href="/">
          <img src={Logo2} alt="Logo" />
          <span>D.Akyol</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="myNavbar me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">
              <FaHome className="icon" />
              Home
            </Nav.Link>
            <Nav.Link href="/products">
              <FaElementor className="icon" />
              Projects
            </Nav.Link>

            <Nav.Link href="/about">
              <FaPenFancy className="icon" />
              About
            </Nav.Link>
            <Nav.Link href="/contact">
              <FaPhoneAlt className="icon" />
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
