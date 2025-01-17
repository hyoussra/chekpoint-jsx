import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./CarouselSection.js"; 

const CarouselSection = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dweb80653a/images/beauty/03-SKINCARE/2023/Skincare-map/PrestigeCreme_DuoMHR_1850x2000.jpg"
            className="d-block w-100 carousel-image"
            alt="Dior Prestige"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwc50b5fbc/images/beauty/03-SKINCARE/2023/Skincare-map/DreamSkin_Serum_1850x2000.jpg"
            className="d-block w-100 carousel-image"
            alt="Dream Skin"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_K125qWLSGET8W_hOJ4owoKvsvb4H6yFj1fDmgmYtiTyfm3Im2_WbN8R90fmh0_PFZ4brlOku4ltKQwOrugXwBmoRr2AeNMnYxWxHmZ-j4h9hBbVgJZAkv2Lr_kG2xbu0NlT5t0N9xis/s650/dior-maquillage-printemps-2021.jpg"
            className="d-block w-100 carousel-image"
            alt="Blush Dior"
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSection;


