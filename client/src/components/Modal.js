import React from "react";
import PropTypes from "prop-types";
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
  font-family: "Amiri";
  font-weight: bold;
  font-size: 2.5vw;
  color: #003b6b;
  margin-bottom: 50px;
`;

const Content = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  font-size: 1.3vw;
  color: #003b6b;
  font-weight: 150;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 2vw;
  }
`;

const Close = styled.a`
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 24px;
`;

function Modal(props) {
  const { balise, title, content } = props;
  return (
    <Popup
      trigger={balise}
      modal
      closeOnDocumentClick
      contentStyle={modalStyles.backgroundStyle}
    >
      {close => (
        <React.Fragment>
          <Close onClick={close}>&times;</Close>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </React.Fragment>
      )}
    </Popup>
  );
}

Modal.propTypes = {
  balise: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Modal;
