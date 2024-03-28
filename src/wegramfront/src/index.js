import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Profil from "./composants/profil";
import Connexion from "./composants/connexion";
import Inscription from "./composants/inscription";
import PrivateRoute from "./composants/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/profil" element={
          <PrivateRoute>
            <Profil />
          </PrivateRoute>
        } />
        <Route path="/" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
