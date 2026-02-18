import React from 'react';

const Footer = ({ setView }) => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 border-top border-secondary mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <h3 className="text-warning fw-bold mb-3">MovieRent</h3>
            <p className="text-secondary">Votre destination premium pour la location de films en haute qualité. Profitez d'une expérience cinématographique sans couture depuis le confort de votre maison.</p>
            <div className="d-flex gap-3 fs-4">
              <i className="bi bi-facebook cursor-pointer"></i>
              <i className="bi bi-twitter-x cursor-pointer"></i>
              <i className="bi bi-instagram cursor-pointer"></i>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Explorer</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2"><a href="#" onClick={() => setView('home')} className="text-decoration-none text-secondary">Accueil</a></li>
              <li className="mb-2">Catalogue</li>
              <li className="mb-2">Nouveautés</li>
              <li className="mb-2">Offres spéciales</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Support</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Aide & FAQ</li>
              <li className="mb-2">Conditions d'utilisation</li>
              <li className="mb-2">Confidentialité</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Restez informé</h5>
            <p className="text-secondary">Recevez les dernières sorties et offres exclusives.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control bg-secondary border-0 text-light" placeholder="Votre email" />
              <button className="btn btn-warning fw-bold">S'abonner</button>
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="text-center text-secondary small">
          <p>© 2024 MovieRent Entertainment Inc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;