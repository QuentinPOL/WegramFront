// InscriptionPage.js
import React, { useState, useEffect } from 'react';
import './css/connexion.css'; 
import './inscription.script'; 
import { Link } from 'react-router-dom';
import logo_wegram from './images/wegram.png';

// import handleFormSubmit from './SendInscription'; // Import de la fonction pour envoyer les données

function Inscription() {
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
                  <form id="stripe-login">
                    <div className="field padding-bottom--24">
                      <label htmlFor="nom">Nom</label>
                      <input type="nom" name="nom" />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="pseudo">Pseudo</label>
                      <input type="pseudo" name="pseudo" />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="date-naissance">Date de naissance</label>
                      <input type="date" id="date-naissance" name="date-naissance" required/>
                    </div>
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Mot de passe</label>
                      </div>                     
                      <input type="password" name="password" />
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="S'inscrire" />
                    </div>
                    <div className="field">
                      <a className="ssolink" href="#">S'inscrire avec Google</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>Vous avez deja un compte? <Link to="/connexion">se connecter</Link></span>
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