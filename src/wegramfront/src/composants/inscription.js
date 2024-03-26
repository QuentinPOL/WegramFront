// InscriptionPage.js
import React, { useState, useEffect } from 'react';
import './css/connexion.css'; 
import { Link } from 'react-router-dom';
// import handleFormSubmit from './SendInscription'; // Import de la fonction pour envoyer les données

function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }

    // handleFormSubmit(nom, prenom, pseudo, email, password);
    
    // Réinitialiser les champs du formulaire après l'inscription
    setNom('');
    setPrenom('');
    setPseudo('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  useEffect(() => {
    setIsButtonDisabled(
      nom.trim() === '' ||
      prenom.trim() === '' ||
      pseudo.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      password !== confirmPassword
    );
  }, [nom, prenom, pseudo, email, password, confirmPassword]);

  return (
    <main className="flex align-items-center justify-content-center">
      <section id="mobile" className="flex">
        <img alt="Phone img" src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png" className="phone-image" />
      </section>
      <section id="auth" className="flex direction-column">
        <div className="panel register flex direction-column" >
          <h1 title="Instagram" className="flex justify-content-center">
            <img alt="wegram img" src="./wegram.png" className="logo-image" />
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              name="nom"
              placeholder="Nom"
              value={nom}
              onChange={handleNomChange}
            />
            <input
              name="prenom"
              placeholder="Prénom"
              value={prenom}
              onChange={handlePrenomChange}
            />
            <input
              name="pseudo"
              placeholder="Pseudo"
              value={pseudo}
              onChange={handlePseudoChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button
              type="submit"
              className={`login-button ${isButtonDisabled ? 'disabled' : ''} ${!isButtonDisabled ? 'filled' : ''}`}
              disabled={isButtonDisabled}
            >
              S'inscrire
            </button>
          </form>
        </div>
        <div className="panel register flex justify-content-center">
            <p style={{ color: 'black' }}>Vous avez  un compte ?</p>
            <Link to="/connexion">Connectez-vous</Link>
          </div>
      </section>
      <footer className="footer">
        <div className="footer-links">
          <a href="http://bit.ly/wegram">wegram</a>
          <a href="http://google.com">À propos</a>
          <a href="http://google.com">Blog</a>
          <a href="http://google.com">Emplois</a>
          <a href="http://google.com">Aide</a>
          <a href="http://google.com">API</a>
          <a href="http://google.com">Confidentialité</a>
          <a href="http://google.com">Paramètres des cookies</a>
          <a href="http://google.com">Conditions</a>
          <a href="http://google.com">Lieux</a>
          <a href="http://google.com">wegram Lite</a>
          <a href="http://google.com">Youtube</a>
        </div>
        <div className="footer-copy">
          <p>© 2024 wegram par Provi</p>
        </div>
      </footer>
    </main>
  );
}

export default Inscription;