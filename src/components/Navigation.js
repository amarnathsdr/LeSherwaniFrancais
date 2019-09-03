import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Popup from "reactjs-popup";

import Modal from "./Modal";
import "./Navigation.css";

import logo from "../assets/images/LSF.png";
import france from "../assets/images/france.png";

class Navigation extends React.Component {
  render() {
    const { links } = this.props;
    const NavLinks = links.map(link =>
      link.modal ? (
        <Modal
          balise={
            <Nav.Link key={link.name} href={link.to}>
              {link.name}
            </Nav.Link>
          }
          title={link.name}
          content={link.content}
        />
      ) : (
        <Nav.Link key={link.name} href={link.to}>
          {link.name}
        </Nav.Link>
      )
    );
    return (
      <Navbar expand="sm" className="navbar navbar-dark">
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

export default Navigation;
