import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Suspense fallback={null}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Suspense>,
  document.getElementById("root")
);
