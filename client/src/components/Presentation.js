import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Descriptif from "./Descriptif";
import Titre from "./Titre";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.color === "blanc" ? "white" : "linear-gradient(#f2eddf, #f7f4ec)"};
  padding: 15px 0px;
  @media (max-width: 478px) {
  }
`;

const Question = styled.p`
  align-self: center;
  font-family: "Bad Script", cursive;
  font-style: italic;
  color: #a35353;
`;

const Descriptifs = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 478px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Step = styled.p`
  color: ${props => (props.color === "blanc" ? "#f2eddf" : "white")};
  position: absolute;
  right: 0px;
  font-size: 20vw;
  font-family: "Amiri";
  @media (max-width: 478px) {
    display: none;
  }
`;

function renderDescriptifs(props) {
  const {
    information: { elements }
  } = props;
  const {
    information: { theme }
  } = props;
  return elements.map(element => {
    return (
      <Descriptif
        key={element.image}
        image={element.image}
        theme={theme}
        texte={element.texte}
      />
    );
  });
}

function renderPresentation(props) {
  const { presentation } = props;
  const {
    presentation: { elements }
  } = props;
  return elements.map(element => {
    return (
      <Descriptif
        key={element.image}
        image={element.image}
        theme={presentation.theme}
        sousTitre={element.sousTitre}
        texte={element.texte}
      />
    );
  });
}

function Presentation(props) {
  const { information, presentation } = props;
  let step, theme, titre;
  if (information) {
    step = information.step;
    theme = information.theme;
  } else {
    theme = presentation.theme;
    titre = presentation.titre;
  }

  return (
    <Wrapper color={theme}>
      {information ? (
        <React.Fragment>
          {information.titre && <Titre texte={information.titre} />}
          <Question> {information.question} </Question>
          <Descriptifs>{renderDescriptifs(props)}</Descriptifs>
          <Step color={theme}>{step}</Step>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Titre texte={titre} />
          <Descriptifs>{renderPresentation(props)}</Descriptifs>
        </React.Fragment>
      )}
    </Wrapper>
  );
}

Presentation.propTypes = {
  information: PropTypes.object.isRequired,
  presentation: PropTypes.object.isRequired
};

export default Presentation;
