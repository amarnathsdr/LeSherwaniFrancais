import React from "react";
import styled, { css } from "styled-components";

import logo from "../assets/images/LSF.png";
import france from "../assets/images/france.png";
import angleterre from "../assets/images/angleterre.png";

const Image = styled.img`
  height: ${props => (props.small ? "50%" : "80%")};
  display: block;
  magin: 0 auto;
  &:hover {
    opacity: ${props => props.small && "0.5"};
  }
`;

const Wrapper = styled.nav`
  background: #003b6b;
  position: fixed;
  left: 0;
  z-index: 3;
  height: 10%;
  width: 100%;
  font-family: "Bodoni 72 Oldstyle";
  font-weight: bold;
`;

const LinkContainer = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: space-around;
`;

const Link = styled.li`
  align-content: flex-end;
  list-style-type: none;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    padding: 0 0 1px 0;
    border-bottom: 4px solid #cf021b;
  }
`;

class Nav1 extends React.Component {
  render() {
    const { links } = this.props;
    const NavLink = links.map(link => (
      <Link key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Link>
    ));

    return (
      <Wrapper>
        <LinkContainer>
          <Image src={logo} />
          {NavLink}
          <Image small src={france} />
        </LinkContainer>
      </Wrapper>
    );
  }
}

export default Nav1;
