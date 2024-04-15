// SendInscription.js
import SHA256 from 'crypto-js/sha256'; // Importez la fonction SHA256 de crypto-js
import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie pour faciliter la gestion des cookies


const handleFormSubmit = async (nom, pseudo, email, password, dateNaissance) => {
  const hashedPassword = SHA256(password).toString(); // Hashage du mot de passe en SHA-256

  const formData = {
    nom,
    pseudo,
    email,
    hashedPassword,
    dateNaissance
  };

  try {
    const response = await fetch('http://192.168.65.46:8080/inscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      console.log('Inscription réussie !');
      // Gérer la redirection ou les actions après l'inscription réussie
      const data = await response.json();
      const token = data.token;

      // Stockez le jeton d'authentification dans un cookie
      Cookies.set('authToken', token);

      // Redirection vers la page de profil ou autres actions après la connexion réussie
      window.location.href = '/profile';
      return { success: true };
    }
    else if (response.status === 400) {
      console.error('Échec de l\'inscription email ou pseudo déjà existant !');
      return { error: 'Échec de l\'inscription email ou pseudo déjà existant !' };
      // Gérer les erreurs en cas d'échec de l'inscription
    }
    else {
      console.error('Échec de l\'inscription');
      return { error: 'Échec de l\'inscription' };
    }
  } catch (error) {
    console.error('Erreur lors de la tentative d\'inscription :', error);
    return { error: 'Erreur lors de la tentative d\'inscription.' };
    // Gérer les erreurs en cas d'échec de l'inscription
  }
};

export default handleFormSubmit;