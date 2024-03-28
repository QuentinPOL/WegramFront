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

      if (response.status === 200) {
        // Connexion réussie
        console.log('Connexion réussie !');
        // Redirection vers la page de profil ou autres actions après la connexion réussie
        window.location.href = '/profil';
      } else if (response.status === 401) {
        // Identifiants invalides
        console.error('Identifiants invalides. Veuillez réessayer.');
        // Afficher un message à l'utilisateur ou d'autres actions en cas d'échec de la connexion
      } else {
        // Autres erreurs
        console.error('Une erreur s\'est produite lors de la connexion.');
        // Gérer les autres erreurs, afficher un message générique à l'utilisateur par exemple
      }
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion :', error);
      // Gérer les erreurs en cas d'échec de la connexion
    }
  };

  export default handleLoginSubmit;