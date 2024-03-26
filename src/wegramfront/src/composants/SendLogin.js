import SHA256 from 'crypto-js/sha256'; // Importez la fonction SHA256 de crypto-js

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

      if (response.ok) {
        console.log('Connexion réussie !');
        // Gérer la redirection ou les actions après la connexion réussie
      } else {
        console.error('Échec de la connexion');
        // Gérer les erreurs en cas d'échec de la connexion
      }
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion :', error);
      // Gérer les erreurs en cas d'échec de la connexion
    }
  };

  export default handleLoginSubmit;