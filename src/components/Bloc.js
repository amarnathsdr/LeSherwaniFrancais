import React from "react";
import styled, { css } from "styled-components";

import idee from "../assets/images/idee.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  margin: 10px;
  background: linear-gradient(
    to right,
    #003b6b 33%,
    white 33%,
    white 66%,
    #c00101 66%
  );
`;
const BlocIcon = styled.img`
  width: 99%;
  height: 99%;
  padding: 40px;
  background-color: #f7f4ec;
`;

class Bloc extends React.Component {
  render() {
    return (
      <Wrapper>
        <BlocIcon src={idee} />
      </Wrapper>
    );
  }
}

export default Bloc;
