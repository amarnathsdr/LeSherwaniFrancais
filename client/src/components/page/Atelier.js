import React from "react";
import { withTranslation } from "react-i18next";
import Travaux from "../Travaux";

function Atelier(props) {
  const { t } = props;
  return <Travaux src="travaux.png" presentation={t("atelier.content")} />;
}

export default withTranslation()(Atelier);
