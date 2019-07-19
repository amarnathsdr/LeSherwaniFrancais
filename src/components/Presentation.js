import React from "react";
import styled from "styled-components";
import Descriptif from "./Descriptif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.color === "blanc" ? "white" : "linear-gradient(#f2eddf, #f7f4ec)"};
  padding: 15px 0px;
`;

const Titre = styled.p`
  align-self: center;
  font-family: "Bodoni 72 Oldstyle";
  font-style: italic;
  color: #a35353;
`;

const Descriptifs = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: center;
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

  render() {
    const { information } = this.props;
    const theme = information.theme;
    return (
      <Wrapper color={theme}>
        <Titre> {information.question} </Titre>
        <Descriptifs>{this.renderDescriptifs()}</Descriptifs>
      </Wrapper>
    );
  }
}

export default Presentation;
