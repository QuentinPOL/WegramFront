const handleLoginSubmit = async (emailOrPseudo, password) => {
    const formData = {
      emailOrPseudo,
      password
    };
  
    try {
      const response = await fetch('http://192.168.64.136:3000/connexion', {
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
  