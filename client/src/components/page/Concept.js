import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Accueil from "../Accueil";
import Presentation from "../Presentation";

function renderPresentation(props) {
  const { t } = props;
  return <Presentation presentation={t("presentation")} />;
}

function renderInformations(props) {
  const { t } = props;
  const informations = t("informations");
  return informations.map(information => {
    return <Presentation information={information} />;
  });
}

function Concept(props) {
  return (
    <Fragment>
      <Accueil />
      {renderPresentation(props)}
      {renderInformations(props)}
    </Fragment>
  );
}

Concept.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Concept);
