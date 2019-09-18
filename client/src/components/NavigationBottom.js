import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import axios from "axios";
import api from "../../api";

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
  flex-direction: column;
  @media (max-width: 980px) {
    margin: 30px 30px;
  }
  @media (max-width: 650px) {
    margin: 20px 10px;
  }
  @media (max-width: 478px) {
    align-items: center;
  }
`;

const Title = styled.p`
  color: white;
  font-family: "Couture";
  font-size: medium;
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

const Retours = styled.input`
  width: 100%;
`;

class NavigationBottom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  handleInsertFeedback = () => {
    const { content } = this.state;

    axios({
      url: "http://localhost:4000/graphql",
      method: "post",
      data: {
        query: `
        mutation {
           createFeedback(content: "${content}"){
             content
           }
        }
      `
      }
    }).then(() => {
      this.setState({
        content: ""
      });
    });
  };

  render() {
    const { t } = this.props;
    const { content } = this.state;
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
            content="yo"
          />
          <Modal
            balise={<Liens> {t("bottomNav.mentionslegales")} </Liens>}
            title={t("bottomNav.mentionslegales")}
            content="yo"
          />
        </Col>
        <Col>
          <Retours
            onChange={e => this.setState({ content: e.target.value })}
            value={content}
            placeholder="Vos retours sont précieux !"
          />
          <button onClick={() => this.handleInsertFeedback()}>ADD</button>
        </Col>
      </Wrapper>
    );
  }
}

export default withTranslation()(NavigationBottom);
