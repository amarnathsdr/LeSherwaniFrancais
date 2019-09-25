import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { withTranslation } from "react-i18next";

import "./Accueil.css";

import slide1 from "assets/images/amran.png";
import slide2 from "assets/images/slide2.png";

const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 0px;
  @media (max-width: 479px) {
    margin-top: 30px;
  }
`;

const Reference = styled.p`
  position: absolute;
  margin-top: 7.3%;
  color: #003b6b;
  margin-left: 1%;
  font-size: 1.25vw;
  @media (max-width: 479px) {
    display: none;
  }
`;

const Bar = styled.div`
  position: relative;
  margin-top: -50px;
  height: 90px;
  width: 100%;
  background-color: #f2eddf;
  z-index: -1;
  @media (max-width: 479px) {
    height: 35px;
    margin-top: -20px;
  }
  @media (max-width: 650px) {
    height: 50px;
    margin-top: -30px;
  }
`;

const Left = styled.div`
  position: absolute;
  margin-top: 6%;
  margin-left: 4%;
  color: #003b6b;
  @media (max-width: 479px) {
    display: none;
  }
`;

const Slogan = styled.p`
  font-family: "Bodoni 72 Oldstyle";
  font-weight: bold;
  font-size: 2.5vw;
  width: 20%;
  @media (max-width: 479px) {
    display: none;
  }
`;

const Presentation = styled.p`
  width: 25%;
  font-size: 1.5vw;
  font-family: "Hiragino sans";
  font-weight: 150;
  @media (max-width: 479px) {
    display: none;
  }
`;

const Photo = styled.img`
  width: 60%;
  max-width: 60%;
  height: auto;
  margin-right: 4%;
  position: relative;
  float: right;
  z-index: 2;
  @media (max-width: 479px) {
    float: center;
    width: 90%;
    max-width: 90%;
    margin-right: 5%;
  }
`;

function Accueil(props) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { t } = props;
  return (
    <Wrapper>
      <Left>
        <Slogan> {t("accueil.slogan")} </Slogan>
        <Presentation>{t("accueil.presentation")}</Presentation>
      </Left>
      <Slider {...settings}>
        <div>
          <Photo src={slide1} />
          <Reference>{t("accueil.reference1")}</Reference>
        </div>
        <div>
          <Photo src={slide2} />
          <Reference>{t("accueil.reference2")}</Reference>
        </div>
      </Slider>
      <Bar />
    </Wrapper>
  );
}

export default withTranslation()(Accueil);
