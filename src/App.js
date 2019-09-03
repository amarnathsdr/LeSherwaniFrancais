import React from "react";
import styled from "styled-components";

import Accueil from "./components/Accueil";
import Navigation from "./components/Navigation";
import Presentation from "./components/Presentation";
import NavigationBottom from "./components/NavigationBottom";

import jsonData from "./mainPage.json";

const navigation = {
  links: [
    { name: "Concept", to: "#concept", modal: false },
    {
      name: "Créations",
      to: "#creations",
      modal: true,
      content: "Ici, vous allez bientôt pouvoir voir toutes nos réalisations."
    },
    {
      name: "l'Atelier",
      to: "#atelier",
      modal: true,
      content:
        "L’atelier du Sherwani Français vous permettra de réaliser votre Sherwani virtuel ainsi d’avoir un devis. Vous laisserais donc place à votre imagination !"
    },
    {
      name: "Produits",
      to: "#produits",
      modal: true,
      content:
        "Ici, vous allez bientôt découvrir tous les tissus disponible pour la réalisation de votre produit."
    }
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
        <NavigationBottom />
      </Wrapper>
    );
  }
}

export default App;
