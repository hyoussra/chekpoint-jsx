import React from "react";
import PropTypes from "prop-types";
import "./CardsSection.js";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const CardsSection = () => {
  const cardsData = [
    {
      title: "Dior Prestige",
      description: "Découvrez le pouvoir régénérant de la Rose de Granville avec Dior Prestige.",
      image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dweb80653a/images/beauty/03-SKINCARE/2023/Skincare-map/PrestigeCreme_DuoMHR_1850x2000.jpg",
    },
    {
      title: "Dream Skin",
      description: "Unifiez et illuminez votre peau avec Dior Perfect Skin.",
      image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwc50b5fbc/images/beauty/03-SKINCARE/2023/Skincare-map/DreamSkin_Serum_1850x2000.jpg",
    },
    {
      title: "Blush Dior",
      description: "Rehaussez votre teint avec une touche éclatante de Blush Dior.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_K125qWLSGET8W_hOJ4owoKvsvb4H6yFj1fDmgmYtiTyfm3Im2_WbN8R90fmh0_PFZ4brlOku4ltKQwOrugXwBmoRr2AeNMnYxWxHmZ-j4h9hBbVgJZAkv2Lr_kG2xbu0NlT5t0N9xis/s650/dior-maquillage-printemps-2021.jpg",
    },
  ];

  return (
    <div className="cards-section d-flex flex-wrap justify-content-center gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
  );
};

export default CardsSection;

