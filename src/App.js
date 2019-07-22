import React from "react";
import styled from "styled-components";

import Accueil from "./components/Accueil";
import Navigation from "./components/Navigation";
import Presentation from "./components/Presentation";

import jsonData from "./mainPage.json";

const navigation = {
  links: [
    { name: "Concept", to: "#concept" },
    { name: "Créations", to: "#creations" },
    { name: "l'Atelier", to: "#atelier" },
    { name: "Produits", to: "#produits" }
  ]
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      informations: jsonData.informations,
      presentation: jsonData.presentation
    };
  }

  renderPresentation() {
    const { presentation } = this.state;
    return <Presentation presentation={presentation} />;
  }

  renderInformations() {
    const { informations } = this.state;
    return informations.map(information => {
      return (
        <Presentation information={information} key={information.question} />
      );
    });
  }

  render() {
    const { links } = navigation;
    return (
      <Wrapper>
        <Navigation links={links} />
        <Accueil />
        {this.renderPresentation()}
        {this.renderInformations()}
      </Wrapper>
    );
  }
}

export default App;
