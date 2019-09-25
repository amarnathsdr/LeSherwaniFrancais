import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bloc from "./Bloc";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0% 2%;
  @media (max-width: 1080px) {
    width: 180px;
  }
  @media (max-width: 980px) {
    width: 140px;
  }
  @media (max-width: 768px) {
    width: 120px;
  }
  @media (max-width: 650px) {
    width: 100px;
  }
  @media (max-width: 478px) {
    width: 80%;
    align-items: center;
    margin-bottom: 20px;
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
  font-size: 1.2vw;
  color: #003b6b;
  @media (max-width: 1080px) {
    font-size: 1.3vw;
  }
  @media (max-width: 980px) {
    font-size: 1.4vw;
  }
  @media (max-width: 768px) {
    font-size: 1.8vw;
  }
  @media (max-width: 650px) {
    font-size: 2vw;
  }
  @media (max-width: 478px) {
    font-size: 5vw;
  }
`;

function Descriptif(props) {
  const { theme, image, texte, sousTitre } = props;
  return (
    <Wrapper>
      <Bloc image={image} theme={theme} />
      {sousTitre && <Titre>{sousTitre}</Titre>}
      <Description>{texte}</Description>
    </Wrapper>
  );
}

Descriptif.propTypes = {
  theme: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
  sousTitre: PropTypes.string.isRequired
};

export default Descriptif;
