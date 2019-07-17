import React from "react";
import styled, { css } from "styled-components";
import idee from "../assets/images/idee.png";
import Bloc from "./Bloc";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 0% 2%;
`;

const Titre = styled.p`
  align-self: flex-start;
  font-family: "Couture";
  margin-top: 15px;
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
    const { color } = this.props;
    return (
      <Wrapper>
        <Bloc icone={idee} color={color} />
        <Titre>Votre Imagination</Titre>
        <Description>
          Votre imagination n’a aucune limite. Des modèles du passé, du présent
          ou bien du futur, nous réaliserons vos idées les plus folles !{" "}
        </Description>
      </Wrapper>
    );
  }
}

export default Descriptif;
