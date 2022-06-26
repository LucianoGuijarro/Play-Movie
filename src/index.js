import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const authDomain = process.env.REACT_APP_AUTH0_DOMAIN;
const authClient = process.env.REACT_APP_AUTH0_CLIENT;
console.log(authDomain, authClient);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={authClient}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
