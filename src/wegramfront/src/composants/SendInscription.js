// SendInscription.js
import SHA256 from 'crypto-js/sha256'; // Importez la fonction SHA256 de crypto-js

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

      if (response.status === 200) 
      {
        console.log('Inscription réussie !');
        // Gérer la redirection ou les actions après l'inscription réussie
        window.location.href = '/profil';
      } 
      else if (response.status === 400) 
      {
        console.error('Échec de l\'inscription email ou pseudo déjà existant !');
        // Gérer les erreurs en cas d'échec de l'inscription
      } 
      else 
      {
        console.error('Échec de l\'inscription');
        // Gérer les erreurs en cas d'échec de l'inscription
      }
    } catch (error) {
      console.error('Erreur lors de la tentative d\'inscription :', error);
      // Gérer les erreurs en cas d'échec de l'inscription
    }
  };

  export default handleFormSubmit;