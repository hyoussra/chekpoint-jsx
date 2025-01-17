import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="bg-light text-center py-5" 
      style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/10/34/94/19/360_F_1034941992_4exjV5dWKID1UrhKNt0uKVV7n8SBR6Y0.jpg)', backgroundSize: 'cover', backgroundPosition: "center" }}
    >
      <h1 className="display-4 text-white">Bienvenue sur notre site</h1>
      <p className="lead text-white">Découvrez des solutions innovantes pour votre beauté et bien-être.</p>
      <a href="#products" className="btn btn-primary btn-lg mt-3" aria-label="En savoir plus sur nos produits">
        En savoir plus
      </a>
    </div>
  );
};

export default HeroSection;

