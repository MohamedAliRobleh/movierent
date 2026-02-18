import React from 'react';

const Cart = ({ items, updateDays, remove, onBack, onConfirm }) => {
  // Calcul sécurisé du total
  const total = items.reduce((acc, item) => {
    const price = item.movie?.pricePerDay || 0;
    return acc + (price * item.days);
  }, 0);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-link text-light p-0 me-3" onClick={onBack}>
          <i className="bi bi-arrow-left fs-4"></i>
        </button>
        <h2 className="h4 mb-0 fw-bold">Mon Panier</h2>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-5">
          <div className="bg-secondary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '100px', height: '100px'}}>
            <i className="bi bi-cart-x text-secondary" style={{fontSize: '3rem'}}></i>
          </div>
          <h3 className="h5 text-warning">Votre panier est vide</h3>
          <p className="text-secondary mb-4">Il est temps de choisir un chef-d'œuvre !</p>
          <button className="btn btn-warning fw-bold px-4 py-2" onClick={onBack}>
            Retour au catalogue
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items mb-4">
            {items.map(item => (
              <div key={item.movie?.id} className="card bg-secondary bg-opacity-10 border-0 mb-3 rounded-4 overflow-hidden">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.movie?.poster} 
                      alt={item.movie?.title} 
                      className="rounded shadow-sm me-3" 
                      style={{width: '80px', height: '110px', objectFit: 'cover'}} 
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="h6 mb-1 text-truncate" style={{maxWidth: '150px'}}>{item.movie?.title || 'Film inconnu'}</h5>
                        <button className="btn btn-link text-secondary p-0" onClick={() => remove(item.movie?.id)}>
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                      {/* CORRECTION ICI : Utilisation de pricePerDay avec fallback sécurisé */}
                      <p className="text-warning fw-bold mb-2">
                        {(item.movie?.pricePerDay || 0).toFixed(2)}$ <small className="text-secondary fw-normal">/ jour</small>
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between mt-2">
                        <span className="small text-secondary">Durée (jours)</span>
                        <div className="d-flex align-items-center bg-dark rounded-pill border border-secondary border-opacity-25 px-2">
                          <button className="btn btn-sm text-light px-2" onClick={() => updateDays(item.movie?.id, -1)}>-</button>
                          <span className="mx-2 fw-bold" style={{minWidth: '20px', textAlign: 'center'}}>{item.days}</span>
                          <button className="btn btn-sm text-light px-2" onClick={() => updateDays(item.movie?.id, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary p-3 bg-secondary bg-opacity-10 rounded-4">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Sous-total</span>
              <span>{total.toFixed(2)}$</span>
            </div>
            <div className="border-top border-secondary border-opacity-25 pt-3 d-flex justify-content-between align-items-center mb-4">
              <span className="h5 mb-0 fw-bold">Total</span>
              <span className="h4 mb-0 fw-bold text-warning">{total.toFixed(2)}$ </span>
            </div>
            <button className="btn btn-warning w-100 fw-bold py-3 fs-5 shadow-sm" onClick={onConfirm}>
              Confirmer la location <i className="bi bi-cart-check ms-2"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;