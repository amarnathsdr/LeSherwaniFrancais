import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 70px 60px;
  background-color: #f2eddf;
  margin: 0px 30px;
`;

const Icon = styled.img`
  height: 100px;
  margin-bottom: 50px;
`;

const Presentation = styled.p`
  color: #003b6b;
`;

function Travaux(props) {
  const { src, presentation } = props;
  return (
    <Wrapper>
      <Content>
        <Icon src={require("../assets/images/" + src)} />
        <Presentation>{presentation}</Presentation>
      </Content>
    </Wrapper>
  );
}

export default Travaux;
