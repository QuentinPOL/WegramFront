import React, { useState, useEffect } from 'react';
import './css/connexion.css';
import { Link } from 'react-router-dom';
import handleLoginSubmit from './SendLogin'; // Assurez-vous que cette fonction est correctement importée depuis votre fichier SendLogin

function Connexion() {
  const [emailOrPseudo, setEmailOrPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleEmailOrPseudoChange = (event) => {
    setEmailOrPseudo(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Envoyer les données de connexion au backend
      await handleLoginSubmit(emailOrPseudo, password);
      
      // Réinitialiser les champs après la soumission réussie
      setEmailOrPseudo('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      // Gérer les erreurs de connexion
      setErrorMessage('Identifiants invalides. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    setIsButtonDisabled(emailOrPseudo.trim() === '' || password.trim() === '');
  }, [emailOrPseudo, password]);

  return (
    <main className="flex align-items-center justify-content-center">
 
      <section id="mobile" className="flex">
        <img alt="Phone img" src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1.png?__d=www" className="phone-image" />
      </section>
        <div className="content"></div>
      
      <section id="auth" className="flex direction-column">
        <div className="panel login flex direction-column">
          <h1 title="Instagram" className="flex justify-content-center">
            <img alt="Provigram img" src="./Provigram.png" className="logo-image" />
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="emailOrPseudo" className="sr-only">Email ou Pseudo</label>
            <input
              name="emailOrPseudo"
              placeholder="Email ou Pseudo"
              value={emailOrPseudo}
              onChange={handleEmailOrPseudoChange}
            />

            <label htmlFor="password" className="sr-only">Mot de passe</label>
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              type="submit"
              className={`login-button ${isButtonDisabled ? 'disabled' : ''} ${!isButtonDisabled ? 'filled' : ''}`}
              disabled={isButtonDisabled}
            >
              Se connecter
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="flex separator align-items-center">
            <span></span>
            <div className="or">OU</div>
            <span></span>
          </div>
          <div className="login-with-fb flex direction-column align-items-center">
            <div>
              <img src="./google.png" alt="google-logo" className="google-logo"/>
              <a>Se connecter avec Google</a>
            </div>
            <a href="#">Mot de passe oublié ?</a>
          </div>
        </div>
        <div className="panel register flex justify-content-center" >
          <p style={{ color: 'black' }}>Vous n'avez pas de compte ?</p>
          <Link to="/inscription">Inscrivez-vous</Link>
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


export default Connexion;