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
      window.location.href = '/profil';
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






/*




    Modifiez le backend pour qu'il renvoie un jeton d'authentification en cas de connexion réussie :

// Dans votre backend, après avoir vérifié les identifiants
const token = generateAuthenticationToken(user); // Fonction pour générer un jeton d'authentification
res.status(200).json({ success: true, token });





npm install jsonwebtoken













Pour intégrer la génération et l'envoi du jeton d'authentification, vous devez d'abord installer la bibliothèque jsonwebtoken pour générer le jeton. Ensuite, vous pouvez modifier la route de connexion pour générer et envoyer le jeton d'authentification lorsque la connexion est réussie.

    Installez la bibliothèque jsonwebtoken :

npm install jsonwebtoken

    Modifiez le code du serveur pour importer jsonwebtoken et générer le jeton d'authentification :

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Importez jsonwebtoken

const app = express();
const port = 8080;
const secretKey = 'votre_clé_secrète'; // Utilisez une clé secrète pour signer les jetons

// ...

// Route de connexion
app.post('/connexion', (req, res) => {
  const { emailOrPseudo, hashedPassword } = req.body; // Les infos

  // Requête SQL pour sélectionner l'utilisateur
  const sqlConnexion = `SELECT * FROM User WHERE (Pseudo = ? OR Email = ?) AND Passwd = ?`;
  db.query(sqlConnexion, [emailOrPseudo, emailOrPseudo, hashedPassword], (err, results) => {
      if (err) {
          console.error("Erreur lors de la requête SQL :", err);
          return res.status(500).json({ message: "Une erreur s'est produite lors de la connexion." });
      }

      // Vérifiez si l'utilisateur existe dans la base de données
      if (results.length === 0) {
        // Aucun utilisateur trouvé avec ces identifiants
        return res.status(401).json({ message: "Identifiants invalides. Veuillez réessayer." });
      }

      // L'utilisateur est trouvé, vérifiez maintenant le mot de passe
      const user = results[0];

      // Générez un jeton d'authentification
      const token = jwt.sign({ userId: user.Id }, secretKey, { expiresIn: '1h' });

      // L'utilisateur est authentifié avec succès
      return res.status(200).json({ success: true, token });
  });
});

// ...

Maintenant, lorsque la connexion est réussie, le serveur renvoie un objet JSON contenant le jeton d'authentification. Vous pouvez ensuite utiliser ce jeton dans votre application frontend pour vérifier si l'utilisateur est connecté et autoriser ou non l'accès à certaines pages.



*/ 
