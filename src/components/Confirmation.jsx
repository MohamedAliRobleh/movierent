import React from 'react';

const Confirmation = ({ items, onViewLibrary, onBackToHome }) => {
  const total = items.reduce((acc, item) => acc + (item.movie.pricePerDay * item.days), 0);

  return (
    <div className="text-center py-5 animate__animated animate__fadeIn">
      <div className="mb-4">
        <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
          <i className="bi bi-check-circle-fill text-warning" style={{fontSize: '4rem'}}></i>
        </div>
      </div>
      
      <h1 className="fw-bold mb-3">Merci pour votre location !</h1>
      <p className="text-secondary fs-5 mb-5">Vos films sont désormais disponibles dans votre bibliothèque et prêts à être visionnés dès maintenant.</p>

      <div className="card bg-secondary bg-opacity-10 border-0 rounded-4 p-4 mx-auto mb-5" style={{maxWidth: '450px'}}>
        <h5 className="text-start mb-4 opacity-50 small fw-bold text-uppercase">Résumé de la commande</h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span>{items.length} Film{items.length > 1 ? 's' : ''} loué{items.length > 1 ? 's' : ''}</span>
          <span className="fw-bold text-warning fs-4">{total.toFixed(2)}$</span>
        </div>
        <div className="d-flex gap-2 overflow-hidden justify-content-center mt-2">
          {items.map(item => (
            <img key={item.movie.id} src={item.movie.poster} alt={item.movie.title} className="rounded shadow-sm" style={{width: '60px', height: '90px', objectFit: 'cover'}} />
          ))}
        </div>
      </div>

      <div className="d-grid gap-3 col-md-6 mx-auto">
        <button className="btn btn-warning btn-lg fw-bold py-3" onClick={onViewLibrary}>
          <i className="bi bi-play-btn-fill me-2"></i>Voir ma bibliothèque
        </button>
        <button className="btn btn-link text-light text-decoration-none" onClick={onBackToHome}>
          <i className="bi bi-house-door me-2"></i>Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
