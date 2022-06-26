import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './LoginButton.module.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <button className={`${styles.boton} ms-2 me-4`} onClick={() => loginWithRedirect()}>Login</button>
  )
}

export default LoginButton