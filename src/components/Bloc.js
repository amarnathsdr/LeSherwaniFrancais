import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  background-color: ${props => props.color || "#f7f4ec"};
`;

class Bloc extends React.Component {
  render() {
    const { icone, color } = this.props;
    return (
      <Wrapper>
        <BlocIcon src={icone} color={color} />
      </Wrapper>
    );
  }
}

export default Bloc;
