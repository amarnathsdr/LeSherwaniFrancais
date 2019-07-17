import React from "react";
import styled from "styled-components";
import Descriptif from "./Descriptif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#f2eddf, #f7f4ec);
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
  render() {
    return (
      <Wrapper>
        <Titre> «Comment vous contactez ?» </Titre>
        <Descriptifs>
          <Descriptif color="white" />
          <Descriptif color="white" />
          <Descriptif color="white" />
        </Descriptifs>
      </Wrapper>
    );
  }
}

export default Presentation;
