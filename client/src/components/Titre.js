import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
`;

const Texte = styled.p`
  margin-top: 3px;
  font-family: "Amiri";
  font-weight: bold;
  color: #003b6b;
`;

const Gauche = styled.hr`
  width: 25%;
  background-color: #003b6b;
`;
const Droite = styled.hr`
  width: 25%;
  background-color: #c00101;
`;

function Titre(props) {
  const { texte } = props;
  return (
    <Wrapper>
      <Gauche />
      <Texte>{texte} </Texte>
      <Droite />
    </Wrapper>
  );
}

Titre.propTypes = {
  texte: PropTypes.string.isRequired
};

export default Titre;
