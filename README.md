🎬 MovieRent - Boutique de Location de Films
Description
MovieRent est une application React moderne et performante permettant de parcourir et de louer un vaste catalogue de films. La plateforme offre une expérience utilisateur fluide avec des recherches en temps réel, une gestion avancée des filtres et un système de panier persistant.

Fonctionnalités Clés
Catalogue Dynamique : Affichage en grille avec posters de haute qualité et informations détaillées.
Filtres Intelligents : Recherche par titre (insensible à la casse), filtrage par genre, disponibilité, nouveautés et prix maximum.
Tri Avancé : Classement par note, prix (croissant/décroissant) et titre (A-Z).
Panier Interactif : Ajout/suppression de films, ajustement de la durée de location et calcul du total en temps réel.
Persistance des Données : Intégration du LocalStorage pour conserver le panier et la bibliothèque même après rafraîchissement.
Bibliothèque Utilisateur : Suivi des locations actives avec décompte du temps restant.
Stack Technique
Frontend : React 18 & Vite
Styling : Bootstrap 5 & Custom CSS
Gestion d'État : React Hooks (useState, useEffect, useMemo)
Icônes : Bootstrap Icons
Installation
Clonez le dépôt ou téléchargez les fichiers.
Naviguez dans le dossier du projet : cd movierent
Installez les dépendances : npm install
Lancez le serveur de développement : npm run dev
Structure du Projet
movierent/
├── src/
│   ├── components/    # Composants UI Réutilisables
│   ├── data/          # Base de données locale (movies.js)
│   ├── App.jsx        # Logique principale et routage
│   ├── App.css        # Styles personnalisés MovieRent
│   └── main.jsx       # Point d'entrée de l'application
└── public/            # Assets statiques
© 2026 MovieRent Project. Développé avec passion pour les amoureux du cinéma.