import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "components/Navigation";
import NavigationBottom from "components/NavigationBottom";
import Concept from "components/page/Concept";
import Creations from "components/page/Creations";
import Atelier from "components/page/Atelier";
import Produits from "components/page/Produits";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    const { t } = this.props;
    const liens = t("navbar");
    return (
      <BrowserRouter>
        <Wrapper>
          <Route path="/" render={() => <Navigation links={liens} />} />
          <Route exact path="/" component={Concept} />
          <Route path="/creations" component={Creations} />
          <Route path="/atelier" component={Atelier} />
          <Route path="/produits" component={Produits} />
          <Route path="/" component={NavigationBottom} />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(App);
