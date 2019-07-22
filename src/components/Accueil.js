import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Slogan = styled.p``;

const Definition = styled.p``;

class Accueil extends React.Component {
  render() {
    return (
      <Wrapper>
        <Slogan>
          Oubliez les chemises... ...Et Adoptez Le Sherwani français
        </Slogan>
        <Definition>
          Le Sherwani Francais est tout simplement un mélande inedit entre deux
          cultures. Notre but ? Allier tradition et modernité pour vous proposer
          du sur-mesure.
        </Definition>
      </Wrapper>
    );
  }
}

export default Accueil;
