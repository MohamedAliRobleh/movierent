import React from 'react';

const Navbar = ({ setView, cartCount, search, setSearch }) => {
  const handleCartClick = (e) => {
    e.preventDefault();
    console.log("Navigation vers le panier..."); // Pour débugger dans la console
    setView('cart');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top py-2">
      <div className="container">
        <a className="navbar-brand fw-bold text-warning fs-3" href="#" onClick={(e) => { e.preventDefault(); setView('home'); }}>
          MovieRent
        </a>
        
        <div className="d-flex align-items-center flex-grow-1 mx-lg-5 px-2">
          <div className="input-group">
            <span className="input-group-text bg-secondary border-0 text-light">
              <i className="bi bi-search"></i>
            </span>
            <input 
              type="text" 
              className="form-control bg-secondary border-0 text-light" 
              placeholder="Rechercher..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <button 
            className="btn btn-outline-light position-relative me-3 border-0" 
            onClick={handleCartClick}
            type="button"
          >
            <i className="bi bi-cart3 fs-4" style={{ color: '#f16212' }}></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                {cartCount}
              </span>
            )}
          </button>
          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center" style={{width: '38px', height: '38px', cursor: 'pointer'}}>
            <i className="bi bi-person-fill text-light"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;