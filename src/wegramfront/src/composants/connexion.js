import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'; // Importez useHistory depuis 'react-router'
import './css/connexion.css';
import logo_wegram from './images/wegram.png';
import handleLoginSubmit from './SendLogin'; // Assurez-vous que cette fonction est correctement importée depuis votre fichier SendLogin

function Connexion() {
  const history = useHistory();

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

  // Définissez une classe CSS pour le bouton en fonction de la valeur de isButtonDisabled
  const buttonClassName = isButtonDisabled ? 'disabled-button' : 'enabled-button';

  return (
    <main>


      <div className="login-root">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: "100vh", flexGrow: 1 }}>
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div className="box-root flex-flex" style={{ gridArea: "top / start / 8 / end" }}>
                <div className="box-root" style={{ backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: 1 }}>
                </div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "4 / 2 / auto / 5" }}>
                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "6 / start / auto / 2" }}>
                <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "7 / start / auto / 4" }}>
                <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "8 / 4 / auto / 6" }}>
                <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "2 / 15 / auto / end" }}>
                <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "3 / 14 / auto / end" }}>
                <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "4 / 17 / auto / 20" }}>
                <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
              </div>
              <div className="box-root flex-flex" style={{ gridArea: "5 / 14 / auto / 17" }}>
                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
              </div>
            </div>
          </div>
          <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              {/* <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Stackfindover</a></h1> */}
              
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48"><img style={{width: "345px"}} alt='wegram_logo' src={logo_wegram} />
                  <span className="padding-bottom--15">Se connecter</span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Adresse mail / Pseudo</label>
                      <input type="text" name="email" value={emailOrPseudo} onChange={handleEmailOrPseudoChange} />
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Mot de passe</label>
                        <div className="reset-pass">
                          <a href="#">Mot de passe oublié?</a>
                        </div>
                      </div>
                      <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label htmlFor="checkbox">
                        <input type="checkbox" name="checkbox" /> Rester connecté
                      </label>
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="Continue" disabled={isButtonDisabled} className={buttonClassName} />
                    </div>
                    <div className="field">
                      <a className="ssolink" href="#">Se connecter avec Google</a>
                    </div>
                  </form>

                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>Vous n'avez pas de compte? <Link to="/inscription">S'inscrire</Link></span>
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a target='blank' href="https://hugotabary.fr">© HugoTablouray-dvd.fr</a></span>
                  <span><a href="#">insta : dams.lps</a></span>
                  <span><a href="#">Privacy & terms</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default Connexion;
