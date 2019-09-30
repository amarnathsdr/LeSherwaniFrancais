import React, { useState } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Mutation } from "@apollo/react-components";

import CREATE_FEEDBACK from "../apollo/mutations";
import Modal from "./Modal";

const Wrapper = styled.div`
  display: flex;
  background-color: #cb3331;
  justify-content: space-between;
  border-bottom: 40px solid #953433;
  @media (max-width: 650px) {
    border-bottom: 30px solid #953433;
  }
  @media (max-width: 478px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

const Col = styled.div`
  margin: 30px 50px;
  display: flex;
  width: 250%;
  flex-direction: column;
  @media (max-width: 980px) {
    margin: 30px 30px;
  }
  @media (max-width: 650px) {
    margin: 20px 10px;
  }
  @media (max-width: 478px) {
    width: 95%;
    align-items: center;
  }
`;

const Title = styled.p`
  color: white;
  font-family: "Couture";
  font-size: medium;
  margin-bottom: 10%;
  @media (max-width: 980px) {
    font-size: small;
  }
  @media (max-width: 650px) {
    font-size: x-small;
  }
  @media (max-width: 478px) {
    font-size: large;
  }
`;

const Liens = styled.p`
  color: white;
  margin-bottom: 0px;
  font-size: 1.2vw;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 980px) {
    font-size: 1.5vw;
  }
  @media (max-width: 650px) {
    font-size: 2vw;
  }
  @media (max-width: 478px) {
    font-size: medium;
  }
`;

const Retours = styled.textarea`
  padding: 1%;
  height: 80%;
  width: 100%;
  font-size: 1.1vw;
  margin-bottom: 3%;
  border: none;
  color: black;
  border-radius: 3px;
  @media (max-width: 980px) {
    font-size: 1.5vw;
  }
  @media (max-width: 650px) {
    font-size: 2vw;
  }
  @media (max-width: 478px) {
    width: 80%;
    font-size: medium;
  }
`;

const Button = styled.button`
  background-color: white;
  align-self: flex-end;
  border: none;
  border-radius: 3px;
  font-size: 1.1vw;
  width: 30%;
  @media (max-width: 650px) {
    font-size: 1.5vw;
  }
  @media (max-width: 478px) {
    width: 80%;
    align-self: center;
    font-size: medium;
  }
`;

function NavigationBottom(props) {
  const [content, setContent] = useState("");
  const { t } = props;
  return (
    <Wrapper>
      <Col>
        <Title> {t("bottomNav.contact")} </Title>
        <Liens> 07 61 38 22 77 </Liens>
        <Liens> lesherwanifrancais@hotmail.fr </Liens>
      </Col>
      <Col>
        <Title> {t("bottomNav.service")} </Title>
        <Modal
          balise={<Liens> {t("bottomNav.livraison")} </Liens>}
          title={t("bottomNav.livraison")}
          content="Nous livrons en main propre sur Paris. Nous pouvons l'envoyer directement chez vous ou bien par service Relay."
        />
        <Modal
          balise={<Liens> {t("bottomNav.mentionslegales")} </Liens>}
          title={t("bottomNav.mentionslegales")}
          content="Amarnath Sundaram, 86 rue richard wagner, Le blanc mesnil. 0761382277. lesherwanifrancais@hotmail.fr"
        />
      </Col>
      <Col>
        <Retours
          onChange={e => setContent(e.target.value)}
          value={content}
          placeholder={t("bottomNav.retour")}
        />
        <Mutation mutation={CREATE_FEEDBACK} variables={{ content }}>
          {createFeedback => (
            <Button
              onClick={() =>
                createFeedback().then(() => {
                  setContent("");
                })
              }
            >
              {t("bottomNav.envoyer")}
            </Button>
          )}
        </Mutation>
      </Col>
    </Wrapper>
  );
}

export default withTranslation()(NavigationBottom);
