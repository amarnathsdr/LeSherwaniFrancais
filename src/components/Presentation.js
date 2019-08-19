import React from "react";
import styled from "styled-components";
import Descriptif from "./Descriptif";
import Titre from "./Titre";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.color === "blanc" ? "white" : "linear-gradient(#f2eddf, #f7f4ec)"};
  padding: 15px 0px;
`;

const Question = styled.p`
  align-self: center;
  font-family: "Bodoni 72 Oldstyle";
  font-style: italic;
  color: #a35353;
`;

const Descriptifs = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

class Presentation extends React.Component {
  renderDescriptifs() {
    const { information } = this.props;
    const elements = information.elements;
    return elements.map(element => {
      return (
        <Descriptif
          key={element.image}
          image={element.image}
          theme={information.theme}
          texte={element.texte}
        />
      );
    });
  }

  renderPresentation() {
    const { presentation } = this.props;
    const elements = presentation.elements;
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

  render() {
    const { information, presentation } = this.props;
    var theme, titre;
    if (information) {
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
            <Descriptifs>{this.renderDescriptifs()}</Descriptifs>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Titre texte={titre} />
            <Descriptifs>{this.renderPresentation()}</Descriptifs>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}

export default Presentation;
