import React from 'react';
import './css/connexion.css';

function Connexion() {
    return (
        <div className="login">
        <h1><img src="https://i.imgur.com/wvLiKam.png" alt="Instagram Logo" width="200px" height="68px" /></h1>
        <form action="" method="POST">
          <input placeholder="Phone number, username, or email" type="text" name="username" />
          <input placeholder="Password" type="password" name="password" />
          <input type="submit" value="Log In" /> 
        </form>
        <div className="forgotwrapper">
          <div className="forgot"><a href="https://instagram.com">Forgot password?</a></div>
        </div>
        <div className="infobox">
          <p>Don't have an account? <a href="https://instagram.com">Sign up</a></p>
        </div>
      </div>
    );
}

export default Connexion;