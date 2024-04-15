import SHA256 from 'crypto-js/sha256'; // Importez la fonction SHA256 de crypto-js
import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie pour faciliter la gestion des cookies


const handleLoginSubmit = async (emailOrPseudo, password) => {
  const hashedPassword = SHA256(password).toString(); // Hashage du mot de passe en SHA-256

  const formData = {
    emailOrPseudo,
    hashedPassword
  };

  try {
    const response = await fetch('http://192.168.65.46:8080/connexion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      const data = await response.json();
      const token = data.token;
    
      // Stockez le jeton d'authentification dans un cookie
      Cookies.set('authToken', token);
    
      // Redirection vers la page de profil ou autres actions après la connexion réussie
      window.location.href = '/profile';
      return { success: true };
    } else if (response.status === 401) {
      // Identifiants invalides
      console.error('Identifiants invalides. Veuillez réessayer.');
      return { error: 'Identifiants invalides. Veuillez réessayer.' };
    } else {
      // Autres erreurs
      console.error('Une erreur s\'est produite lors de la connexion.');
      return { error: 'Une erreur s\'est produite lors de la connexion.' };
    }
  } catch (error) {
    console.error('Erreur lors de la tentative de connexion :', error);
    return { error: 'Erreur lors de la tentative de connexion.' };
  }
};

export default handleLoginSubmit;