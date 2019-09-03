import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const modalStyles = {
  backgroundStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 90,
    paddingBottom: 90,
    paddingLeft: 50,
    paddingRight: 50
  }
};

const Title = styled.p`
  font-family: "Bodoni 72 Oldstyle";
  font-weight: bold;
  font-size: 2.5vw;
  color: #003b6b;
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-family: "Hiragino sans";
  font-size: 1.3vw;
  color: #003b6b;
  font-weight: 150;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 2vw;
  }
`;

class Modal extends React.Component {
  render() {
    const { balise, title, content } = this.props;
    return (
      <Popup
        trigger={balise}
        modal
        closeOnDocumentClick
        contentStyle={modalStyles.backgroundStyle}
      >
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Popup>
    );
  }
}

export default Modal;
