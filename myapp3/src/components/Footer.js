import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p className="mb-2">&copy; 2025 Dior Boutique. Tous droits réservés.</p>
      <div className="d-flex justify-content-center">
        <a
          href="https://facebook.com"
          className="text-white me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          className="text-white me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

