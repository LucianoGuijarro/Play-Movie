import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Titulo from './Titulo/Titulo';
import { PeliculasProvider } from '../../Context/PeliculasContext';
import Grid from './Grid/Grid';

const Main = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
    <Titulo />
    {isAuthenticated && <h2 className='text-light ms-4'>{`Bienvenido ${user.name}`}</h2>}
    <PeliculasProvider>
        <Grid />
    </PeliculasProvider>
    </>
  )
}

export default Main