import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Nav2.css";

import logo from "../assets/images/LSF.png";
import france from "../assets/images/france.png";

class Nav2 extends React.Component {
  render() {
    const { links } = this.props;
    const NavLinks = links.map(link => (
      <Nav.Link key={link.name} href={link.to}>
        {link.name}
      </Nav.Link>
    ));
    return (
      <Navbar collapseOnSelect expand="sm" className="navbar navbar-dark">
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="Le Sherwani francais logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-content">
            {NavLinks}
            <img src={france} alt="language" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav2;
