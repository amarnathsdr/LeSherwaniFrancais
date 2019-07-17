import React from "react";

import styled from "styled-components";

import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Bloc from "./components/Bloc";
import Presentation from "./components/Presentation";

const navigation = {
  links: [
    { name: "Concept", to: "#concept" },
    { name: "Créations", to: "#creations" },
    { name: "l'Atelier", to: "#atelier" },
    { name: "Produits", to: "#produits" }
  ]
};

const data = {
  Presentation: [
    {
      image: "",
      sousTitre: "Votre imagination",
      texte:
        "Votre imagination n’a aucune limite. Des modèles du passé, du présent ou bien du futur, nous réaliserons vos idées les plus folles !"
    },
    {
      image: "",
      sousTitre: "du sur-mesure",
      texte:
        "Oui et du vrai ! Le vêtement est réalisé uniquement après avoir pris vos mesures. Il vous est destiné !"
    },
    {
      image: "",
      sousTitre: "un prix raisonnable",
      texte:
        "Avec des produits de qualités, nous restons sur le prix du marché, et surtout des prix justifiés !"
    },
    {
      image: "",
      sousTitre: "les commandes 24h",
      texte:
        "La couture étant réalisée à Paris, il vous est possible de commander en 24h."
    }
  ],
  Question: [
    {
      titre: "« Comment vous contacter ? »",
      element: [
        {
          image: "",
          texte:
            "Contactez-nous sur Instagram pour avoir plus de détails sur un article. Vous pouvez ainsi consulter tous les derniers modèles. @lesherwanifrancais"
        },
        {
          image: "",
          texte:
            "Dans l’urgence, vous pouvez directement nous contacter par téléphone ou sur whatsapp au : 07.61.38.22.77."
        },
        {
          image: "",
          texte:
            "Facebook est aussi un bon moyen de nous contacter. Nous sommes très réactifs à tous vos messages. @lesherwanifrancais"
        }
      ]
    },
    {
      titre: "« Que pouvez vous réaliser comme modèle ? »",
      element: [
        {
          image: "",
          texte:
            "Le waiscoat. Sans manches, il est incontournable pour un anniversaire ou un évènement chill."
        },
        {
          image: "",
          texte:
            "Le JodhpuriCoat.Traditionnellement avec des manches longues. Le choix du tissu vous permettra de le porter aussi bien dans un mariage, que dans une récéption."
        },
        {
          image: "",
          texte:
            "Les espadrilles.Vous voulez ajouter une touche originale à votre ensemble ? Optez pour les espadrilles avec le même tissu que votre ensemble."
        }
      ]
    },
    {
      titre: "« C’est vraiment du sur-mesure ? » ",
      element: [
        {
          image: "",
          texte:
            "Eh oui ! Nous effectuons  une rencontre sur Paris ou en banlieue et nous prenons vos mesures pour du vrai sur-mesure."
        },
        {
          image: "",
          texte:
            "Vous n’êtes pas sur Paris ? Vous pouvez aussi remplir un formulaire sur notre site."
        },
        {
          image: "",
          texte:
            "Vous souhaitez faire une surprise à votre conjoint ? Vous pouvez nous remettre un de ses vêtement pour nous prélevions ses mesures."
        }
      ]
    },
    {
      titre: "« Et pour le tissu, comment ça se passe  ? »",
      element: [
        {
          image: "",
          texte:
            "Nous vous proposons des tissus disponible dans notre Atelier. Nous possédons des tissus aussi traditionnelle que moderne."
        },
        {
          image: "",
          texte:
            "Nous pouvons chercher ensemble le matériel que vous desirez sur Paris."
        },
        {
          image: "",
          texte:
            "Enfin, vous pouvez nous fournir votre tissu. Nous réalisons même des sherwanis à partir de saree car nous disons OUI au recyclage ! "
        }
      ]
    }
  ]
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const { links } = navigation;
  return (
    <Wrapper>
      <Nav2 links={links} />
      <Presentation />
      <Presentation />
      <Presentation />
      <Presentation />
    </Wrapper>
  );
}

export default App;
