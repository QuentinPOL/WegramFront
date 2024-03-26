// SendInscription.js
const handleFormSubmit = async (nom, pseudo, email, password, dateNaissance, history) => {

    const formData = {
      nom,
      pseudo,
      email,
      password,
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