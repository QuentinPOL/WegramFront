import React, { useState, useEffect } from 'react';
import './css/connexion.css'; 
import { Link } from 'react-router-dom';
import logo_wegram from './images/wegram.png';
import handleFormSubmit from './SendInscription'; // Import de la fonction pour envoyer les données

function Inscription() {
  const [nom, setNom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateNaissanceChange = (event) => {
    setDateNaissance(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleFormSubmit(nom, pseudo, email, password, dateNaissance);

    // Réinitialiser les champs du formulaire après l'inscription
    setNom('');
    setPseudo('');
    setEmail('');
    setPassword('');
    setDateNaissance('');
  };

  useEffect(() => {
    setIsButtonDisabled(
      nom.trim() === '' ||
      pseudo.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      dateNaissance.trim() === ''
    );
  }, [nom, pseudo, email, password, dateNaissance]);

  const maxDate = new Date().toISOString().slice(0, 10);
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
                  <span className="padding-bottom--15">S'inscrire</span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <label htmlFor="nom">Nom</label>
                      <input type="nom" name="nom" value={nom} onChange={handleNomChange} />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="pseudo">Pseudo</label>
                      <input type="pseudo" name="pseudo" value={pseudo} onChange={handlePseudoChange} />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="date-naissance">Date de naissance</label>
                      <input type="date" id="date-naissance" name="date-naissance" value={dateNaissance} onChange={handleDateNaissanceChange} max={maxDate} required/>
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Mot de passe</label>
                      </div>                     
                      <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="S'inscrire" disabled={isButtonDisabled} className={buttonClassName} />
                    </div>
                    <div className="field">
                      <a className="ssolink" href="#">S'inscrire avec Google</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>Vous avez deja un compte? <Link to="/">Se connecter</Link></span>
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

export default Inscription;