import React, { useState, useEffect, useMemo } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { movies as initialMovies } from './data/movies';
import './App.css';


// Import de vos composants
import Navbar from './components/Navbar.jsx';
import MovieList from './components/MovieList.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import Cart from './components/Cart.jsx';
import Confirmation from './components/Confirmation.jsx';
import MyLibrary from './components/MyLibrary.jsx';
import Notification from './components/Notification.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Navigation : 'home', 'detail', 'cart', 'confirmation', 'library'
  const [view, setView] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [notification, setNotification] = useState(null);

  // Données
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('movierent_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [library, setLibrary] = useState(() => {
    const saved = localStorage.getItem('movierent_library');
    return saved ? JSON.parse(saved) : [];
  });

  // Filtres
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ 
    genre: 'Tous', 
    onlyAvailable: false, 
    onlyNew: false, 
    maxPrice: 20 
  });
  const [sortBy, setSortBy] = useState('rating');

  // Persistance
  useEffect(() => {
    localStorage.setItem('movierent_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('movierent_library', JSON.stringify(library));
  }, [library]);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Logique Panier
  const addToCart = (movie) => {
    if (!movie.inStock) return;
    const exists = cart.find(item => item.movie.id === movie.id);
    if (exists) {
      updateCartDays(movie.id, 1);
    } else {
      setCart([...cart, { movie, days: 1 }]);
    }
    showNotification(`${movie.title} ajouté au panier !`);
  };

  const updateCartDays = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.movie.id === id) {
        const newDays = item.days + delta;
        return newDays > 0 ? { ...item, days: newDays } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.movie.id !== id));
  };

  const confirmRental = () => {
    // Ajouter les films du panier à la bibliothèque
    setLibrary([...library, ...cart]);
    // Vider le panier
    setCart([]);
    setView('confirmation');
  };

  // Filtrage combiné (Recherche insensible à la casse incluse)
  const filteredMovies = useMemo(() => {
    return initialMovies
      .filter(m => {
        const title = m.title || "";
        const matchesSearch = title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = filters.genre === 'Tous' || m.genre === filters.genre;
        const matchesAvailable = !filters.onlyAvailable || m.inStock;
        const matchesNew = !filters.onlyNew || m.isNewRelease;
        const matchesPrice = m.pricePerDay <= filters.maxPrice;
        return matchesSearch && matchesGenre && matchesAvailable && matchesNew && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') return a.pricePerDay - b.pricePerDay;
        if (sortBy === 'price_desc') return b.pricePerDay - a.pricePerDay;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return b.rating - a.rating;
      });
  }, [search, filters, sortBy]);

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar 
        setView={setView} 
        cartCount={cart.length} 
        search={search} 
        setSearch={setSearch} 
      />
      
      <main className="container py-4 flex-grow-1">
        {notification && <Notification message={notification} />}

        {view === 'home' && (
          <MovieList 
            movies={filteredMovies} 
            filters={filters} 
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onDetail={(m) => { setSelectedMovie(m); setView('detail'); }}
            onAdd={addToCart}
          />
        )}

        {view === 'detail' && selectedMovie && (
          <MovieDetail 
            movie={selectedMovie} 
            onBack={() => setView('home')} 
            onAdd={addToCart} 
          />
        )}

        {view === 'cart' && (
          <Cart 
            items={cart} 
            updateDays={updateCartDays} 
            remove={removeFromCart} 
            onBack={() => setView('home')}
            onConfirm={confirmRental}
          />
        )}

        {view === 'confirmation' && (
          <Confirmation 
            items={library.slice(-cart.length)} // Affiche les derniers loués
            onViewLibrary={() => setView('library')}
            onBackToHome={() => setView('home')}
          />
        )}

        {view === 'library' && (
          <MyLibrary 
            rentedMovies={library} 
            onBackToHome={() => setView('home')} 
          />
        )}
      </main>

      <Footer setView={setView} />
    </div>
  );
}

export default App;
