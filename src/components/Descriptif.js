import React from "react";
import styled from "styled-components";
import Bloc from "./Bloc";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 0% 2%;
  @media (max-width: 479px) {
    width: 50%;
    margin-bottom: 30px;
  }
`;

const Titre = styled.p`
  align-self: flex-start;
  font-family: "Couture";
  color: #003b6b;
  font-size: small;
`;

const Description = styled.p`
  align-self: center;
  font-family: "Hiragino Sans";
  font-weight: 200;
  line-height: 13pt;
  color: #003b6b;
`;

class Descriptif extends React.Component {
  render() {
    const { theme, image, texte, sousTitre } = this.props;
    return (
      <Wrapper>
        <Bloc image={image} theme={theme} />
        {sousTitre && <Titre>{sousTitre}</Titre>}
        <Description>{texte}</Description>
      </Wrapper>
    );
  }
}

export default Descriptif;
