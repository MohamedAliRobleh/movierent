import React from 'react';

const MovieList = ({ movies, filters, setFilters, sortBy, setSortBy, onDetail, onAdd }) => {
  
  const genres = ['Tous', ...new Set(movies.map(m => m.genre))];

  return (
    <div className="animate__animated animate__fadeIn">
      {/* SECTION FILTRES ET TRI */}
      <div className="bg-secondary bg-opacity-10 p-3 rounded-3 mb-4 border border-secondary border-opacity-25">
        <div className="row g-3 align-items-center">
          <div className="col-12 d-flex flex-wrap gap-2">
            {genres.map(g => (
              <button 
                key={g} 
                className={`btn btn-sm ${filters.genre === g ? 'btn-warning' : 'btn-outline-light'}`}
                onClick={() => setFilters({...filters, genre: g})}
                style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="col-md-8 d-flex flex-wrap gap-3 align-items-center">
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="stockSwitch"
                checked={filters.onlyAvailable}
                onChange={(e) => setFilters({...filters, onlyAvailable: e.target.checked})}
              />
              <label className="form-check-label small text-white" htmlFor="stockSwitch">Disponibles</label>
            </div>
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="newSwitch"
                checked={filters.onlyNew}
                onChange={(e) => setFilters({...filters, onlyNew: e.target.checked})}
              />
              <label className="form-check-label small text-white" htmlFor="newSwitch">Nouveautés</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="small text-secondary">Prix Max:</span>
              <input 
                type="range" 
                className="form-range" 
                min="0" max="20" step="0.5"
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: parseFloat(e.target.value)})}
                style={{width: '100px'}}
              />
              <span className="badge bg-secondary">{filters.maxPrice}$</span>
            </div>
          </div>
          <div className="col-md-4">
            <select className="form-select bg-dark border-secondary text-light" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="rating">Mieux notés</option>
              <option value="price_asc">Prix croissant</option>
              <option value="price_desc">Prix décroissant</option>
              <option value="title">Titre A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* GRILLE DE FILMS */}
      {movies.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-emoji-frown fs-1 text-secondary"></i>
          <h3 className="mt-3 text-warning">Aucun film trouvé</h3>
          <p className="text-secondary">Essayez de modifier vos filtres ou votre recherche.</p>
          <button className="btn btn-outline-warning btn-sm mt-2" onClick={() => setFilters({ genre: 'Tous', onlyAvailable: false, onlyNew: false, maxPrice: 20 })}>
            Réinitialiser
          </button>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map(movie => (
            <div key={movie.id} className="col">
              <div className="card h-100 movie-card shadow">
                <div className="position-relative">
                  <img 
                    src={movie.poster} 
                    className={`card-img-top ${!movie.inStock ? 'grayscale' : ''}`} 
                    alt={movie.title} 
                    style={{height: '350px', objectFit: 'cover'}} 
                  />
                  {movie.isNewRelease && <span className="position-absolute top-0 start-0 m-2 badge bg-warning">NOUVEAU</span>}
                  <div className="position-absolute top-0 end-0 m-2 badge bg-dark bg-opacity-75">⭐ {movie.rating}/5</div>
                  {!movie.inStock && <div className="position-absolute top-50 start-50 translate-middle bg-danger bg-opacity-75 w-100 text-center py-1 fw-bold">ÉPUISÉ</div>}
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate text-white" style={{ color: 'white' }}>{movie.title}</h5>
                  <p className="text-secondary small mb-3">{movie.genre}</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold text-warning fs-5">{movie.pricePerDay.toFixed(2)}$<small className="text-secondary fw-normal ms-1" style={{fontSize: '0.6em'}}>/jour</small></span>
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-light btn-sm" style={{ color: 'white' }} onClick={() => onDetail(movie)}>Détails</button>
                      <button className="btn btn-warning btn-sm fw-bold" onClick={() => onAdd(movie)} disabled={!movie.inStock}>
                        {movie.inStock ? 'AJOUTER' : 'INDISPONIBLE'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
