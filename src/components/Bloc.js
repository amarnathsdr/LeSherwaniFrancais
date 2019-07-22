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
`;
const BlocIcon = styled.img`
  width: 98%;
  height: 98%;
  padding: 45px;
  background-color: ${props => (props.color === "blanc" ? "#F7F4EC" : "white")};
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
