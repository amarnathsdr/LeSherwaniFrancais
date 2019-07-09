import React from "react";

import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";

const navigation = {
  links: [
    { name: "Concept", to: "#concept" },
    { name: "Créations", to: "#creations" },
    { name: "l'Atelier", to: "#atelier" },
    { name: "Produits", to: "#produits" }
  ]
};

function App() {
  const { links } = navigation;
  return (
    <div className="App">
      <Nav2 links={links} />
    </div>
  );
}

export default App;
