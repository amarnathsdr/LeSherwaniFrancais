import React from "react";
import { withTranslation } from "react-i18next";
import Travaux from "../Travaux";

function Produits(props) {
  const { t } = props;
  return <Travaux src="travaux.png" presentation={t("produits.content")} />;
}

export default withTranslation()(Produits);
