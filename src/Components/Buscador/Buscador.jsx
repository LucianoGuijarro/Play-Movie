import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../Buscador/Buscador.module.css'

const Buscador = () => {
  return (
    <>
    <form className={`${styles.buscadorCaja} d-flex flex-nowrap`}>
      <input className={styles.buscadorInput} placeholder="Buscar pelicula" type="text" />
      <button className={styles.buscadorBoton} type='submit'><FaSearch size={20}/></button>
    </form>
    </>
  )
}

export default Buscador