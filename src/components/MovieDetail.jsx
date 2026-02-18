import React from 'react';

const MovieDetail = ({ movie, onBack, onAdd }) => {
  return (
    <div className="row mt-4 animate__animated animate__fadeIn">
      <div className="col-12 mb-4">
        <button className="btn btn-link text-light p-0 text-decoration-none" onClick={onBack}>
          <i className="bi bi-chevron-left me-1"></i>RETOUR AU CATALOGUE
        </button>
      </div>
      <div className="col-md-5 mb-4">
        <img src={movie.poster} className="img-fluid rounded-4 shadow-lg border border-secondary" alt={movie.title} />
      </div>
      <div className="col-md-7">
        <div className="d-flex gap-2 mb-3">
          {movie.isNewRelease && <span className="badge bg-warning text-dark px-3 py-2">NOUVEAUTÉ</span>}
          <span className="badge bg-secondary px-3 py-2">⭐ {movie.rating}/5</span>
          <span className="badge border border-secondary px-3 py-2">{movie.inStock ? 'EN STOCK' : 'INDISPONIBLE'}</span>
        </div>
        <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>
        <p className="badge bg-secondary bg-opacity-25 fs-6 mb-4">{movie.genre}</p>
        
        <h5 className="text-warning">SYNOPSIS</h5>
        <p className="text-secondary mb-5 fs-5" style={{lineHeight: '1.7'}}>{movie.description}</p>
        
        <div className="card bg-secondary bg-opacity-10 border-0 p-4 rounded-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <span className="text-secondary d-block small">TARIF DE LOCATION</span>
              <span className="fs-1 fw-bold text-warning">{movie.pricePerDay.toFixed(2)}$ <small className="fs-6 text-secondary fw-normal">/ jour</small></span>
            </div>
            <button 
              className="btn btn-warning btn-lg px-5 fw-bold py-3" 
              onClick={() => onAdd(movie)}
              disabled={!movie.inStock}
            >
              LOUER CE FILM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
