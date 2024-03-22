// SendInscription.js
const handleFormSubmit = async (nom, prenom, pseudo, email, password) => {
    const formData = {
      nom,
      prenom,
      pseudo,
      email,
      password
    };
  
    try {
      const response = await fetch('http://192.168.64.136:3000/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Inscription réussie !');
        // Gérer la redirection ou les actions après l'inscription réussie
      } else {
        console.error('Échec de l\'inscription');
        // Gérer les erreurs en cas d'échec de l'inscription
      }
    } catch (error) {
      console.error('Erreur lors de la tentative d\'inscription :', error);
      // Gérer les erreurs en cas d'échec de l'inscription
    }
  };
  
  export default handleFormSubmit;
  