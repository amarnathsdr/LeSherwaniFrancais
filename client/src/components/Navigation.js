import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Event } from "../tracking";

import "./Navigation.css";

import logo from "../assets/images/LSF.png";
import france from "../assets/images/france.png";
import angleterre from "../assets/images/angleterre.png";

function Navigation(props) {
  const { links, i18n } = props;
  const isFrench = i18n.language === "fr";
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const NavLinks = links.map(link => (
    <Link
      key={link.name}
      to={link.to}
      style={{ textDecoration: "none" }}
      onClick={() =>
        Event(link.name, "Tried to go to " + link.name, link.name + "_PAGE")
      }
    >
      {link.name}
    </Link>
  ));

  return (
    <Navbar expand="sm" className="navbar navbar-dark">
      <Link to="/">
        <img src={logo} className="logo" alt="Le Sherwani francais logo" />
      </Link>

      <Navbar.Toggle className="toggle" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-content">
          {NavLinks}
          <img
            src={isFrench ? angleterre : france}
            alt="language"
            onClick={() => changeLanguage(isFrench ? "en" : "fr")}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Navigation.propTypes = {
  links: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

export default withTranslation()(Navigation);
