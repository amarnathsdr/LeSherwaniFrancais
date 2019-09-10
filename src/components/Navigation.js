import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Modal from "./Modal";
import "./Navigation.css";

import logo from "../assets/images/LSF.png";
import france from "../assets/images/france.png";
import angleterre from "../assets/images/angleterre.png";

class Navigation extends React.PureComponent {
  render() {
    const { links, i18n } = this.props;

    const isFrench = i18n.language === "fr"
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

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Navbar expand="sm" className="navbar navbar-dark">
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="Le Sherwani francais logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-content">
            {NavLinks}
            {isFrench ? (
              <img
                src={angleterre}
                alt="language"
                onClick={() => changeLanguage("en")}
              />
            ) : (
              <img
                src={france}
                alt="language"
                onClick={() => changeLanguage("fr")}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  links: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

export default withTranslation()(Navigation);
