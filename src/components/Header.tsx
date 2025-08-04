import React from "react";
import { Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import VIcon from "../assets/V.svg";

const Header: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: "#F05023" }} variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="home">
          <img
            src={VIcon}
            alt="V Icon"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          VaquerosInTech
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
