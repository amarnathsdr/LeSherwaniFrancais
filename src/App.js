import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Accueil from "components/Accueil";
import Navigation from "components/Navigation";
import Presentation from "components/Presentation";
import NavigationBottom from "components/NavigationBottom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  renderPresentation() {
    const { t } = this.props;
    return <Presentation presentation={t("presentation")} />;
  }

  renderInformations() {
    const { t } = this.props;
    const informations = t("informations");
    return informations.map(information => {
      return <Presentation information={information} />;
    });
  }

  render() {
    const { t } = this.props;
    const liens = t("navbar");
    return (
      <Wrapper>
        <Navigation links={liens} />
        <Accueil />
        {this.renderPresentation()}
        {this.renderInformations()}
        <NavigationBottom />
      </Wrapper>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(App);
