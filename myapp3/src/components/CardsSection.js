import React from "react";
import "./CardsSection.js"; 

const CardsSection = () => {
  return (
    <div className="cards-section">
      <div className="card">
        <img
          src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dweb80653a/images/beauty/03-SKINCARE/2023/Skincare-map/PrestigeCreme_DuoMHR_1850x2000.jpg"
          alt="Dior Prestige"
        />
        <h3>Dior Prestige</h3>
        <p>Découvrez le pouvoir régénérant de la Rose de Granville avec Dior Prestige.</p>
      </div>
      <div className="card">
        <img
          src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwc50b5fbc/images/beauty/03-SKINCARE/2023/Skincare-map/DreamSkin_Serum_1850x2000.jpg"
          alt="Dream Skin"
        />
        <h3>Dream Skin</h3>
        <p>Unifiez et illuminez votre peau avec Dior Perfect Skin.</p>
      </div>
      <div className="card">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_K125qWLSGET8W_hOJ4owoKvsvb4H6yFj1fDmgmYtiTyfm3Im2_WbN8R90fmh0_PFZ4brlOku4ltKQwOrugXwBmoRr2AeNMnYxWxHmZ-j4h9hBbVgJZAkv2Lr_kG2xbu0NlT5t0N9xis/s650/dior-maquillage-printemps-2021.jpg"
          alt="Blush Dior"
        />
        <h3>Blush Dior</h3>
        <p>Rehaussez votre teint avec une touche éclatante de Blush Dior.</p>
      </div>
    </div>
  );
};

export default CardsSection;
