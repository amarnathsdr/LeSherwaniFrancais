import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { PageView, initGA } from "./tracking";

import Navigation from "./components/Navigation";
import NavigationBottom from "./components/NavigationBottom";
import Concept from "./components/page/Concept";
import Creations from "./components/page/Creations";
import Atelier from "./components/page/Atelier";
import Produits from "./components/page/Produits";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const link = new HttpLink({
  uri: "/graphql"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  introspection: true
});

class App extends React.Component {
  componentDidMount() {
    initGA("UA-148407286-1");
    PageView();
  }
  render() {
    const { t } = this.props;
    const liens = t("navbar");
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(App);
