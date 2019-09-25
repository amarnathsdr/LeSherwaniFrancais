import React from "react";
import { withTranslation } from "react-i18next";
import Travaux from "../Travaux";

function Creations(props) {
  const { t } = props;
  return <Travaux src="travaux.png" presentation={t("creations.content")} />;
}

export default withTranslation()(Creations);
