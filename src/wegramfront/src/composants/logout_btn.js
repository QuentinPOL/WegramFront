import React from 'react';
import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie pour faciliter la gestion des cookies

const LogoutButton = () => {
  const handleLogout = () => {
    // Supprimez le cookie d'authentification
    Cookies.remove('authToken');

    // Redirigez l'utilisateur vers la page de connexion
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout}>
      Déconnexion
    </button>
  );
};

export default LogoutButton;
