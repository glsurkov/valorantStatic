import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Auth0Provider} from "@auth0/auth0-react";
import "./css/styles.scss"

ReactDOM.render(
    <Auth0Provider
        domain='dev-qxnv5vbu.us.auth0.com'
        clientId='7ez3itepBi3yRgZXNMfveOXVQDbtvxP8'
        redirectUri='http://localhost:3000/news'>
        <App />
    </Auth0Provider>,
  document.getElementById('root')
);
