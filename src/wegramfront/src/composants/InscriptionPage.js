// InscriptionPage.js
import React, { useState, useEffect } from 'react';
import './LoginPage.css'; 
import { Link } from 'react-router-dom';
import handleFormSubmit from './SendInscription'; // Import de la fonction pour envoyer les données

function InscriptionPage() {
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

    handleFormSubmit(nom, prenom, pseudo, email, password);
    
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
        <img alt="Phone img" src="./auth.png" className="phone-image" />
      </section>
      <section id="auth" className="flex direction-column">
        <div className="panel register flex direction-column" >
          <h1 title="Instagram" className="flex justify-content-center">
            <img alt="Provigram img" src="./Provigram.png" className="logo-image" />
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
            <Link to="/">Connectez-vous</Link>
          </div>
      </section>
      <footer className="footer">
        <div className="footer-links">
          <a href="http://bit.ly/proviflix">Proviflix</a>
          <a href="#">À propos</a>
          <a href="#">Blog</a>
          <a href="#">Emplois</a>
          <a href="#">Aide</a>
          <a href="#">API</a>
          <a href="#">Confidentialité</a>
          <a href="#">Paramètres des cookies</a>
          <a href="#">Conditions</a>
          <a href="#">Lieux</a>
          <a href="#">Provigram Lite</a>
          <a href="#">Youtube</a>
        </div>
        <div className="footer-copy">
          <p>© 2024 Provigram par Provi</p>
        </div>
      </footer>
    </main>
  );
}

export default InscriptionPage;