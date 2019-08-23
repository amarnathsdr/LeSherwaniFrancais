import React from "react";
import styled from "styled-components";

import img from "../assets/images/fb.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  background: linear-gradient(
    to right,
    #003b6b 33%,
    white 33%,
    white 66%,
    #c00101 66%
  );
  @media (max-width: 1080px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 980px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 478px) {
    width: 100%;
    height: 100%;
  }
`;
const BlocIcon = styled.img`
  width: 98%;
  height: 98%;
  padding: 45px;
  background-color: ${props => (props.color === "blanc" ? "#F7F4EC" : "white")};
  @media (max-width: 980px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 650px) {
    padding: 20px;
  }
  @media (max-width: 478px) {
    padding: 70px;
    width: 99%;
  }
`;

class Bloc extends React.Component {
  render() {
    const { image, theme } = this.props;
    return (
      <Wrapper>
        <BlocIcon src={require("../assets/images/" + image)} color={theme} />
      </Wrapper>
    );
  }
}

export default Bloc;
