import React from 'react';
import './css/connexion.css';
import './js_scripts/connexion.script.js';
// import { Link } from 'react-router-dom';
// import handleLoginSubmit from './SendLogin'; // Assurez-vous que cette fonction est correctement importée depuis votre fichier SendLogin

function Connexion() {
  return (
    <main>


      <h1>Step by step form</h1>
      <h2>Just practising Javascript</h2>
      <form>
        <ul class="items"></ul>
        <fieldset class="username enable">
          <div class="icon left"><i class="user"></i></div>
          <input type="text" name="username" placeholder="Username" />
          <div class="icon right button"><i class="arrow"></i></div>
        </fieldset>
        <fieldset class="email">
          <div class="icon left"><i class="letter"></i></div>
          <input type="mail" name="email" placeholder="Email" />
          <div class="icon right button"><i class="arrow"></i></div>
        </fieldset>
        <fieldset class="password">
          <div class="icon left"><i class="lock"></i></div>
          <input type="password" name="password" placeholder="Password" />
          <div class="icon right button"><i class="arrow"></i></div>
        </fieldset>
        <fieldset class="thanks">
          <div class="icon left"><i class="heart"></i></div>
          <p>Thanks for your time</p>
          <div class="icon right"><i class="heart"></i></div>
        </fieldset>
      </form>
    </main>
  );
}


export default Connexion;