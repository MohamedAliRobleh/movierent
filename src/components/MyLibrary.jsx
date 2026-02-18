import React from 'react';

const MyLibrary = ({ rentedMovies, onWatch, onBackToHome }) => {
  const [activeTab, setActiveTab] = React.useState('rented');

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Ma Bibliothèque</h2>
        <button className="btn btn-outline-secondary btn-sm" onClick={onBackToHome}>
          <i className="bi bi-house me-2"></i>Accueil
        </button>
      </div>

      {/* Onglets de navigation */}
      <ul className="nav nav-tabs border-secondary mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link bg-transparent border-0 ${activeTab === 'rented' ? 'text-warning border-bottom border-warning border-3 fw-bold' : 'text-secondary'}`}
            onClick={() => setActiveTab('rented')}
          >
            Loués ({rentedMovies.length})
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link bg-transparent border-0 ${activeTab === 'favorites' ? 'text-warning border-bottom border-warning border-3 fw-bold' : 'text-secondary'}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favoris
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link bg-transparent border-0 ${activeTab === 'history' ? 'text-warning border-bottom border-warning border-3 fw-bold' : 'text-secondary'}`}
            onClick={() => setActiveTab('history')}
          >
            Historique
          </button>
        </li>
      </ul>

      {activeTab === 'rented' && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {rentedMovies.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-secondary lead">Vous n'avez aucun film loué actuellement.</p>
              <button className="btn btn-warning fw-bold" onClick={onBackToHome}>Louer un film</button>
            </div>
          ) : (
            rentedMovies.map(item => (
              <div key={item.movie.id} className="col">
                <div className="card h-100 movie-card border-0">
                  <div className="position-relative">
                    <img 
                      src={item.movie.poster} 
                      className="card-img-top" 
                      alt={item.movie.title} 
                      style={{height: '300px', objectFit: 'cover'}} 
                    />
                    <span className="position-absolute top-0 end-0 m-2 badge bg-warning text-dark shadow">
                      {item.days > 1 ? `${item.days} JOURS RESTANTS` : 'EXPIRE BIENTÔT'}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{item.movie.title}</h5>
                    <button 
                      className="btn btn-warning w-100 fw-bold mt-2" 
                      onClick={() => onWatch(item.movie)}
                    >
                      <i className="bi bi-play-fill me-1"></i>Regarder
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Section Recommandations (Optionnelle) */}
      <div className="mt-5">
        <h4 className="fw-bold mb-4">Inspiré par vos locations</h4>
        <div className="row row-cols-2 row-cols-md-4 g-3 opacity-75 text-center">
           <p className="text-secondary small">D'autres chefs-d'œuvre vous attendent dans le catalogue...</p>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;