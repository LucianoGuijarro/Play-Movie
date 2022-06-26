import React from 'react';
import { Link } from 'react-router-dom';

const Titulo = () => {
  return (
    <Link to={"/"}><h1 className='text-center text-light m-5'>Peliculas</h1></Link>
  )
}

export default Titulo
