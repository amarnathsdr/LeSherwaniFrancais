import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Accueil from "../Accueil";
import Presentation from "../Presentation";

class Concept extends React.Component {
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
    return (
      <Fragment>
        <Accueil />
        {this.renderPresentation()}
        {this.renderInformations()}
      </Fragment>
    );
  }
}

Concept.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Concept);
